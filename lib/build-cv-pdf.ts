import { PDFDocument, StandardFonts, rgb, type PDFFont, type PDFPage } from "pdf-lib";
import { site, education, experience, projects } from "@/lib/content";

const PAGE_W = 595;
const PAGE_H = 842;
const MARGIN = 50;
const MAX_W = PAGE_W - MARGIN * 2;

function sanitize(s: string) {
  return s
    .replace(/[\u2018\u2019\u201A\u2032]/g, "'")
    .replace(/[\u201C\u201D\u201E]/g, '"')
    .replace(/[\u2013\u2014\u2012]/g, "-")
    .replace(/[^\x20-\x7E\n\r\t]/g, (c) => (c === "\n" ? "\n" : ""));
}

function wrap(text: string, font: PDFFont, size: number, maxW: number): string[] {
  const t = sanitize(text).replace(/\s+/g, " ").trim();
  const words = t.split(" ");
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (font.widthOfTextAtSize(next, size) <= maxW) line = next;
    else {
      if (line) lines.push(line);
      line = word;
    }
  }
  if (line) lines.push(line);
  return lines;
}

export async function buildCvPdf(): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);

  let page: PDFPage = doc.addPage([PAGE_W, PAGE_H]);
  let y = PAGE_H - MARGIN;

  const lineHeight = (size: number) => size * 1.35;

  const need = (h: number) => {
    if (y - h < MARGIN) {
      page = doc.addPage([PAGE_W, PAGE_H]);
      y = PAGE_H - MARGIN;
    }
  };

  const draw = (text: string, size: number, f: PDFFont, color = rgb(0.12, 0.12, 0.14)) => {
    for (const line of wrap(text, f, size, MAX_W)) {
      need(lineHeight(size));
      page.drawText(line, { x: MARGIN, y, size, font: f, color });
      y -= lineHeight(size);
    }
  };

  const heading = (text: string) => {
    need(lineHeight(12) + 10);
    y -= 4;
    page.drawText(text, {
      x: MARGIN,
      y,
      size: 11,
      font: fontBold,
      color: rgb(0.15, 0.2, 0.45),
    });
    y -= lineHeight(11) + 6;
  };

  const bullet = (text: string) => {
    const lines = wrap(text, font, 9.5, MAX_W - 12);
    for (let i = 0; i < lines.length; i++) {
      need(lineHeight(9.5));
      if (i === 0) {
        page.drawText("-", { x: MARGIN, y, size: 9.5, font: fontBold, color: rgb(0.2, 0.2, 0.25) });
        page.drawText(lines[i], { x: MARGIN + 12, y, size: 9.5, font, color: rgb(0.15, 0.15, 0.16) });
      } else {
        page.drawText(lines[i], { x: MARGIN + 12, y, size: 9.5, font, color: rgb(0.15, 0.15, 0.16) });
      }
      y -= lineHeight(9.5);
    }
  };

  // Header
  need(lineHeight(22));
  page.drawText(site.name, {
    x: MARGIN,
    y,
    size: 20,
    font: fontBold,
    color: rgb(0.08, 0.1, 0.35),
  });
  y -= lineHeight(20) + 2;

  draw(site.title, 11, fontBold, rgb(0.2, 0.2, 0.22));
  y -= 2;

  draw(
    `${site.email} | ${site.location}`,
    9.5,
    font,
    rgb(0.25, 0.25, 0.28),
  );
  draw(`GitHub: ${site.social.github}`, 9, font);
  draw(`LinkedIn: ${site.social.linkedin}`, 9, font);
  y -= 8;

  heading("PROFESSIONAL SUMMARY");
  draw(site.summary, 9.5, font);

  heading("EDUCATION");
  draw(`${education.degree}, ${education.university} (${education.graduated})`, 9.5, fontBold);
  draw(`CGPA: ${education.cgpa}`, 9.5, font);
  y -= 4;

  heading("EXPERIENCE");
  const job = experience[0];
  draw(`${job.company} — ${job.role}`, 9.5, fontBold);
  draw(job.duration, 9, font, rgb(0.35, 0.35, 0.38));
  for (const h of job.highlights) {
    bullet(h);
  }
  y -= 4;

  heading("SELECTED PROJECTS");
  for (const p of projects.slice(0, 5)) {
    draw(`${p.name}: ${p.description.slice(0, 160)}${p.description.length > 160 ? "…" : ""}`, 9, font);
  }
  y -= 4;

  heading("CORE SKILLS");
  const skillLine = [
    "Flutter",
    "Dart",
    "React Native",
    "Electron",
    "React",
    "Next.js",
    "Node.js",
    "Firebase",
    "Supabase",
    "MongoDB",
    "REST APIs",
    "AI API integration",
  ].join(" · ");
  draw(skillLine, 9, font);

  const bytes = await doc.save();
  return bytes;
}
