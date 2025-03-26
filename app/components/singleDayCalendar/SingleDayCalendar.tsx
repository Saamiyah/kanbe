"use client";

import DayColumn from "../dayColumn/DayColumn";
import { EventsByDate } from "@/app/api/data";
import { format } from "date-fns";
import { useState } from "react";

type Props = {
  eventList: EventsByDate;
};

export default function SingleDayCalendar({ eventList }: Props) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const formattedDate = format(currentDate, "yyyy-MM-dd");

  return (
    <>
      <div className="relative w-full">
        <h3 className="my-4 text-black">
          {format(currentDate, "EEEE, dd MMM")}
        </h3>

        <DayColumn
          events={eventList[formattedDate] || []} // Pass only the events for that day
          key={formattedDate}
        />
      </div>
    </>
  );
}
