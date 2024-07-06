
const nodemailer = require('nodemailer');

require('dotenv').config();


// Define the sendEmail function
function sendEmail() {
    // Create a Nodemailer transporter using Gmail
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            // user: 'indrajitbarman2003@gmail.com',
            // pass: 'cesd rbap ivhw yoox'
            user: process.env.Mail_Sender,
            pass:  process.env.Mail_Sender_Pass
        }
    });

    // Define the email content
    const mailOptions = {
        from: '', //sender side 
        // from: process.env.Mail_Sender, //sender side 
        to: '', //receiver side 
        subject: 'Mail from Thub@io',
        text: 'You have received your Thub Tshirt!'
    };
// 

    // Send the email
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });

    
}

// Export the sendEmail function
module.exports = sendEmail;

