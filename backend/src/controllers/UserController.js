const userModel = require('../models/user');

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
