import { NextResponse } from 'next/server';

const REST_KEY    = 'BPAWOA46';
const CUSTOMER_ID = '686292ccf87a2425120f1ac5';

export async function POST(request: Request) {
  const { email, firstName, phone, businessType } = await request.json();

  try {
    const params = new URLSearchParams({
      k:            REST_KEY,
      u:            CUSTOMER_ID,
      email:        email ?? '',
      firstname:    firstName ?? '',
      phone:        phone ?? '',
      custom_field_business_type: businessType ?? '',
    });

    const response = await fetch(
      `https://t.themarketer.com/api/v1/add_subscriber?${params.toString()}`,
      { method: 'POST' }
    );

    const responseText = await response.text();
    console.log('theMarketer profile status:', response.status);
    console.log('theMarketer profile response:', responseText);

    if (!response.ok) {
      return NextResponse.json({ error: responseText }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('theMarketer profile error:', error);
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
