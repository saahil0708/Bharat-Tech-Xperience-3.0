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
        const emailUser = process.env.EMAIL_USER;
        const emailPass = process.env.EMAIL_PASS?.replace(/\s+/g, ''); // Trim spaces for Gmail app passwords

        if (!emailUser || !emailPass) {
            console.error('Email credentials missing in environment variables');
            return NextResponse.json({ error: 'Email service misconfigured' }, { status: 500 });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: emailUser,
                pass: emailPass,
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const htmlContent = generateRegistrationEmailHTML(teamName, leaderName, totalParticipants, institutionName);
        const logoPath = path.join(process.cwd(), 'src/Images/Logo.png');

        const mailOptions = {
            from: `"Bharat Tech Xperience" <${emailUser}>`,
            to: email,
            subject: `HAWKINS LAB: PROTOCOL INITIATED - ${teamName.toUpperCase()}`,
            html: htmlContent,
            attachments: [
                {
                    filename: 'Logo.png',
                    path: logoPath,
                    cid: 'btxlogo'
                }
            ]
        };

        const info = await transporter.sendMail(mailOptions);
        return NextResponse.json({ success: true, messageId: info.messageId });
    } catch (error: any) {
        console.error('Error sending email:', error);
        // Include specific error message in response for easier debugging
        return NextResponse.json({ 
            error: 'Internal server error', 
            details: error.message 
        }, { status: 500 });
    }
}
