"use client";

import { Event } from "@/app/api/data";
import EventCard from "../eventCard/EventCard";

type DayColumnProps = {
  events: Event[];
};

export default function DayColumn({ events }: DayColumnProps) {
  return (
    <div className="h-screen text-center p-2 shadow transition-all bg-white">
      <div className="m-2 flex flex-col gap-4">
        {(events.length > 0 &&
          events.map((event: Event) => (
            <EventCard key={event.id} event={event} />
          ))) || <div className="text-sm text-gray-500">No events</div>}
      </div>
    </div>
  );
}
