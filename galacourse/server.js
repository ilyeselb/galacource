const express = require("express");
const connectDB = require("./config/connectDB");
const courses = require("./routes/api/courses")



const app = express();

app.use(express.json());


app.use("/courses",courses)

const PORT = process.env.PORT || 8080;

connectDB();

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server listening on port ${PORT}`);
});
