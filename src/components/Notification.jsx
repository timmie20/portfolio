import React, { useEffect } from "react";
import { FiCheckSquare } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const Notification = ({ notification, setNotification }) => {
  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      setNotification("");
    }, 5000);

    return () => clearTimeout(timeoutRef);
  }, []);

  return (
    <>
      <AnimatePresence>
        <motion.div
          layout
          initial={{ y: -15, scale: 0.95 }}
          animate={{ y: 0, scale: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed right-4 top-4 z-50 flex w-fit items-start gap-2 rounded bg-customOrange p-2 text-xs font-medium text-white shadow-lg"
        >
          <FiCheckSquare className=" mt-0.5" />
          <span>{notification}</span>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Notification;
