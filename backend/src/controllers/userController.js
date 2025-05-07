import transporter from "../config/nodemailer.js";

class UserRouter {
  async booking(req, res) {
    try {
      console.log(req.body);
      const { name, email, phone, date, selectedPackage, guests, message } = req.body;

      // Validate required fields
      if (!name || !email || !phone || !date || !selectedPackage || !guests) {
        return res.status(400).json({ message: "All fields are required." });
      }

      const mailOptions = {
        from: `"Munroe Boating" <${process.env.EMAIL}>`, // Professional sender name
        replyTo: email, // Allow replies to the user's email
        to: "smockeryt16@gmail.com",
        subject: "New Booking Request for Munroe Boating",
        text: `
Dear Munroe Boating Team,

A new booking request has been received:

Name: ${name}
Email: ${email}
Phone: ${phone}
Date: ${date}
Package: ${selectedPackage}
Number of Guests: ${guests}
Message: ${message || "N/A"}

Please follow up with the customer at your earliest convenience.

Regards,
Munroe Boating System
        `,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
            <h2 style="color: #1a73e8;">New Booking Request</h2>
            <p>Dear Munroe Boating Team,</p>
            <p>A new booking request has been received. Please find the details below:</p>
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr>
                <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Name</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Email</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Phone</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Date</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${date}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Package</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${selectedPackage}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Guests</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${guests}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Message</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${message || "N/A"}</td>
              </tr>
            </table>
            <p>Please follow up with the customer at your earliest convenience.</p>
            <p style="margin-top: 20px;">Regards,<br><strong>Munroe Boating System</strong></p>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            <p style="font-size: 12px; color: #777;">
              Munroe Boating | Munroethuruthu, Kerala<br>
              Contact us at: support@munroeboating.com
            </p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Booking successful. We will reach back to you soon." });
    } catch (error) {
      console.error("Booking error:", error);
      res.status(500).json({ message: "Internal server issues" });
    }
  }

  async contact(req, res) {
    try {
      const { name, email, message } = req.body;

      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const mailOptions = {
        from: `"Munroe Boating" <${process.env.EMAIL}>`,
        replyTo: email, // Allow replies to the user's email
        to: "smockeryt16@gmail.com", // Changed to admin email for consistency
        subject: "New Contact Message for Munroe Boating",
        text: `
Dear Munroe Boating Team,

A new contact message has been received:

Name: ${name}
Email: ${email}
Message: ${message}

Please respond to the customer promptly.

Regards,
Munroe Boating System
        `,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
            <h2 style="color: #1a73e8;">New Contact Message</h2>
            <p>Dear Munroe Boating Team,</p>
            <p>A new contact message has been received. Please find the details below:</p>
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr>
                <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Name</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Email</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Message</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${message}</td>
              </tr>
            </table>
            <p>Please respond to the customer promptly.</p>
            <p style="margin-top: 20px;">Regards,<br><strong>Munroe Boating System</strong></p>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            <p style="font-size: 12px; color: #777;">
              Munroe Boating | Munroethuruthu, Kerala<br>
              Contact us at: support@munroeboating.com
            </p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Thank you. We will reach back to you soon." });
    } catch (error) {
      console.error("Contact error:", error);
      res.status(500).json({ message: "Internal server issue" });
    }
  }
}

export default new UserRouter();