import { NextResponse } from "next/server";
import { buildCvPdf } from "@/lib/build-cv-pdf";

const FILENAME = "Muhammad-Abaid-Ur-Rehman-CV.pdf";

export async function GET() {
  const pdf = await buildCvPdf();
  const body = new Uint8Array(pdf.length);
  body.set(pdf);

  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${FILENAME}"; filename*=UTF-8''${encodeURIComponent(FILENAME)}`,
      "Cache-Control": "private, max-age=300",
    },
  });
}
