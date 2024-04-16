
const nodemailer = require('nodemailer');
const { MongoClient } = require('mongodb');
require('dotenv').config();



// Define the BulkEmailSender function
async function BulkEmailSender(req, res) {
    //email
    // MongoDB Atlas connection URL
    // const mongoURL = 'mongodb+srv://indrajit_01:xLqjL5eluYv8nMsL@cluster01.q6vzi1k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01';
    // const mongoURL = process.env.MONGODB_URI;

    // Database and collection name
    const dbName = 'pROJECT_sPACE';//database name 
    // const dbName = process.env.Database_Name;//database name 
    // const collectionName = 'Data01';// collection name 1
    const collectionName = 'Testing02';// collection name 2
    // const collectionName = process.env.Collection_Name;// collection name 2

    try {
        // Connect to the MongoDB Atlas cluster
        const client = new MongoClient(mongoURL, { useUnifiedTopology: true });
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
                user: 'indrajitbarman2003@gmail.com',
                pass: 'cesd rbap ivhw yoox'
                // process.env.Mail_Sender,
                // user: process.env.Mail_Sender,
                // pass:  process.env.Mail_Sender_Pass
            }

        });

        // Define the email content
        const mailOptions = {
            from: 'indrajitbarman2003@gmail.com', // Sender email address
            to: emails.join(','), // Join the emails array 
            subject: 'Mail from Thub@io',// subject 
            text: 'You have received your Thub Tshirt!'// text
        };

        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);

        // Close the MongoDB client
        await client.close();

        res.send("sended");

    } catch (error) {
        console.error('Error sending email:', error);
    }
}

// Export the BulkEmailSender function
module.exports = { BulkEmailSender };

