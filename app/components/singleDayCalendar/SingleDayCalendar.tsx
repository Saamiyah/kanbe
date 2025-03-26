"use client";

import { addDays, format, parse, startOfWeek } from "date-fns";
import { useRef, useState } from "react";

import DayColumn from "../dayColumn/DayColumn";
import { EventsByDate } from "@/app/api/data";
import { useDrop } from "react-dnd";
import { useSwipeable } from "react-swipeable";

type Props = {
  eventList: EventsByDate;
  setEventList: (events: EventsByDate) => void;
};

export default function SingleDayCalendar({ eventList, setEventList }: Props) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const dropPrevRef = useRef<HTMLDivElement>(null);
  const dropNextRef = useRef<HTMLDivElement>(null);
  const formattedDate = format(currentDate, "yyyy-MM-dd");

  const daysofTheWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const changeDay = (newDate: Date) => {
    setCurrentDate(newDate);
  };

  const startOfCurrentWeek = startOfWeek(currentDate, { weekStartsOn: 1 });
  const weekDays = Array.from({ length: 7 }, (_, i) =>
    addDays(startOfCurrentWeek, i)
  );

  const handlers = useSwipeable({
    onSwipedLeft: () => changeDay(addDays(currentDate, 1)),
    onSwipedRight: () => changeDay(addDays(currentDate, -1)),
    delta: 100,
  });

  const [{ isOverNext }, dropNext] = useDrop(() => ({
    accept: "EVENT",
    hover: () => {
      changeDay(addDays(currentDate, 1));
    },
    collect: (monitor) => ({
      isOverNext: monitor.isOver(),
    }),
  }));

  const [{ isOverPrev }, dropPrev] = useDrop(() => ({
    accept: "EVENT",
    hover: () => {
      changeDay(addDays(currentDate, -1));
    },
    collect: (monitor) => ({
      isOverPrev: monitor.isOver(),
    }),
  }));

  dropPrev(dropPrevRef);
  dropNext(dropNextRef);

  return (
    <>
      <header className="relative w-full font-playfair text-black p-4  bg-linear-to-r from-primary to-secondary">
        <div className="grid grid-cols-7 gap-2 ">
          {weekDays.map((day, index) => (
            <div
              key={day.toString()}
              onClick={() => changeDay(day)}
              className={`${
                format(currentDate, "yyyy-MM-dd") ===
                  format(day, "yyyy-MM-dd") && "bg-primary shadow-md"
              } p-2 w-auto flex flex-col justify-center items-center bg-gray-100 rounded-md`}
            >
              <div>{daysofTheWeek[index]}</div>
              <div>{format(day, "dd").padStart(2, "0")}</div>
            </div>
          ))}
        </div>
      </header>
      <div className="relative w-full" {...handlers}>
        <h3 className="m-4 text-gray-600 font-playfair text-lg">
          {format(currentDate, "EEEE, dd MMM yyyy")}
        </h3>

        <div className="absolute w-10 h-full z-10" ref={dropPrevRef}></div>
        <DayColumn
          dateString={formattedDate}
          events={eventList[formattedDate] || []}
          key={formattedDate}
          setEventList={setEventList}
        />
        <div className="absolute w-10 h-full z-10" ref={dropNextRef}></div>
      </div>
    </>
  );
}
