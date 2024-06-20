require("dotenv").config();

const express = require("express");
const cors = require("cors")
const serverless = require("serverless-http");
const app = express();
const { connectMongoDB } = require("../connection");
const PORT = process.env.PORT || 8005;
app.use(
  cors(
    {
      origin: "*"
    }
  )
);

const testurl = require("../routes/movieserver");

connectMongoDB(
  "mongodb+srv://devserv8252:tWJ5cfq29y8EaoTj@myserver.qcrmqwn.mongodb.net/cwd"
).then(() => console.log("Database Connected"));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());


app.use("/.netlify/functions/server", testurl);
module.exports.handler = serverless(app);

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
