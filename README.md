# Inventory Management System

## Introduction

The Inventory Management System, developed by Indrajit Barman, is a comprehensive solution designed to streamline the process of managing orders and distribution. It features an automated mailing system that sends emails to students who have received items. The system fetches email addresses from a MongoDB cluster and allows users to upload details via a `.csv` file.

## Features

- **Dashboard for Orders and Distribution**: An intuitive dashboard that provides an overview of all orders and distribution activities.
- **Automated Mailing System**: Automatically sends emails to students who have received items, using data from MongoDB.  
- **CSV File Upload**: Allows users to upload details using a `.csv` file for easy data management.
- **Real-time Updates**: Provides real-time updates on inventory status and order processing.
- **Email Notifications**: Ensures timely communication with recipients through automated emails.    
   
## Technologies Used
- **Frontend**: React.js
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB
- **Mailing**: Nodemailer
- **Charting**: ApexCharts
  
## Installation  

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/inventory-management-system.git
    ```
2. Navigate to the project directory:
    ```bash
    cd inventory-management-system
    ```
3. Install dependencies for both frontend and backend:
    ```bash
    npm install
    cd client
    npm install
    npm install react-scripts --legacy-peer-deps

    cd ..
    ```

    - **Node and npm versions**:
        - npm: 10.2.4
        - node: 18.19.1

4. Set up environment variables:
    - Create a `.env` file in the root directory.
    - Add the following variables:
        ```
        MONGO_URI=your_mongo_db_uri
        EMAIL_USER=your_email_address
        EMAIL_PASS=your_email_password
        ```

## Usage

1. Start the backend server:
    ```bash
    npm start
    ```
2. Start the frontend development server:
    ```bash
    cd client
    npm start
    ```
3. Open your browser and navigate to `http://localhost:3000` to access the application.

## Project Structure

```
inventory-management-system/
├── client/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── App.js
│       ├── index.js
│       └── ...
├── models/
├── routes/
├── controllers/
├── config/
├── .env
├── server.js
├── package.json
└── ...
```

## Contributing

We welcome contributions to enhance the functionality and performance of the Inventory Management System. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -am 'Add a new feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries or feedback, please reach out to Indrajit Barman by email or LinkedIn:
- Email: indrajitbarman2003@gmail.com
- LinkedIn: [Indrajit Barman](https://www.linkedin.com/in/indrajit-barman-276486227/)
