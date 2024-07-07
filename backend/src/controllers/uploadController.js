// controllers/uploadController.js

const handleUpload = (req, res) => {
    const file = req.file;
  
    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
  
    // Here you can implement your logic to process the uploaded file
    // Example: saveFileToDatabase(file);
  
    return res.status(200).json({ message: 'File uploaded successfully' });
  };
  
  module.exports = {
    handleUpload,
  };
  