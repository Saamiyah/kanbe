"use client";

import { Event, EventsByDate } from "@/app/api/data";
import { compareAsc, parse } from "date-fns";

import EventCard from "../eventCard/EventCard";
import { useDrop } from "react-dnd";

const ItemType = "EVENT";

type DayColumnProps = {
  events: any;
  dateString: string;
  setEventList: (events: any) => void;
};

export default function DayColumn({
  dateString,
  events,
  setEventList,
}: DayColumnProps) {
  const [{ isOver }, drop] = useDrop<
    { sourceDate: string; event: any },
    void,
    { isOver: boolean }
  >(() => ({
    accept: ItemType,
    drop: ({ sourceDate, event }) => {
      if (sourceDate !== dateString) {
        setEventList((prevEvents: EventsByDate) => {
          // remove event from current day
          const updatedSourceEvents = prevEvents[sourceDate].filter(
            (existingEvent: Event) => existingEvent.id !== event.id
          );

          // Add the event to the new day (dateString)
          const updatedTargetEvents = prevEvents[dateString]
            ? [...prevEvents[dateString], event]
            : [event];

          // sort the new day event list in order of their time
          const sortedTargetEvents = updatedTargetEvents.sort((a, b) => {
            return compareAsc(
              parse(a.time, "hh:mm a", new Date()),
              parse(b.time, "hh:mm a", new Date())
            );
          });

          const newEvents = {
            ...prevEvents,
            [dateString]: sortedTargetEvents,
            [sourceDate]: updatedSourceEvents,
          };

          return newEvents;
        });
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className="h-screen font-playfair text-center p-2 shadow transition-all bg-white"
      style={{ opacity: isOver ? 0.5 : 1 }}
    >
      <div className="m-2 flex flex-col gap-4">
        {(events.length > 0 &&
          events.map((event: Event) => (
            <EventCard key={event.id} event={event} dateString={dateString} />
          ))) || <div className="text-sm text-gray-500">No events</div>}
      </div>
    </div>
  );
}
