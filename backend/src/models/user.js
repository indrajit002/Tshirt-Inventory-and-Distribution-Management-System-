// //FILENAME : User.js

// const mongoose = require("mongoose");

// const UserSchema = mongoose.Schema({
//   first_name: {
//     type: String,
//     required: true
//   },
//   last_name: {
//     type: String,
//     required: true
//   },
//   roll_number: {
//     type: String,
//     required: true
//   },
//   mobile_number: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     unique: true,
//     lowercase: true,
//     required: true
//   },
//   branch: {
//     type: String,
//     required: true,
   
//   },
//   passout_year: {
//     type: String,
//     required: true
//   },
//   college: {
//     type: String,
//     required: true
//   },
//   course: {
//     type: String,
//     required: true
//   },
//   gender: {
//     type: String,
//     required: true
//   },

//   added_by: {
//     type: String,
//     // required: true
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now()
//   },
//   updatedAt: {
//     type: Date,
//     default: Date.now()
//   }
 
// },

// { 
//   collection: 'users' 
// });


// // export model user with UserSchema
// module.exports = mongoose.model("user", UserSchema);



// ============================================================================================================================================================
// //FILENAME : User.js

const mongoose = require("mongoose");
const express = require("express"); // Import express

const router = express.Router(); // Create a router object

const UserSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  roll_number: {
    type: String,
    required: true
  },
  mobile_number: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },
  branch: {
    type: String,
    required: true
  },
  passout_year: {
    type: String,
    required: true
  },
  college: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  added_by: {
    type: String,
    // required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  }
});
// post method 

router.post('/', async (req, res) => {
  try {
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Export model user with UserSchema
module.exports = mongoose.model("user", UserSchema);
