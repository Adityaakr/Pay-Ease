## PayEase

Welcome to the PayEase project! This project is designed to manage payments and transactions, featuring both backend and frontend components.

### Backend

To initiate the backend server, please follow these steps:

1. Navigate to the backend directory:

    ```bash
    cd backend
    ```

2. Create a `.env` file in the backend directory and set the following environment variables:

    ```plaintext
    JWT_SECRET=//Your SECRET KEY
    MONGODB_URL=//YOUR MONGODB URL
    ```

    Replace `//Your SECRET KEY` with your own secret key for JWT (JSON Web Tokens) and `//YOUR MONGODB URL` with your MongoDB connection URL.

3. Run the following command to start the server:

    ```bash
    node index.js
    ```

    After executing the command, you should see the following output in your terminal:

    ```vbnet
    App listening on port 3001
    Connecting to MongoDB
    ```

### Frontend

To start the frontend application, please follow these steps:

1. Navigate to the frontend directory:

    ```bash
    cd frontend
    ```

2. Run the following command to start the application:

    ```bash
    npm run dev
    ```

    This will initiate the frontend application.
