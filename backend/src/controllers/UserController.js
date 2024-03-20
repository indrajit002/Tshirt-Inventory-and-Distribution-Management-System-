
// const User = require("../models/user");


// const addUser = async (req, res, next) => {
//   console.log("write ur functionality here")
 
// }

// exports.addUser = addUser;


// UserController.js

const userModel = require('../models/user'); // Assuming your User model is defined in 'models/User.js'

async function addUser(req, res) {
  try {
    const newUser = new userModel(req.body);
    await newUser.save();
    
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {
  addUser
};
