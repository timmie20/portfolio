import { AnimatePresence, motion } from "framer-motion";

const ContactModal = ({ setIsOpen }) => {
  return (
    <>
      <div>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 grid place-items-center overflow-y-scroll bg-slate-900/20 p-8 backdrop-blur"
          >
            <motion.div
              initial={{ scale: 0, rotate: "12.5deg" }}
              animate={{ scale: 1, rotate: "0deg" }}
              exit={{ scale: 0, rotate: "0deg" }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg overflow-hidden rounded-lg bg-white/90 p-6 text-black shadow-xl"
            >
              <form className="flex w-full flex-col gap-4">
                <h3 className="text-3xl font-bold text-customOrange">
                  Send an email
                </h3>

                <input
                  type="email"
                  name=""
                  id="email"
                  className="w-full rounded-md border-[1px] border-slate-900/20 px-4 py-2 outline-none"
                  placeholder="Enter email address"
                />

                <textarea
                  name=""
                  id=""
                  rows="7"
                  className="over w-full resize-none rounded-md border-[1px] border-slate-900/20 px-4 py-3 outline-none"
                  placeholder="Subject..."
                ></textarea>

                <div className="flex gap-2">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full rounded border-[1px] border-customOrange bg-transparent py-2 font-semibold text-customOrange transition-colors hover:bg-white/10"
                  >
                    Nah, go back
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full rounded bg-customOrange py-2 font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    Send
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default ContactModal;
