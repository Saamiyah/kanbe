"use client";

import MultiDayCalendar from "../multidayCalendar.tsx/MultiDayCalendar";
import events from "../../api/data";
import { useState } from "react";

export default function Calendar() {
  const [eventList, setEventList] = useState(events);

  return (
    <div className="md:p-6 rounded-2xl">
      <div className="hidden md:block">
        <MultiDayCalendar eventList={eventList} />
      </div>
    </div>
  );
}
