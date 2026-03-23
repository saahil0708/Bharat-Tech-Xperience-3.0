import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { generateRegistrationEmailHTML } from '@/lib/emailTemplate';
import path from 'path';

export async function POST(req: Request) {
    try {
        const { email, teamName, leaderName, totalParticipants, institutionName } = await req.json();

        if (!email || !teamName || !leaderName) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Configure Nodemailer transporter
        // IMPORTANT: Make sure you add these environment variables in your .env file
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // e.g., your gmail address
                pass: process.env.EMAIL_PASS, // e.g., an App Password generated in Google Account settings
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const htmlContent = generateRegistrationEmailHTML(teamName, leaderName, totalParticipants, institutionName);


        const mailOptions = {
            from: `"Bharat Tech Xperience" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `HAWKINS LAB: PROTOCOL INITIATED - ${teamName.toUpperCase()}`,
            html: htmlContent,
            attachments: [
                {
                    filename: 'Logo.png',
                    path: path.join(process.cwd(), 'src/Images/Logo.png'),
                    cid: 'btxlogo' // embedding the image inline
                }
            ]
        };

        const info = await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, messageId: info.messageId });
    } catch (error: any) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Internal server error', details: error.message }, { status: 500 });
    }
}
