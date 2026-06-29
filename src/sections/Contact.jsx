import { useState, useRef } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Thank you! I will get back to you as soon as possible.");
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <div id="contact" className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        className="form ml-10 flex-[0.75] p-8 rounded-2xl border-2 border-gray-700 pt-12"
        initial={{ opacity: 0, y: "-20px", x: '-20px' }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.3 }}
      >
        <p className="text-slate-500">Get in touch</p>
        <h3 className="font-medium text-4xl">Contact.</h3>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text" name="name" value={form.name} onChange={handleChange}
              placeholder="What's your name?"
              className="bg-gray-800 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email" name="email" value={form.email} onChange={handleChange}
              placeholder="What's your email?"
              className="bg-gray-800 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              name="message" value={form.message} onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-gray-800 py-4 px-6 h-44 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button type="submit" className="button py-2 px-8 outline-none w-fit text-white font-bold shadow-md rounded-xl">
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* Info panel instead of Earth 3D */}
      <motion.div
        className="xl:flex-1 flex flex-col justify-center gap-6 p-8"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.4 }}
      >
        <div>
          <p className="text-slate-500 text-xl mb-2">Email</p>
          <p className="text-white text-lg">abhinavcheepa7@gmail.com</p>
        </div>
        <div>
          <p className="text-slate-500 text-xl mb-2">Phone</p>
          <p className="text-white text-lg">+91 7000759702</p>
        </div>
        <div>
          <p className="text-slate-500 text-xl mb-2">Location</p>
          <p className="text-white text-lg">MITS Gwalior, India</p>
        </div>
        <div>
          <p className="text-slate-500 text-xl mb-2">GitHub</p>
          <a href="https://github.com/abhinavcheepa" target="_blank" rel="noreferrer"
            className="text-violet-400 text-lg hover:underline">
            github.com/abhinavcheepa
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
