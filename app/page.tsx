"use client";

import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Platforms } from "@/components/Platforms";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const sectionStagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const sectionItem = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.main
          id="top"
          variants={sectionStagger}
          initial="hidden"
          animate="show"
          className="relative"
        >
          <motion.div variants={sectionItem}>
            <Hero />
          </motion.div>
          <motion.div variants={sectionItem}>
            <About />
          </motion.div>
          <motion.div variants={sectionItem}>
            <Platforms />
          </motion.div>
          <motion.div variants={sectionItem}>
            <Skills />
          </motion.div>
          <motion.div variants={sectionItem}>
            <Experience />
          </motion.div>
          <motion.div variants={sectionItem}>
            <Projects />
          </motion.div>
          <motion.div variants={sectionItem}>
            <Certifications />
          </motion.div>
          <motion.div variants={sectionItem}>
            <Contact />
          </motion.div>
          <motion.div variants={sectionItem}>
            <Footer />
          </motion.div>
        </motion.main>
      </motion.div>
    </>
  );
}
