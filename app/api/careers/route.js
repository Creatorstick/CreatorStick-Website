import { NextResponse } from 'next/server';
import getDb from '../../../lib/db';

export async function POST(request) {
  try {
    const data = await request.json();
    const db = getDb();

    const stmt = db.prepare(`
      INSERT INTO career_applications (name, email, phone, position, experience, portfolio, resume, cover_letter)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const result = stmt.run(
      data.name || '',
      data.email || '',
      data.phone || '',
      data.position || '',
      data.experience || '',
      data.portfolio || '',
      data.resume || '',
      data.coverLetter || ''
    );

    return NextResponse.json({ success: true, id: result.lastInsertRowid }, { status: 201 });
  } catch (error) {
    console.error('Careers API error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const db = getDb();
    const applications = db.prepare('SELECT * FROM career_applications ORDER BY created_at DESC').all();
    return NextResponse.json({ success: true, data: applications });
  } catch (error) {
    console.error('Careers GET error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
