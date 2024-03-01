## PayEase

Welcome to the PayEase project! Our platform simplifies payment and transaction management, offering both backend and frontend solutions.

### Backend Setup

To get the backend server up and running, please follow these steps:

1. Navigate to the backend directory:

    ```bash
    cd backend
    ```

2. In the backend directory, you'll find an `env.example` file. Duplicate this file and rename it to `.env`.

3. Open the `.env` file and populate it with the required environment variables:

    ```plaintext
    JWT_SECRET=//YourSecretKeyHere
    MONGODB_URL=//YourMongoDBURLHere
    ```

    Replace `//YourSecretKeyHere` with your chosen secret key for JWT (JSON Web Tokens) and `//YourMongoDBURLHere` with your MongoDB connection URL.

4. Save the `.env` file.

5. Start the server by running the following command:

    ```bash
    node index.js
    ```

    Once launched successfully, you should see the following output in your terminal:

    ```vbnet
    App listening on port 3001
    Connecting to MongoDB
    ```

### Frontend Setup

To begin with the frontend application, follow these steps:

1. Navigate to the frontend directory:

    ```bash
    cd frontend
    ```

2. Run the following command to start the application:

    ```bash
    npm run dev
    ```

    This command will initiate the frontend application.

