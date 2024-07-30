import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function GET() {
  try {
    const resend = new Resend(process.env.AUTH_RESEND_KEY);

    const { data } = await resend.emails.send({
      from: process.env.RESEND_EMAIL_FROM as string,
      to: 'contact.famgz@proton.me',
      subject: 'Ole famgz, testando',
      html: '<p>Ola, otimo ve-lo por aqui. Esta e uma mensagem de teset</p>',
    });

    return NextResponse.json({ message: 'Email sent', data });
  } catch (err) {
    return NextResponse.json({ err });
  }
}
