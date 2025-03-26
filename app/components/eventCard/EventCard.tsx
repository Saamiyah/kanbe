"use client";

import { Event } from "@/app/api/data";
import { useDrag } from "react-dnd";
import { useState } from "react";

const ItemType = "EVENT";

type Props = {
  event: Event;
  dateString: string;
};

export default function EventCard({ event, dateString }: Props) {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType,
    item: { id: event.id, event, sourceDate: dateString },
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging(),
      };
    },
  }));

  return (
    <div
      key={event.id}
      style={{
        opacity: isDragging ? 0.5 : 1,
        backgroundColor: isDragging ? "red" : "none",
        touchAction: "none",
      }}
      ref={drag}
      onClick={() => setSelectedEvent(event)}
    >
      <div>
        <p className="text-sm font-bold flex justify-end bg-none text-black font-playfair">
          {event.time}
        </p>

        <div className="text-lg text-gray-500  hover:text-gray-900 cursor-pointer p-8 border-t-2 border-amber-400 shadow-md bg-white">
          <div className="w-auto overflow-ellipsis flex flex-col gap-2 ">
            <p className="font-medium text-sm">{event.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
