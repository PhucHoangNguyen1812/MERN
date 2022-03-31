const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const errorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(cookieParser());


const medicine = require("./routes/medicineRoute");
const users = require("./routes/userRoute");

app.use("/api/v1", medicine);
app.use("/api/v1", users);


app.use(errorMiddleware);

module.exports = app;
