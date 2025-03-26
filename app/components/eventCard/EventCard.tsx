"use client";

export default function EventCard({ event }) {
  return (
    <div onClick={() => {}}>
      <div>
        <p className="text-sm font-bold flex justify-end bg-none text-black font-playfairico">
          {event.time}
        </p>

        <div className="text-lg text-gray-500  hover:text-gray-900 cursor-pointer p-8 shadow-md bg-white">
          <div className="w-auto overflow-ellipsis flex flex-col gap-2 ">
            <p className="font-medium text-sm">{event.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
