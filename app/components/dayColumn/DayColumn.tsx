"use client";

import { Event } from "@/app/api/data";

type DayColumnProps = {
  events: any;
};

export default function DayColumn({ events }: DayColumnProps) {
  return (
    <div className="h-screen text-center p-2 shadow transition-all bg-white">
      <div className="m-2 flex flex-col gap-4">
        {(events.length > 0 &&
          events.map((event: Event) => (
            <div>
              <p className="text-sm flex justify-end bg-none text-black">
                {event.time}
              </p>
              <div className="text-lg text-gray-500  hover:text-gray-900 cursor-pointer p-8 bg-white">
                <div className="w-auto overflow-ellipsis flex flex-col gap-2 ">
                  <p className="font-medium text-sm">{event.title}</p>
                </div>
              </div>
            </div>
          ))) || <div className="text-sm text-gray-500">No events</div>}
      </div>
    </div>
  );
}
