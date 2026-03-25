import { NextResponse } from 'next/server';
import getDb from '../../../lib/db';

export async function POST(request) {
  try {
    const data = await request.json();
    const db = getDb();

    const stmt = db.prepare(`
      INSERT INTO bookings (services, name, email, phone, company, website, budget, timeline, project_details, goals, audience, referral, preferred_date, preferred_time)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const result = stmt.run(
      JSON.stringify(data.services || []),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.company || '',
      data.website || '',
      data.budget || '',
      data.timeline || '',
      data.projectDetails || '',
      data.goals || '',
      data.audience || '',
      data.referral || '',
      data.date || '',
      data.time || ''
    );

    return NextResponse.json({ success: true, id: result.lastInsertRowid }, { status: 201 });
  } catch (error) {
    console.error('Booking API error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const db = getDb();
    const bookings = db.prepare('SELECT * FROM bookings ORDER BY created_at DESC').all();
    return NextResponse.json({ success: true, data: bookings });
  } catch (error) {
    console.error('Booking GET error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
