const mongoose = require("mongoose");

const InitiateMongoServer = async (mongoURI) => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.error(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;
