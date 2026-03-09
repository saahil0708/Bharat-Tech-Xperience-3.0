import { NextResponse } from 'next/server';
import { generateRegistrationEmailHTML } from '@/lib/emailTemplate';

export async function GET() {
    // Generate example HTML content
    const htmlContent = generateRegistrationEmailHTML('HELLFIRE CLUB', 'EDDIE MUNSON', 4);

    // Replace the internal email attachment CID with the actual web URL 
    // strictly for browser preview purposes. (Email clients use cid:btxlogo)
    const previewHtml = htmlContent.replace('src="cid:btxlogo"', 'src="https://bharattechxperience.com/Logo.png"');

    // Return pure HTML to be rendered in the browser natively
    return new NextResponse(previewHtml, {
        headers: {
            'Content-Type': 'text/html',
        },
    });
}
