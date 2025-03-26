"use client";

import { addDays, format, startOfWeek } from "date-fns";

import DayColumn from "../dayColumn/DayColumn";
import { EventsByDate } from "@/app/api/data";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";

type Props = {
  eventList: EventsByDate;
  setEventList: () => void;
};

export default function SingleDayCalendar({ eventList, setEventList }: Props) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const formattedDate = format(currentDate, "yyyy-MM-dd");

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

  return (
    <>
      <header className="relative w-full font-playfair text-black p-4  bg-linear-to-r from-primary to-secondary">
        <div className="grid grid-cols-7 gap-2 ">
          {weekDays.map((day) => (
            <div
              key={day.toString()}
              onClick={() => changeDay(day)}
              className={`${
                format(currentDate, "yyyy-MM-dd") ===
                  format(day, "yyyy-MM-dd") && "bg-pink-100"
              } p-2 w-fit flex flex-col justify-center items-center bg-gray-100 rounded-md`}
            >
              <div>{format(day, "dd").padStart(2, "0")}</div>
            </div>
          ))}
        </div>
      </header>

      <div className="relative w-full" {...handlers}>
        <h3 className="my-4 text-black">
          {format(currentDate, "EEEE, dd MMM")}
        </h3>

        <DayColumn
          dateString={formattedDate}
          events={eventList[formattedDate] || []}
          key={formattedDate}
          setEventList={setEventList}
        />
      </div>
    </>
  );
}
