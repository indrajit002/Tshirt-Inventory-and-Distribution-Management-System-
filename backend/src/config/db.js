//FILENAME : db.js

const mongoose = require("mongoose");
require('dotenv').config();


// Replace this with your MONGOURI.
// const MONGOURI = "mongodb+srv://bhargavvobilisetti:c711JKv0dPRS0DSn@cluster0.gnkqubb.mongodb.net/DriveReady?retryWrites=true&w=majority";
// const MONGOURI = "mongodb+srv://indrajitbarman233:Tz2EszNEKx251ITU@cluster01.ax3lkuh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01";
// const MONGOURI="mongodb://localhost:27017/DriveReady"
const MONGOURI = process.env.MONGODB_URI;

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};




module.exports = InitiateMongoServer;


