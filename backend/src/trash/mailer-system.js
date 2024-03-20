// // // Import necessary modules
// // const nodemailer = require('nodemailer');
// // const { MongoClient } = require('mongodb');

// // // Nodemailer transporter configuration
// // const transporter = nodemailer.createTransport({
// //     host: 'smtp.ethereal.email',
// //     port: 587,
// //     auth: {
// //         user: 'mariah.green10@ethereal.email',
// //         pass: 'YzJjdKc14ZMT2gkFxj'
// //     }
// // });

// // // Function to fetch receiver data from the database
// // async function fetchReceivers() {
// //     const uri = 'mongodb://localhost:27017'; // MongoDB URI
// //     const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// //     try {
// //         await client.connect();
// //         const database = client.db('Dummy_Data'); // Replace 'your_database_name' with your actual database name
// //         const collection = database.collection('StudentsTshirtData'); // Replace 'receivers' with your actual collection name
// //         const receivers = await collection.find().toArray();
// //         return receivers;
// //     } catch (error) {
// //         console.error('Error fetching receivers:', error);
// //     } finally {
// //         await client.close();
// //     }
// // }

// // // Function to send emails using nodemailer
// // async function sendEmail(receiver) {
// //     // Email message configuration
// //     let mailOptions = {
// //         from: 'mariah.green10@ethereal.email', // Sender email address
// //         to: receiver.email, // Receiver email address
// //         subject: 'Subject of your email',
// //         text: 'Body of your email'
// //     };

// //     // Sending the email
// //     try {
// //         let info = await transporter.sendMail(mailOptions);
// //         console.log('Email sent to', receiver.email, ':', info.response);
// //     } catch (error) {
// //         console.error('Error sending email to', receiver.email, ':', error);
// //     }
// // }

// // // Main function to orchestrate the process
// // async function sendEmailsToReceivers() {
// //     // Fetch receivers from the database
// //     const receivers = await fetchReceivers();

// //     // If there are no receivers, exit the function
// //     if (!receivers || receivers.length === 0) {
// //         console.log('No receivers found in the database.');
// //         return;
// //     }

// //     // Send emails to each receiver
// //     for (let receiver of receivers) {
// //         await sendEmail(receiver);
// //     }
// // }

// // // Execute the main function
// // sendEmailsToReceivers();
// // Import necessary modules
// const nodemailer = require('nodemailer');
// const { MongoClient } = require('mongodb');

// // Nodemailer transporter configuration
// const transporter = nodemailer.createTransport({
//     host: 'smtp.ethereal.email',
//     port: 587,
//     auth: {
//         user: 'mariah.green10@ethereal.email',
//         pass: 'YzJjdKc14ZMT2gkFxj'
//     }
// });

// // Function to fetch receiver data from the database
// async function fetchReceivers() {
//     const uri = 'mongodb://localhost:27017'; // MongoDB URI
//     const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//     try {
//         await client.connect();
//         const database = client.db('Dummy_Data'); // Replace 'your_database_name' with your actual database name
//         const collection = database.collection('StudentsTshirtData'); // Replace 'receivers' with your actual collection name
//         const receivers = await collection.find().toArray();
//         return receivers;
//     } catch (error) {
//         console.error('Error fetching receivers:', error);
//     } finally {
//         await client.close();
//     }
// }

// // Function to send emails using nodemailer
// async function sendEmail(receiver) {
//     // Email message configuration
//     let mailOptions = {
//         from: 'mariah.green10@ethereal.email', // Sender email address
//         to: receiver.email, // Receiver email address
//         subject: 'Subject of your email',
//         text: 'Body of your email'
//     };

//     // Sending the email
//     try {
//         let info = await transporter.sendMail(mailOptions);
//         console.log('Email sent to', receiver.email, ':', info.response);
//     } catch (error) {
//         console.error('Error sending email to', receiver.email, ':', error);
//     }
// }

// // Main function to orchestrate the process
// async function sendEmailsToReceivers() {
//     // Fetch receivers from the database
//     const receivers = await fetchReceivers();

//     // If there are no receivers, exit the function
//     if (!receivers || receivers.length === 0) {
//         console.log('No receivers found in the database.');
//         return;
//     }

//     // Send emails to each receiver
//     for (let receiver of receivers) {
//         await sendEmail(receiver);
//     }
// }

// // Execute the main function
// sendEmailsToReceivers();

// // Define and execute sendEmailsToReceivers function
// sendEmailsToReceivers();
// const nodemailer = require('nodemailer');
// 
// Nodemailer transporter configuration
// const transporter = nodemailer.createTransport({
    // host: 'smtp.ethereal.email',
    // port: 587,
    // auth: {
        // user: 'mariah.green10@ethereal.email',
        // pass: 'YzJjdKc14ZMT2gkFxj'
    // }
// });
// self 
// const transporter = nodemailer.createTransport({
    // service: 'gmail',
    // auth: {
        // user: 'indrajitbarman035@gmail.com',
    //    
        // pass: 'cpqywxifcfvjspub'
    // }
// });


// Function to send email using nodemailer
// async function sendEmail() {
    // Email message configuration
    // let mailOptions = {
        // from: 'edgar.yundt70@ethereal.email', // Sender email address
        // to: 'bhargavvobilisetti@gmail.com', // Receiver email address
        // subject: 'Subject of your email',
        // text: 'Body of your email'
    // };

    // Sending the email
    // try {
        // let info = await transporter.sendMail(mailOptions);
        // console.log('Email sent to', mailOptions.to, ':', info.response);
    // } catch (error) {
        // console.error('Error sending email to', mailOptions.to, ':', error);
    // }
// }
// 
// Execute the function to send email
// sendEmail();
// 