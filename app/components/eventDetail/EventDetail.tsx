"use client";

import Close from "@/app/icons/Close";
import { Event } from "@/app/api/data";
import { motion } from "framer-motion";

interface EventModalProps {
  event: Event | null;
  onClose: () => void;
}

export default function EventModal({ event, onClose }: EventModalProps) {
  if (!event) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-10 bg-white opacity-80"
        onClick={onClose}
      ></div>

      <div className="fixed inset-0 z-50 flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="bg-white rounded-2xl shadow-lg p-6 max-w-md w-full flex flex-col gap-2 "
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="flex justify-end pb-2 text-gray-500 hover:text-gray-800 cursor-pointer"
          >
            <Close />
          </button>

          <h2 className="text-xl font-semibold text-gray-900 ">
            {event.title}
          </h2>

          {event.imageUrl && (
            <img
              src={event.imageUrl}
              alt={event.title}
              className="rounded-lg w-full h-40 object-cover mb-4"
            />
          )}

          <p className="text-gray-700 text-md mt-2">{event.description}</p>

          <div className="m-4 text-gray-900 font-bold">
            <span className="font-medium text-md">Time:</span> {event.time}
          </div>
        </motion.div>
      </div>
    </>
  );
}
