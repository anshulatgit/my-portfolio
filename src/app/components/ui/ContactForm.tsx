"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { clsx } from "clsx";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(4, "Subject must be at least 4 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
  type: z.enum(["general", "career-guidance", "collaboration", "other"]),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { type: "general" },
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (hasError: boolean) =>
    clsx(
      "w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200",
      "bg-white dark:bg-gray-900 text-gray-900 dark:text-white",
      "placeholder-gray-400 dark:placeholder-gray-500",
      "focus:outline-none focus:ring-2 focus:ring-brand-500/50",
      hasError
        ? "border-red-400 dark:border-red-600"
        : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
    );

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
        <p className="text-gray-500 dark:text-gray-400 mb-6">I'll get back to you within 24 hours.</p>
        <button onClick={() => setStatus("idle")} className="px-6 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-sm font-medium transition-colors">
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Type selector */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Type of Inquiry</label>
        <select {...register("type")} className={inputClass(false)}>
          <option value="general">General Inquiry</option>
          <option value="career-guidance">Career Guidance (Free)</option>
          <option value="collaboration">Collaboration / Research</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Name + Email */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name *</label>
          <input {...register("name")} placeholder="Your full name" className={inputClass(!!errors.name)} />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email *</label>
          <input {...register("email")} type="email" placeholder="you@example.com" className={inputClass(!!errors.email)} />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject *</label>
        <input {...register("subject")} placeholder="What's this about?" className={inputClass(!!errors.subject)} />
        {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>}
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message *</label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Tell me more about what you need..."
          className={clsx(inputClass(!!errors.message), "resize-none")}
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm">
          <AlertCircle size={16} />
          Something went wrong. Please try again or email me directly.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-600 hover:bg-brand-700 disabled:bg-brand-400 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={17} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}