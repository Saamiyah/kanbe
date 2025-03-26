"use client";

import { addDays, addWeeks, format, startOfWeek } from "date-fns";
import { useMemo, useState } from "react";

import ChevronLeft from "@/app/icons/ChevronLeft";
import ChevronRight from "@/app/icons/ChevronRight";
import DayColumn from "../dayColumn/DayColumn";
import { EventsByDate } from "@/app/api/data";

type Props = {
  eventList: EventsByDate;
};

export default function MultiDayCalendar({ eventList }: Props) {
  const [currentWeek, setCurrentWeek] = useState(new Date());

  const startOfCurrentWeek = startOfWeek(currentWeek, { weekStartsOn: 1 });

  const weekDays = Array.from({ length: 7 }, (_, i) =>
    format(addDays(startOfCurrentWeek, i), "yyyy-MM-dd")
  );

  const filteredEvents = useMemo(() => {
    return weekDays.reduce((acc, day) => {
      if (eventList[day]) {
        acc[day] = eventList[day];
      }
      return acc;
    }, {});
  }, [eventList, weekDays]);

  const changeWeek = (direction: number) => {
    setCurrentWeek((prev) => addWeeks(prev, direction * 1));
  };

  const daysofTheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <>
      <div className="relative w-full font-playfair">
        <div className="items-center space-4 gap-4 flex">
          <button
            onClick={() => changeWeek(-1)}
            className="px-4 py-2 bg-primary rounded hover:bg-secondary cursor-pointer"
          >
            <ChevronLeft />
          </button>

          {/* Week View */}
          {weekDays.map((day, index) => {
            return (
              <div className="flex flex-col gap-2" key={day.toString()}>
                <div
                  className={`py-4 w-full flex flex-col justify-center items-center `}
                >
                  <div
                    className={`${
                      format(day, "yyyy-MM-dd") ==
                        format(new Date(), "yyyy-MM-dd") &&
                      "font-bold underline"
                    }`}
                  >
                    {daysofTheWeek[index].toLocaleUpperCase()}
                  </div>
                  <div>{format(day, "dd").padStart(2, "0")}</div>
                </div>
                <DayColumn
                  events={filteredEvents[day] || []} // Pass only the events for that day
                />
              </div>
            );
          })}

          <button
            onClick={() => changeWeek(1)}
            className="px-4 py-2 bg-primary rounded hover:bg-secondary cursor-pointer"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </>
  );
}
