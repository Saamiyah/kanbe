"use client";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import MultiDayCalendar from "../multidayCalendar/MultiDayCalendar";
import SingleDayCalendar from "../singleDayCalendar/SingleDayCalendar";
import events from "@/app/api/data";
import { useState } from "react";

export default function Calendar() {
  const [eventList, setEventList] = useState(events);

  return (
    <div className="md:p-6 rounded-2xl">
      <DndProvider backend={HTML5Backend}>
        <div className="block md:hidden w-full">
          <SingleDayCalendar
            eventList={eventList}
            setEventList={setEventList}
          />
        </div>
        <div className="hidden md:block">
          <MultiDayCalendar eventList={eventList} setEventList={setEventList} />
        </div>
      </DndProvider>
    </div>
  );
}
