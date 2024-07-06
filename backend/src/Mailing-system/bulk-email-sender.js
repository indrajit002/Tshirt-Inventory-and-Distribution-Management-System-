const nodemailer = require('nodemailer');
const { MongoClient } = require('mongodb');
require('dotenv').config();

// Define the BulkEmailSender function
async function BulkEmailSender(req, res) {
    const mongoURL = process.env.MONGODB_URI;
    const dbName = 'pROJECT_sPACE'; // Database name
    const collectionName = 'Testing02'; // Collection name

    try {
        // Connect to the MongoDB Atlas cluster
        const client = new MongoClient(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();

        // Access the database and collection
        const database = client.db(dbName);
        const collection = database.collection(collectionName);

        // Fetch email addresses from the collection
        const emails = await collection.distinct('Email');

        // Create a Nodemailer transporter using Gmail
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.Mail_Sender,
                pass: process.env.Mail_Sender_Pass
            }
        });

        // Define the email content
        const mailOptions = {
            from: process.env.Mail_Sender, // Sender email address
            to: emails.join(','), // Join the emails array
            subject: 'Mail from Thub@io', // Subject
            text: 'You have received your Thub T-shirt!' // Text content
        };

        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);

        // Close the MongoDB client
        await client.close();

        res.status(200).json({ success: true, message: "Emails sent successfully" });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: "Failed to send emails" });
    }
}

// Export the BulkEmailSender function
module.exports = { BulkEmailSender };

