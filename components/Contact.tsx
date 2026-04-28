"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Loader2 } from "lucide-react";
import { IconGithub, IconLinkedin } from "@/components/BrandIcons";
import { site } from "@/lib/content";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

type Web3FormsResponse = {
  success?: boolean;
  message?: string;
  body?: { message?: string; data?: unknown };
  statusCode?: number;
  error?: string;
};

function web3formsMessage(data: Web3FormsResponse): string | undefined {
  return (
    data.body?.message ??
    data.message ??
    (typeof data.error === "string" ? data.error : undefined)
  );
}

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
    if (!accessKey) {
      setErrorMessage(
        "Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to .env.local (your Web3Forms access key), restart npm run dev, and on Vercel add the same variable then redeploy.",
      );
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    const textBody = [`Name: ${name}`, `Email: ${email}`, "", "Message:", message].join("\n");

    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `[Abaid.dev] Message from ${name}`,
          from_name: name,
          name,
          email,
          message: textBody,
        }),
      });

      const raw = await res.text();
      let data: Web3FormsResponse = {};
      try {
        data = raw ? (JSON.parse(raw) as Web3FormsResponse) : {};
      } catch {
        setErrorMessage(
          "Email service sent an unexpected reply. Check your access key on web3forms.com.",
        );
        setStatus("error");
        return;
      }

      if (data.success === true) {
        setStatus("success");
        form.reset();
        return;
      }

      setErrorMessage(
        web3formsMessage(data) || "Could not send message. Check your access key or try again.",
      );
      setStatus("error");
    } catch (err) {
      const msg =
        err instanceof TypeError && err.message === "Failed to fetch"
          ? "Network blocked the request. Try another network or disable VPN."
          : "Network error. Check your connection and try again.";
      setErrorMessage(msg);
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-28 py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="font-heading text-3xl font-bold tracking-tight sm:text-4xl"
        >
          <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            Contact
          </span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          className="mt-3 h-px w-24 origin-left bg-gradient-to-r from-indigo-500 to-violet-500"
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-heading text-2xl font-semibold text-white sm:text-3xl">
              Let&apos;s build something great
            </h3>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              Open to international roles, freelance engagements, and ambitious
              product teams. Reach out for Flutter, cross-platform, or full-stack
              collaborations.
            </p>
            <p className="mt-4 text-sm text-zinc-500">
              <span className="text-zinc-400">Email:</span>{" "}
              <a
                href={site.social.email}
                className="text-indigo-300 hover:text-indigo-200 underline-offset-2 hover:underline"
              >
                abaidurrehman680@gmail.com
              </a>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { href: site.social.github, icon: IconGithub, label: "GitHub" },
                { href: site.social.linkedin, icon: IconLinkedin, label: "LinkedIn" },
                { href: site.social.email, icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-indigo-500/40"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/[0.08] bg-[#111111]/70 p-6 backdrop-blur-xl sm:p-8"
          >
            <label className="block text-sm font-medium text-zinc-300">
              Name
              <input
                name="name"
                required
                disabled={status === "sending"}
                autoComplete="name"
                className="mt-2 w-full rounded-xl border border-white/10 bg-[#0a0a0a]/80 px-4 py-3 text-sm text-white outline-none ring-indigo-500/40 transition-shadow placeholder:text-zinc-600 focus:ring-2 disabled:opacity-50"
                placeholder="Your name"
              />
            </label>
            <label className="mt-4 block text-sm font-medium text-zinc-300">
              Email
              <input
                name="email"
                type="email"
                required
                disabled={status === "sending"}
                autoComplete="email"
                className="mt-2 w-full rounded-xl border border-white/10 bg-[#0a0a0a]/80 px-4 py-3 text-sm text-white outline-none ring-indigo-500/40 transition-shadow placeholder:text-zinc-600 focus:ring-2 disabled:opacity-50"
                placeholder="you@company.com"
              />
            </label>
            <label className="mt-4 block text-sm font-medium text-zinc-300">
              Message
              <textarea
                name="message"
                required
                rows={4}
                disabled={status === "sending"}
                className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-[#0a0a0a]/80 px-4 py-3 text-sm text-white outline-none ring-indigo-500/40 transition-shadow placeholder:text-zinc-600 focus:ring-2 disabled:opacity-50"
                placeholder="Tell me about your project…"
              />
            </label>
            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={status === "sending" ? undefined : { scale: 1.01 }}
              whileTap={status === "sending" ? undefined : { scale: 0.99 }}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 py-3.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(99,102,241,0.3)] transition-all hover:brightness-110 disabled:opacity-60"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send message
                </>
              )}
            </motion.button>
            {status === "success" && (
              <p className="mt-4 text-center text-sm text-emerald-400">
                Thanks — your message was sent. I&apos;ll reply soon.
              </p>
            )}
            {status === "error" && errorMessage && (
              <p className="mt-4 text-center text-sm text-red-400">{errorMessage}</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
