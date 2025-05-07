import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()
const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASS
    },
    tls: {
        rejectUnauthorized: false
    }
})

const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'recipient@example.com',
    subject: 'Test Email',
    text: 'Hello! This is a test email from Nodemailer.',
}

transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
        return console.log('Error:', error);
    }
    console.log('Email sent:', info.response);
})


export default transporter