const express = require("express");
const connectDB = require("./config/connectDB");
const path = require("path")
const courses = require("./routes/api/courses");
var cors = require('cors')




const app = express();

app.use(cors()) // Use this after the variable declaration

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public/courses'));

app.use("/courses",courses)

const PORT = process.env.PORT || 8080;

connectDB();

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server listening on port ${PORT}`);
});
