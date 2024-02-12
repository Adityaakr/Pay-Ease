//Signin and Signup necessary steps to remember
// Signup route
router.post("/signup", async (req, res) => {
  // Validate input
  // 1. Check if both username and password are provided in the request body.
  // 2. Ensure username and password meet any required criteria (e.g., length, format).

  // Check if the username already exists
  // 1. Query the database to see if there is already a user with the provided username.
  // 2. If a user with the same username exists, return an error response indicating that the username is already taken.

  // Hash password using bcrypt
  // 1. Generate a secure hash of the user's password using bcrypt.
  // 2. This step ensures that the password is not stored in plaintext in the database, enhancing security.

  // Create user in database with hashed password
  // 1. Save the new user to the database, along with the hashed password.
  // 2. Store any additional user information, if applicable (e.g., email, profile details).

  // Generate token
  // 1. Create a JSON Web Token (JWT) to authenticate the newly created user.
  // 2. Include any necessary payload data (e.g., user ID) in the token.

  // Send success response with token
  // 1. Respond to the client with a success status code (e.g., 201 - Created).
  // 2. Include the JWT token in the response body for the client to use for future authentication.
});

// Signin route
router.post("/signin", async (req, res) => {
  // Validate input
  // 1. Check if both username and password are provided in the request body.
  // 2. Ensure username and password meet any required criteria (e.g., length, format).

  // Retrieve user from database by username
  // 1. Query the database to find the user with the provided username.
  // 2. If no user is found, return an error response indicating that the username does not exist.

  // Compare user's input password with hashed password using bcrypt (secure)
  // 1. Use bcrypt to compare the hashed password stored in the database with the plaintext password provided by the user.
  // 2. If the passwords match, proceed with authentication; otherwise, return an error response indicating invalid credentials.

  // If passwords match, generate token
  // 1. Create a JSON Web Token (JWT) to authenticate the user.
  // 2. Include any necessary payload data (e.g., user ID) in the token.

  // Send success response with token
  // 1. Respond to the client with a success status code (e.g., 200 - OK).
  // 2. Include the JWT token in the response body for the client to use for future authentication.

  // If passwords don't match, send appropriate error message without revealing details
  // 1. If the comparison of passwords fails, return an error response indicating invalid credentials.
  // 2. Avoid revealing specific details about the reason for the failure to enhance security.
});

