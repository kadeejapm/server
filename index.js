import express from "express";
import cors from "cors";
import connectDb from "./config/dbConnection.js";
import adminRoute from "./routes/adminRoute.js";
import userRoute from "./routes/userRoute.js";
import produtRoute from "./routes/productRoute.js";
import dotenv from "dotenv";


const app = express();
connectDb();
dotenv.config();
app.use(cors())
app.use(express.json());
app.use(express.static(process.env.FILE_UPLOADING_PATH));


app.use("/api/admin", adminRoute);
app.use("/api/products", adminRoute);
app.use("/api/cart", adminRoute);
app.use("/api/user", adminRoute);
app.use("/api/orders", adminRoute);
app.use("/api/payments", userRoute);
// app.use("*", error);



app.listen(process.env.PORT || 3000, () => {
    console.log(`server is running on PORT ${process.env.PORT || 3000}`);
})