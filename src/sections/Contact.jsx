import { useState, useRef } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <div id="contact" style={{ padding: "30px", paddingBottom: "100px" }}>
      <motion.div
        initial={{ opacity: 0, y: "-20px", x: "-20px" }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.2 }}
        style={{ maxWidth: 640, margin: "0 auto" }}
      >
        <p className="text-slate-500 text-lg">Get in touch</p>
        <h3 className="font-medium text-4xl mb-8">Contact.</h3>

        <div
          className="form"
          style={{
            background: "#0b0213",
            borderRadius: "16px",
            border: "2px solid #374151",
            padding: "32px",
          }}
        >
          <form ref={formRef} onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Name */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ color: "white", fontWeight: 500 }}>Your Name</span>
              <input
                type="text" name="name" value={form.name} onChange={handleChange}
                placeholder="What's Your Name?"
                style={{
                  background: "#1f2937", border: "none", outline: "none",
                  borderRadius: "8px", padding: "16px 20px",
                  color: "white", fontFamily: "Google Sans Code, monospace",
                  fontSize: "14px", width: "100%",
                }}
              />
            </div>

            {/* Email */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ color: "white", fontWeight: 500 }}>Your Email</span>
              <input
                type="email" name="email" value={form.email} onChange={handleChange}
                placeholder="What's Your Email?"
                style={{
                  background: "#1f2937", border: "none", outline: "none",
                  borderRadius: "8px", padding: "16px 20px",
                  color: "white", fontFamily: "Google Sans Code, monospace",
                  fontSize: "14px", width: "100%",
                }}
              />
            </div>

            {/* Message */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ color: "white", fontWeight: 500 }}>Your Message</span>
              <textarea
                name="message" value={form.message} onChange={handleChange}
                placeholder="What do you want to say?"
                rows={5}
                style={{
                  background: "#1f2937", border: "none", outline: "none",
                  borderRadius: "8px", padding: "16px 20px",
                  color: "white", fontFamily: "Google Sans Code, monospace",
                  fontSize: "14px", width: "100%", resize: "vertical",
                }}
              />
            </div>

            {sent ? (
              <div style={{ color: "#10b981", fontFamily: "monospace", fontSize: "14px" }}>
                ✓ Thank you! I will get back to you as soon as possible.
              </div>
            ) : (
              <button
                type="submit"
                style={{
                  background: "#2c0056", boxShadow: "1px 4px 6px #39135d",
                  border: "none", borderRadius: "12px", padding: "12px 32px",
                  color: "white", fontWeight: 700, fontSize: "16px",
                  cursor: "pointer", width: "fit-content",
                  fontFamily: "Google Sans Code, monospace",
                }}
              >
                {loading ? "Sending..." : "Send"}
              </button>
            )}
          </form>
        </div>

        {/* Contact info below form */}
        <div style={{ marginTop: "32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
          {[
            { label: "EMAIL", value: "abhinavcheepa7@gmail.com", href: "mailto:abhinavcheepa7@gmail.com" },
            { label: "PHONE", value: "+91 7000759702", href: "tel:+917000759702" },
            { label: "LOCATION", value: "MITS Gwalior, India", href: null },
            { label: "GITHUB", value: "github.com/abhinavcheepa", href: "https://github.com/abhinavcheepa" },
          ].map((item) => (
            <div key={item.label} style={{
              background: "#0b0213", border: "1px solid #1e293b",
              borderRadius: "12px", padding: "16px",
            }}>
              <div style={{ color: "#64748b", fontFamily: "monospace", fontSize: "11px", letterSpacing: "0.1em", marginBottom: "6px" }}>
                {item.label}
              </div>
              {item.href ? (
                <a href={item.href} style={{ color: "#a78bfa", fontSize: "14px", textDecoration: "none" }}>
                  {item.value}
                </a>
              ) : (
                <div style={{ color: "white", fontSize: "14px" }}>{item.value}</div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
