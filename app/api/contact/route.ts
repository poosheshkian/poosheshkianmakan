import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  inquiryType?: string;
  message?: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message } = payload;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and project details are required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  // NOTE: This is a scaffold. Wire this up to an email provider (Resend, SES, Postmark)
  // or a CRM webhook before going to production. For now, log the submission server-side.
  console.info("[contact] new inquiry", {
    name,
    company: payload.company,
    email,
    phone: payload.phone,
    inquiryType: payload.inquiryType,
  });

  return NextResponse.json({ ok: true });
}
