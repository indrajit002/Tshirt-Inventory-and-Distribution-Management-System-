
// //oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
//MAIN API (DD--> SENDING EMAIL )
// const start = async () => {
//     try {
//         app.listen(PORT, () => {
//             console.log(`Server Started at PORT ${PORT}`);
//         });
//     } catch (error) {
//         console.error('Error starting server:', error);
//     }
// };


// // Execute the server start function
// start();

// // Execute the function to send email
// sendEmail();
// // dd();

// //send emails frequently
// // sendEmailArray();
const express = require("express");
const bodyParser = require("body-parser");
const InitiateMongoServer = require("./src/config/db");
const cors = require("cors");
const UserRouter = require('./src/routes/userRoutes');
const sendEmail = require('./src/Mailing-system/sendEmail');
// const sendEmailArray = require("./src/Mailing-system/bulk-email-sender");
const BulkEmailSender = require("./src/Mailing-system/bulk-email-sender");

// MongoDB Atlas URI
// const MONGOURI = "mongodb+srv://indrajitbarman233:Tz2EszNEKx251ITU@cluster01.ax3lkuh.mongodb.net/yourdatabase?retryWrites=true&w=majority";
const MONGOURI = "mongodb+srv://indrajit_01:xLqjL5eluYv8nMsL@cluster01.q6vzi1k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01";

// Initiate Mongo Server with MongoDB Atlas URI
InitiateMongoServer(MONGOURI);

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/users', UserRouter);

// Route to send emails
app.post("/send-email", async (req, res) => {
  try {
    await sendEmail();
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

app.get("/", (req, res) => {
  res.json({ message: "API is Working " });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server Started at PORT ${PORT}`);
});

// Send emails frequently
// sendEmailArray();
//only one receiver
// sendEmail();
// bulk emailsender
BulkEmailSender();
  