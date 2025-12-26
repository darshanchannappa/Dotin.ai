'use client';
import React, { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "", phone: "" });
  const [agree, setAgree] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree) {
      alert("Please agree to Terms & Privacy Policy");
      return;
    }
    console.log("Contact form submitted:", form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen pt-20 px-6 pb-12 max-w-3xl mx-auto flex items-center justify-center">
        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-12 rounded-2xl border border-green-400/30 text-center max-w-md w-full">
          <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Thank You!
          </h1>
          <p className="text-gray-200 mb-8">Your message has been sent successfully!</p>
          <Link href="/" className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all text-white font-medium">
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-20 px-6 pb-12 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent text-center">
        Contact Us
      </h1>
      
      <form onSubmit={onSubmit} className="bg-white/5 backdrop-blur-sm p-10 rounded-2xl border border-white/10 shadow-2xl">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-300">Full Name</label>
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              className="w-full p-4 rounded-xl bg-black/30 border border-white/20 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 transition-all"
              placeholder="John Doe"
              required
            />
          </div>
          
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-300">Email Address</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              className="w-full p-4 rounded-xl bg-black/30 border border-white/20 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 transition-all"
              placeholder="john@example.com"
              required
            />
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-300 mb-3">Phone (Optional)</label>
          <input
            name="phone"
            value={form.phone}
            onChange={onChange}
            className="w-full p-4 rounded-xl bg-black/30 border border-white/20 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 transition-all"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div className="mb-10">
          <label className="block text-sm font-medium text-gray-300 mb-3">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            rows={6}
            className="w-full p-4 rounded-xl bg-black/30 border border-white/20 text-white placeholder-gray-400 resize-vertical focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 transition-all"
            placeholder="Tell us about your project or how we can help you..."
            required
          />
        </div>

        <div className="flex items-start mb-12">
          <input
            id="agree"
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            className="mt-1 mr-4 w-5 h-5 text-indigo-600 bg-gray-800 border-gray-600 rounded focus:ring-indigo-500 focus:ring-2"
            required
          />
          <label htmlFor="agree" className="text-sm leading-relaxed text-gray-300">
            I agree to the{" "}
            <Link href="/terms" className="text-indigo-400 hover:text-indigo-300 underline font-medium transition">
              Terms and Conditions
            </Link>{" "}
            &{" "}
            <Link href="/privacy" className="text-indigo-400 hover:text-indigo-300 underline font-medium transition">
              Privacy Policy
            </Link>{" "}
            of the website
          </label>
        </div>

        <button
          type="submit"
          disabled={!agree}
          className={`w-full py-5 px-8 rounded-2xl font-semibold text-lg transition-all shadow-xl ${
            agree
              ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
              : "bg-gray-700 text-gray-400 cursor-not-allowed"
          }`}
        >
          {agree ? "🚀 Send Message" : "✅ Agree to continue"}
        </button>
      </form>
    </main>
  );
}
