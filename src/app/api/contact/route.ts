import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  subject: z.string().min(4).max(200),
  message: z.string().min(20).max(2000),
  type: z.enum(["general", "career-guidance", "collaboration", "other"]),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    // ── Option 1: Log to console (works immediately, no setup) ──
    console.log("📧 New Contact Form Submission:", {
      ...data,
      timestamp: new Date().toISOString(),
    });

    // ── Option 2: Send email via Resend (uncomment when ready) ──
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "portfolio@yourname.dev",
    //   to: "you@youremail.com",
    //   subject: `[Portfolio Contact] ${data.type}: ${data.subject}`,
    //   html: `
    //     <h2>New message from ${data.name}</h2>
    //     <p><strong>Email:</strong> ${data.email}</p>
    //     <p><strong>Type:</strong> ${data.type}</p>
    //     <p><strong>Subject:</strong> ${data.subject}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${data.message}</p>
    //   `,
    // });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Validation failed", issues: error.issues }, { status: 400 });
    }
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}