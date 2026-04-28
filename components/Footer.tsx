"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { IconGithub, IconLinkedin } from "@/components/BrandIcons";
import { site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center sm:text-left"
        >
          <p className="font-heading text-lg font-semibold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Abaid.dev
          </p>
          <p className="mt-1 text-sm text-zinc-500">
            © {year} {site.name}. All rights reserved.
          </p>
        </motion.div>

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
              whileHover={{ scale: 1.08, y: -2 }}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-400 transition-colors hover:border-indigo-500/40 hover:text-white"
            >
              <Icon className="h-4 w-4" />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
