import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    setLoading(true);
    // EmailJS integration point — replace with your service/template/public key
    setTimeout(() => {
      setLoading(false);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding relative z-10" style={{ background: "rgba(15,23,42,0.4)" }}>
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-3 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-cyan-400" /> Contact <span className="w-8 h-px bg-cyan-400" />
          </div>
          <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(28px,4vw,48px)" }}>
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Open to research collaborations, internships, and building the future of AI together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {[
              { label: "Email", value: "abhinavcheepa7@gmail.com", icon: "📧" },
              { label: "Phone", value: "+91 7000759702", icon: "📱" },
              { label: "Location", value: "India · IIT Bombay", icon: "📍" },
              { label: "GitHub", value: "github.com/abhinavcheepa7", icon: "💻" },
            ].map((item) => (
              <div key={item.label} className="glass border border-slate-700/50 p-5 flex items-center gap-4 hover:border-cyan-500/30 transition-all">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-1">{item.label}</div>
                  <div className="text-slate-300 text-sm">{item.value}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="glass border border-slate-700/50 p-6"
          >
            <div className="space-y-4">
              {["name", "email"].map((field) => (
                <div key={field}>
                  <label className="font-mono text-xs text-slate-500 uppercase tracking-widest block mb-2">
                    {field}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    placeholder={field === "name" ? "Your name" : "your@email.com"}
                    className="w-full bg-slate-900/50 border border-slate-700/50 text-slate-300 px-4 py-3 font-mono text-sm focus:outline-none focus:border-cyan-500/50 transition-colors placeholder-slate-600"
                  />
                </div>
              ))}
              <div>
                <label className="font-mono text-xs text-slate-500 uppercase tracking-widest block mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project or collaboration idea..."
                  className="w-full bg-slate-900/50 border border-slate-700/50 text-slate-300 px-4 py-3 font-mono text-sm focus:outline-none focus:border-cyan-500/50 transition-colors placeholder-slate-600 resize-none"
                />
              </div>

              <motion.button
                onClick={handleSubmit}
                disabled={loading}
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0,212,255,0.2)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-900 font-mono text-sm font-bold tracking-widest disabled:opacity-50 transition-all"
              >
                {loading ? "Sending..." : "Send Message →"}
              </motion.button>

              {status === "success" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="text-green-400 font-mono text-xs text-center mt-2">
                  ✓ Message sent successfully!
                </motion.div>
              )}
              {status === "error" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="text-red-400 font-mono text-xs text-center mt-2">
                  ✗ Please fill all fields.
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
