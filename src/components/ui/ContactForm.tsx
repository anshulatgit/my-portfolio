"use client";
import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  type: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

function validate(data: FormData): Errors {
  const errors: Errors = {};
  if (!data.name || data.name.length < 2) errors.name = "Name must be at least 2 characters";
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Please enter a valid email";
  if (!data.subject || data.subject.length < 4) errors.subject = "Subject must be at least 4 characters";
  if (!data.message || data.message.length < 20) errors.message = "Message must be at least 20 characters";
  return errors;
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.75rem 1rem",
  borderRadius: "0.625rem",
  border: "1px solid rgba(148,163,184,0.2)",
  backgroundColor: "rgba(148,163,184,0.04)",
  color: "inherit",
  fontSize: "0.875rem",
  outline: "none",
  boxSizing: "border-box",
  fontFamily: "inherit",
  transition: "border-color 0.2s",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.8rem",
  fontWeight: 600,
  marginBottom: "0.4rem",
  opacity: 0.7,
};

export function ContactForm() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", subject: "", message: "", type: "general" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "", type: "general" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
        <CheckCircle size={48} style={{ color: "#22c55e", margin: "0 auto 1rem" }} />
        <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>Message Sent!</h3>
        <p style={{ opacity: 0.6, marginBottom: "1.5rem" }}>I&apos;ll get back to you within 24 hours.</p>
        <button onClick={() => setStatus("idle")} style={{ padding: "0.625rem 1.5rem", backgroundColor: "var(--color-brand-600)", color: "white", border: "none", borderRadius: "0.625rem", fontWeight: 700, cursor: "pointer" }}>
          Send Another
        </button>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      {/* Type */}
      <div>
        <label style={labelStyle}>Type of Inquiry</label>
        <select name="type" value={form.type} onChange={handleChange} style={inputStyle}>
          <option value="general">General Inquiry</option>
          <option value="career-guidance">Career Guidance (Free)</option>
          <option value="collaboration">Collaboration / Research</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Name + Email */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
        <div>
          <label style={labelStyle}>Name *</label>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" style={{ ...inputStyle, borderColor: errors.name ? "#ef4444" : "rgba(148,163,184,0.2)" }} />
          {errors.name && <p style={{ fontSize: "0.7rem", color: "#ef4444", marginTop: "0.25rem" }}>{errors.name}</p>}
        </div>
        <div>
          <label style={labelStyle}>Email *</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" style={{ ...inputStyle, borderColor: errors.email ? "#ef4444" : "rgba(148,163,184,0.2)" }} />
          {errors.email && <p style={{ fontSize: "0.7rem", color: "#ef4444", marginTop: "0.25rem" }}>{errors.email}</p>}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label style={labelStyle}>Subject *</label>
        <input name="subject" value={form.subject} onChange={handleChange} placeholder="What's this about?" style={{ ...inputStyle, borderColor: errors.subject ? "#ef4444" : "rgba(148,163,184,0.2)" }} />
        {errors.subject && <p style={{ fontSize: "0.7rem", color: "#ef4444", marginTop: "0.25rem" }}>{errors.subject}</p>}
      </div>

      {/* Message */}
      <div>
        <label style={labelStyle}>Message *</label>
        <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell me more..." style={{ ...inputStyle, resize: "none", borderColor: errors.message ? "#ef4444" : "rgba(148,163,184,0.2)" }} />
        {errors.message && <p style={{ fontSize: "0.7rem", color: "#ef4444", marginTop: "0.25rem" }}>{errors.message}</p>}
      </div>

      {status === "error" && (
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#ef4444", fontSize: "0.8rem" }}>
          <AlertCircle size={15} /> Something went wrong. Please try again.
        </div>
      )}

      <button
        onClick={handleSubmit}
        disabled={status === "loading"}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          padding: "0.875rem",
          background: "linear-gradient(135deg, var(--color-brand-600), var(--color-accent))",
          color: "white",
          border: "none",
          borderRadius: "0.75rem",
          fontWeight: 700,
          fontSize: "0.9rem",
          cursor: status === "loading" ? "not-allowed" : "pointer",
          opacity: status === "loading" ? 0.7 : 1,
          boxShadow: "0 4px 16px rgba(95,116,248,0.25)",
        }}
      >
        {status === "loading" ? (
          <><div style={{ width: "1rem", height: "1rem", border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "white", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} /> Sending...</>
        ) : (
          <><Send size={16} /> Send Message</>
        )}
      </button>
    </div>
  );
}
