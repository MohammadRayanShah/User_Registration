const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");

//log Request using morgan
app.use(morgan("tiny"));

//parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs");

//load assets  "have to use only /css/style.css "
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

//loading Get Method using require
app.use("/", require("./server/routes/router"));

//using dotenv to change port
dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
