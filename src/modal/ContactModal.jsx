import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactModal = ({ setIsOpen, setNotification }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messsage, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const templateParams = {
    from_name: name,
    from_email: email,
    to_name: "Timilehin",
    message: messsage,
  };

  const serviceId = "service_cintsgo";
  const templateId = "template_jekhkfq";

  const handleSendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(serviceId, templateId, templateParams, {
        publicKey: import.meta.env.VITE_REACT_PUBLIC_KEY,
      });
      setNotification(true);
      setLoading(false);
      setIsOpen(false);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.log(error.text);
    }
  };

  emailjs;

  return (
    <>
      <div>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center overflow-y-scroll bg-slate-900/20 p-8 backdrop-blur"
          >
            <motion.div
              initial={{ scale: 0, rotate: "12.5deg" }}
              animate={{ scale: 1, rotate: "0deg" }}
              exit={{ scale: 0, rotate: "0deg" }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg space-y-5 overflow-hidden text-wrap rounded-lg bg-white/80 p-6 text-center text-black shadow-xl"
            >
              <form className="flex w-full flex-col gap-4">
                <h3 className="text-3xl font-bold text-customOrange">
                  Send an email
                </h3>

                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full rounded-md border-[1px] border-slate-900/20 px-4 py-2 outline-none"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  type="email"
                  name="e"
                  id="email"
                  className="w-full rounded-md border-[1px] border-slate-900/20 px-4 py-2 outline-none"
                  placeholder="Enter email address"
                  onChange={(e) => setEmail(e.target.value)}
                />

                <textarea
                  name=""
                  id=""
                  rows="7"
                  className="over w-full resize-none rounded-md border-[1px] border-slate-900/20 px-4 py-3 outline-none"
                  placeholder="Subject..."
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>

                <div className="flex gap-2">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full rounded border-[1px] border-customOrange bg-transparent py-2 font-semibold text-customOrange transition-colors hover:bg-white/10"
                  >
                    Nah, go back
                  </button>
                  <button
                    onClick={handleSendEmail}
                    className="w-full rounded bg-customOrange py-2 font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    {loading ? "sending..." : "send"}
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
