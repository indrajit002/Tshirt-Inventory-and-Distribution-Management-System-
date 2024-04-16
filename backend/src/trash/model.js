// const mongoose = require('mongoose');
// //Mongodb URI
// const MONGOURI = "mongodb+srv://indrajit_01:xLqjL5eluYv8nMsL@cluster01.q6vzi1k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01";
// // Define your schema
// const userDataSchema = new mongoose.Schema({
//     // name: String,
//     email: String
//     // Add more fields as needed
// });

// // Define your model
// const UserData = mongoose.model('UserData', userDataSchema);

// // Function to fetch data from MongoDB Atlas cluster
// const fetchUserData = async () => {
//     try {
//         // Connect to MongoDB Atlas
//         await mongoose.connect(MONGOURI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });

//         // Fetch data
//         const userData = await UserData.find({});

//         // Disconnect from MongoDB Atlas
//         await mongoose.disconnect();

//         return userData;
//     } catch (error) {
//         console.error('Error fetching user data:', error);
//         throw error;
//     }
// };

// module.exports = { UserData, fetchUserData };
