import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message, type } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Log to console (works without any setup)
    console.log("📧 New Contact Submission:", {
      name, email, subject, message, type,
      timestamp: new Date().toISOString(),
    });

    // TODO: Uncomment below to send real emails via Resend
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "portfolio@anshulverse.vercel.app",
    //   to: "your@email.com",
    //   subject: `[Contact] ${type}: ${subject}`,
    //   html: `<p><b>From:</b> ${name} (${email})</p><p><b>Message:</b> ${message}</p>`,
    // });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
