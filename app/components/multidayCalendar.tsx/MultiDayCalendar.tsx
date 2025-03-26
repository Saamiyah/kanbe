"use client";

import { addDays, format, startOfWeek } from "date-fns";

import ChevronLeft from "@/app/icons/ChevronLeft";
import ChevronRight from "@/app/icons/ChevronRight";
import { useState } from "react";

export default function MultiDayCalendar({ eventList }) {
  const [currentWeek, setCurrentWeek] = useState(new Date());

  const startOfCurrentWeek = startOfWeek(currentWeek, { weekStartsOn: 1 });

  const weekDays = Array.from({ length: 7 }, (_, i) =>
    format(addDays(startOfCurrentWeek, i), "yyyy-MM-dd")
  );

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
      <div className="relative w-full">
        <div className="items-center space-4 gap-4 flex">
          <button
            onClick={() => {}}
            className="px-4 py-2 bg-light rounded hover:bg-dark cursor-pointer"
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
              </div>
            );
          })}

          <button
            onClick={() => {}}
            className="px-4 py-2 bg-light rounded hover:bg-dark cursor-pointer"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </>
  );
}
