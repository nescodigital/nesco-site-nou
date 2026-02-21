import { NextResponse } from 'next/server';

const REST_KEY   = 'BPAWOA46';
const CUSTOMER_ID = '686292ccf87a2425120f1ac5';

export async function POST(request: Request) {
  const { email } = await request.json();

  try {
    const params = new URLSearchParams({
      k:     REST_KEY,
      u:     CUSTOMER_ID,
      email: email,
    });

    const response = await fetch(
      `https://t.themarketer.com/api/v1/add_subscriber?${params.toString()}`,
      { method: 'POST' }
    );

    const responseText = await response.text();
    console.log('theMarketer status:', response.status);
    console.log('theMarketer response:', responseText);

    if (!response.ok) {
      return NextResponse.json({ error: responseText }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('theMarketer error:', error);
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
