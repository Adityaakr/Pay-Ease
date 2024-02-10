const express = require("express")
const mainRouter = require("./routes/index")
const app = express();
const cors = require("cors")

app.use(cors())
app.use(express.json())

const mainRouter = require("./routes/index")

app.use("/api/v1/user",mainRouter);

app.listen(3000);
 