const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mysql = require("mysql2");
const cors = require("cors");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();

app.locals.con = mysql.createConnection({
	host: "localhost",
	port: "3306",
	user: "documents",
	password: "documents",
	database: "documents",
});

app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;

app.listen(3001);
