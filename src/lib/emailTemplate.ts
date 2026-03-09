export const generateRegistrationEmailHTML = (
  teamName: string,
  leaderName: string,
  totalParticipants: number
) => {
  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="x-apple-disable-message-reformatting">
  <title>HAWKINS LAB: PROTOCOL INITIATED</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Rye&family=Space+Mono:wght@400;700&display=swap');
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    table { border-collapse: collapse !important; }
    body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; background-color: #000000; font-family: 'Space Mono', Courier, monospace; }
    
    /* Responsive styles */
    @media screen and (max-width: 600px) {
      .email-container {
        width: 100% !important;
        margin: auto !important;
      }
      .fluid {
        max-width: 100% !important;
        height: auto !important;
        margin-left: auto !important;
        margin-right: auto !important;
      }
      .padding-mobile {
        padding: 20px !important;
      }
    }
  </style>
</head>
<body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #000000; font-family: 'Space Mono', Courier, monospace;">
  <center style="width: 100%; background-color: #000000; text-align: left;">
    <div style="max-width: 600px; margin: 0 auto; padding: 40px 10px;" class="email-container">
      
      <!-- Email Body Container -->
      <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto; background-color: #0a0a0a; border: 2px solid #991b1b; max-width: 600px;">
        
        <!-- Header -->
        <tr>
          <td style="padding: 40px 20px 30px; text-align: center; background-color: #000000; border-bottom: 2px solid #dc2626;">
            <!-- Classification Badge -->
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td align="right" style="padding-bottom: 20px;">
                  <span style="font-family: 'Space Mono', Courier, monospace; color: #dc2626; font-size: 12px; font-weight: 700; padding: 4px 8px; letter-spacing: 2px; border: 2px solid #dc2626;">TOP SECRET</span>
                </td>
              </tr>
            </table>

            <!-- Logo -->
            <img src="cid:btxlogo" alt="BTX Logo" width="150" border="0" style="width: 150px; max-width: 150px; height: auto; background: #000000; font-family: 'Space Mono', Courier, monospace; font-size: 15px; line-height: 15px; color: #dc2626; margin: 0 auto 20px; display: block;" class="fluid" onerror="this.style.display='none'">
            
            <!-- Protocol Text -->
            <h1 style="margin: 0; font-family: 'Rye', Inter, Arial, Helvetica, sans-serif; font-size: 32px; font-weight: normal; color: #dc2626; letter-spacing: 4px; text-transform: uppercase; line-height: 1.2;">PROTOCOL ACCEPTED</h1>
            <p style="margin: 15px 0 0 0; font-family: 'Space Mono', Courier, monospace; font-size: 12px; color: #9ca3af; letter-spacing: 2px; text-transform: uppercase; font-weight: bold;">DEPARTMENT OF ENERGY &bull; BHARAT TECH XPERIENCE</p>
          </td>
        </tr>

        <!-- Main Content -->
        <tr>
          <td style="padding: 40px 30px; background-color: #111111; font-family: 'Space Mono', Courier, monospace; font-size: 16px; line-height: 1.5; color: #f3f4f6;" class="padding-mobile">
            
            <!-- Greeting -->
            <p style="margin: 0 0 25px 0;">
              OPERATIVE <strong style="color: #dc2626; font-weight: 700;">${leaderName.toUpperCase()}</strong>,<br><br>
              Your squad has successfully breached the perimeter. Registration for Phase 1 has been securely logged into the mainframe. The gate is open.
            </p>

            <!-- Data Box -->
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #1a0505; border: 1px dashed #dc2626; border-left: 4px solid #dc2626; margin-bottom: 30px;">
              <tr>
                <td style="padding: 20px;">
                  <p style="margin: 0 0 15px 0;">
                    <span style="font-size: 12px; color: #9ca3af; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 4px;">SQUAD DESIGNATION</span>
                    <strong style="font-size: 16px; color: #f3f4f6; letter-spacing: 1px; display: block;">${teamName.toUpperCase()}</strong>
                  </p>
                  <p style="margin: 0 0 15px 0;">
                    <span style="font-size: 12px; color: #9ca3af; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 4px;">TEAM LEADER (COMMS RELAY)</span>
                    <strong style="font-size: 16px; color: #f3f4f6; letter-spacing: 1px; display: block;">${leaderName.toUpperCase()}</strong>
                  </p>
                  <p style="margin: 0 0 15px 0;">
                    <span style="font-size: 12px; color: #9ca3af; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 4px;">TOTAL OPERATIVES DEPLOYED</span>
                    <strong style="font-size: 16px; color: #f3f4f6; letter-spacing: 1px; display: block;">${totalParticipants} / 4</strong>
                  </p>
                  <p style="margin: 0;">
                    <span style="font-size: 12px; color: #9ca3af; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 4px;">CURRENT STATUS</span>
                    <strong style="font-size: 16px; color: #10b981; letter-spacing: 1px; display: block;">AWAITING SELECTION PROTOCOL</strong>
                  </p>
                </td>
              </tr>
            </table>

            <!-- Next Steps -->
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top: 1px solid #374151; border-bottom: 1px solid #374151; margin-bottom: 30px;">
              <tr>
                <td style="padding: 20px 0;">
                  <h3 style="margin: 0 0 15px 0; font-family: 'Space Mono', Courier, monospace; font-size: 16px; color: #ef4444; letter-spacing: 2px;">/// NEXT STEPS (PHASE 1)</h3>
                  
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 10px;">
                    <tr>
                      <td valign="top" style="width: 20px; color: #dc2626; font-weight: bold; font-family: 'Space Mono', Courier, monospace;">&gt;</td>
                      <td style="font-family: 'Space Mono', Courier, monospace; font-size: 14px; line-height: 1.6; color: #cccccc;">This registration requires no immediate clearance fee. You are currently in the selection pool.</td>
                    </tr>
                  </table>
                  
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 10px;">
                    <tr>
                      <td valign="top" style="width: 20px; color: #dc2626; font-weight: bold; font-family: 'Space Mono', Courier, monospace;">&gt;</td>
                      <td style="font-family: 'Space Mono', Courier, monospace; font-size: 14px; line-height: 1.6; color: #cccccc;">If your squad is deemed capable, you will receive a secondary uplink confirming your selection.</td>
                    </tr>
                  </table>

                  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 10px;">
                    <tr>
                      <td valign="top" style="width: 20px; color: #dc2626; font-weight: bold; font-family: 'Space Mono', Courier, monospace;">&gt;</td>
                      <td style="font-family: 'Space Mono', Courier, monospace; font-size: 14px; line-height: 1.6; color: #cccccc;">Upon selection, you must fulfill the fee protocol (Payment via the portal) to secure your deployment for Round 2.</td>
                    </tr>
                  </table>

                  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td valign="top" style="width: 20px; color: #dc2626; font-weight: bold; font-family: 'Space Mono', Courier, monospace;">&gt;</td>
                      <td style="font-family: 'Space Mono', Courier, monospace; font-size: 14px; line-height: 1.6; color: #cccccc;">Ensure your comms channel remains open. We will contact you soon. Stay frosty.</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- Action Button -->
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 10px;">
              <tr>
                <td align="center">
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                    <tr>
                      <td align="center" style="border: 2px solid #dc2626;">
                        <a href="https://bharattech-xperience.theuniques.in" target="_blank" style="padding: 14px 28px; display: inline-block; font-family: 'Space Mono', Courier, monospace; font-size: 14px; color: #dc2626; text-decoration: none; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;">ACCESS MAIN PORTAL</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding: 30px; text-align: center; background-color: #0a0a0a; border-top: 1px solid #1f2937; font-family: 'Space Mono', Courier, monospace;">
            <p style="margin: 0 0 20px 0;">
              <a href="https://www.instagram.com/bharattechxperience/" target="_blank" style="color: #9ca3af; text-decoration: none; font-size: 12px; margin: 0 10px; letter-spacing: 1px; text-transform: uppercase;">INSTAGRAM</a>
              <a href="https://www.linkedin.com/showcase/bharattechxperience/" target="_blank" style="color: #9ca3af; text-decoration: none; font-size: 12px; margin: 0 10px; letter-spacing: 1px; text-transform: uppercase;">LINKEDIN</a>
            </p>
            <p style="margin: 0; font-size: 10px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px; line-height: 1.5;">
              WARNING: THIS IS A RESTRICTED COMMUNICATION. IF YOU INTERCEPTED THIS IN ERROR, DESTROY IMMEDIATELY. THE DEMOGORGON IS LISTENING.
            </p>
          </td>
        </tr>
      </table>
      
    </div>
  </center>
</body>
</html>`;
};
