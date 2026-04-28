"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Apple,
  Laptop,
  Monitor,
  Globe,
  Layers,
} from "lucide-react";
import { platforms } from "@/lib/content";

const iconMap = {
  android: Smartphone,
  ios: Apple,
  macos: Laptop,
  windows: Monitor,
  web: Globe,
  cross: Layers,
} as const;

export function Platforms() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Platforms
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-400">
            One developer. Every platform.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {platforms.map((p, i) => {
            const Icon = iconMap[p.id];
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.06, duration: 0.45 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group flex flex-col items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_0_28px_rgba(99,102,241,0.2)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 text-indigo-300 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <span className="text-center text-sm font-medium text-zinc-200">
                  {p.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
