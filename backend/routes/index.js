const express = require("express")
const userRouter = require("./user");
const accountRouter = require("./account");

const router = express.Router();

router.use("/user", userRouter);
router.use("/account", accountRouter);

module.exports = router;

// {
//         "username": "08quant@gmail.com",
//         "firstName": "Aditya",
//         "lastName": "Kumar",
//         "password":  "Adityakr1@"
//     }