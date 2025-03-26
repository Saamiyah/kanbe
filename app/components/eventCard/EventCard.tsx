"use client";

import { useRef, useState } from "react";

import { Event } from "@/app/api/data";
import EventDetail from "../eventDetail/EventDetail";
import { useDrag } from "react-dnd";

const ItemType = "EVENT";

type Props = {
  event: Event;
  dateString: string;
};

export default function EventCard({ event, dateString }: Props) {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const dragRef = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType,
    item: { id: event.id, event, sourceDate: dateString },
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging(),
      };
    },
  }));

  drag(dragRef);

  return (
    <div
      key={event.id}
      style={{
        opacity: isDragging ? 0.5 : 1,
        backgroundColor: isDragging ? "lightgray" : "transparent",
        cursor: "move",
        touchAction: "none",
      }}
      ref={dragRef}
      className="draggable-container"
      onClick={() => setSelectedEvent(event)}
    >
      <div>
        <p className="text-md md:text-sm font-bold flex justify-end bg-none text-black font-playfair">
          {event.time}
        </p>

        <div className="text-lg text-gray-500 hover:text-gray-900 cursor-pointer border-t-2 border-amber-400 shadow-md bg-white">
          <div className="w-auto overflow-ellipsis flex flex-col gap-2 p-4">
            <p className="md:text-sm text-md self-start text-black">
              {event.title}
            </p>
            <p className="p-2 md:text-sm text-md">{event.description}</p>
          </div>
        </div>
      </div>
      {selectedEvent && (
        <EventDetail
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
}
