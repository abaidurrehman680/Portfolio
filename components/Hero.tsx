"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Download } from "lucide-react";
import { IconGithub, IconLinkedin } from "@/components/BrandIcons";
import { site, platforms } from "@/lib/content";

const heroPlatforms = platforms.filter((p) => p.id !== "cross");

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  const full = site.roles[roleIndex];

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const typeSpeed = 55;
    const deleteSpeed = 35;
    const pauseEnd = 2200;
    const pauseStart = 400;

    if (!deleting && display.length < full.length) {
      timeout = setTimeout(() => {
        setDisplay(full.slice(0, display.length + 1));
      }, typeSpeed);
    } else if (!deleting && display.length === full.length) {
      timeout = setTimeout(() => setDeleting(true), pauseEnd);
    } else if (deleting && display.length > 0) {
      timeout = setTimeout(() => {
        setDisplay(full.slice(0, display.length - 1));
      }, deleteSpeed);
    } else if (deleting && display.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % site.roles.length);
      timeout = setTimeout(() => {}, pauseStart);
    }

    return () => clearTimeout(timeout);
  }, [display, deleting, full, roleIndex]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-6xl w-full"
      >
        <motion.p
          variants={item}
          className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-indigo-300/90"
        >
          {site.title}
        </motion.p>

        <motion.div variants={item} className="mb-6 min-h-[2.75rem] sm:min-h-[3.25rem]">
          <span className="font-heading text-xl sm:text-2xl md:text-3xl font-medium text-zinc-400">
            I&apos;m a{" "}
          </span>
          <span className="font-heading text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            {display}
            <span className="ml-0.5 inline-block h-7 w-0.5 animate-pulse bg-violet-400 align-middle sm:h-8" />
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
        >
          <span className="bg-gradient-to-br from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            {site.name}
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
        >
          {site.tagline}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-500 sm:text-base"
        >
          {site.summary.split(". ").slice(0, 2).join(". ")}.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap items-center gap-2"
        >
          {heroPlatforms.map((p) => (
            <span
              key={p.id}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-zinc-300 backdrop-blur-sm"
            >
              {p.label}
            </span>
          ))}
        </motion.div>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Link
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(99,102,241,0.35)] transition-all hover:shadow-[0_0_36px_rgba(139,92,246,0.45)] hover:brightness-110"
          >
            View My Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href={site.cvPath}
            download={site.cvDownloadName}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-zinc-100 backdrop-blur-sm transition-all hover:border-indigo-500/40 hover:bg-white/[0.06] hover:shadow-[0_0_24px_rgba(99,102,241,0.2)]"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-10 flex items-center gap-4"
        >
          <span className="text-xs uppercase tracking-wider text-zinc-500">
            Connect
          </span>
          <div className="flex gap-2">
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
                aria-label={label}
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-300 transition-colors hover:border-indigo-500/40 hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
