import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email } = await request.json();

  try {
    const response = await fetch('https://api.themarketer.com/v1/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer BPAWOA46',
      },
      body: JSON.stringify({
        email: email,
        source: 'website_footer',
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
