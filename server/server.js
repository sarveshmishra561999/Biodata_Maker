require('dotenv/config');
const express = require("express")
const app = express();
const router = require("./router/auth-router")
const connectDb = require("./utils/db")
const errorMiddleware=require("./middlewares/error-middleware")
const contactRoute=require("./router/contact-route");
const adminRouter=require("./router/admin-router")
const cors=require("cors")

const corsOption={
    origin:"http://0.0.0.0:5000",
    method:"GET, POST, PUT, DELETE, PATCH, HEAD",
    Credential:true,
}

app.use(cors())
app.use(express.json())


app.use("/api/auth", router);
app.use("/api/form",contactRoute)
app.use("/api/admin",adminRouter)
app.use(errorMiddleware)
const PORT = 5000;
connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running at port:${PORT}`)
    })
})
