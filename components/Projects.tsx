"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { IconGithub } from "@/components/BrandIcons";
import { projects } from "@/lib/content";

export function Projects() {
  return (
    <section
      id="projects"
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
            Projects
          </span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          className="mt-3 h-px w-24 origin-left bg-gradient-to-r from-indigo-500 to-violet-500"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-[#111111]/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/35 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-heading text-xl font-semibold text-white">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-500">{project.subtitle}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.liveBadge && (
                    <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-300 ring-1 ring-emerald-500/30">
                      Live on Play Store
                    </span>
                  )}
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-medium text-zinc-400">
                    {project.type}
                  </span>
                </div>
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[11px] text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] py-2.5 text-sm font-medium text-zinc-200 transition-all hover:border-indigo-500/40 hover:text-white sm:flex-none sm:px-5"
                >
                  <IconGithub className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(99,102,241,0.25)] transition-all hover:brightness-110 sm:flex-none sm:px-5"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
