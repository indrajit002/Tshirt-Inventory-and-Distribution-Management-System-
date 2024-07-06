const mongoose = require("mongoose");

const InitiateMongoServer = async (mongoURI) => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB !!");
  } catch (error) {
    console.error("Error connecting to database:", error.message);
    throw error;
  }
};

module.exports = InitiateMongoServer;
