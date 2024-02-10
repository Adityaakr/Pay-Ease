const express = require("express");
const JWT_SECRET = require("../config");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { authMiddleware } = require("../middleware");

//signin and signup
const signupSchema = zod.object({
        username: zod.string().email(),
        password: zod.string(),
        firstName: zod.string(),
        lastName: zod.string(),
        password: zod.string(),
})

//checking scheama is valid or not
router.post("/signup", async (req, res) => {
        const body = req.body;
        const {success} = signupSchema.safeParse(req.body);
        if (!success) {
                return res.json({
                        message: 'Email already taken/Incorrect Input Re-check'
                })
        }

        //check if existingUser exists
        const user = User.findOne({
                username: req.body.username
        })
        
        //if existingUser exists stop it right there
        if(user._id){
                return res.json({
                        message: "Email already taken/Incorrect inputs"
                })
        }

        //else create the user and assign a new id
        const dbUser = await User.create(body);

        //create a token
        const token = jwt.sign({
                userId: dbUser._id
        }, JWT_SECRET);

        res.json({
                message: "User Created Successfully",
                token: token
        })


        await User.create
})

// Signin
      router.post("/signin", async (req,res) => {
        const {success} = signinBody.safeParse(req.body)
        if (!success) {
          return res.status(411).json({
                message: "Email already taken"
          })
        }

        const user = await User.findOne({
         username: req.body.username,
         password: req.body.password
        });

        if (user) {
         const token = jwt.sign({
           userId: user._id
         }, JWT_SECRET);

        res.json({
          token: token
        })
        return;
        }

        res.status(411).json({
                message: "Error While logging in"
        })
      })

      const updateBody = zod.object({
        password: zod.string().optional(),
        firstName: zod.string().optional(),
        lastName: zod.string().optional()
      })

      //update

      router.put("/", authMiddleware, async(req,res) => {
        const {success} = updateBody.safeParse(req.body)
        if (!success) {
          res.status(411).json({
                message: "Error while updating information"
          })
        }

        await User.updateOne(req.body, {
         id: req.userId
        })

        res.json({
                message: "Updated Successfully"
        })
      })

      //route to get all the user exists in that DB
      router.get("/bulk", async (req,res) => {
        const filter = req.query.filter || "";

        const user = await User.find({
                $or: [{
                 firstName: {
                        "$regex": filter
                 }
                }, {
                   lastName: {
                        "$regex": filter
                   }
                }]
        })
      
        res.json({
                user: users.map(user => ({
                  username: user.username,
                  firstName: user.firstName,
                  lastName: user.lastName,
                  _id: user._id
                }))
        })
   })


module.exports = router