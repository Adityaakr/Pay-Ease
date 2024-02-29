const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET 

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(403).json({ error: "Unauthorized: No token provided here Sir" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = await jwt.verify(token, JWT_SECRET);

    if (!decoded.userId) {
      return res.status(403).json({ error: "Unauthorized: Invalid token" });
    }

    req.userId = decoded.userId;

    next();
  } catch (err) {
    console.error("Error verifying JWT:", err);
    return res.status(403).json({ error: "Unauthorized: Invalid token" });
  }
};

module.exports = {
  authMiddleware,
};
