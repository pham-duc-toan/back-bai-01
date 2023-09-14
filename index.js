const express = require("express");
require("dotenv").config();

const database = require("./config/database");

database.connect();

const route = require("./routes/clients/index.route");

const app = express();
const port = process.env.PORT;
// const port = 3000;

app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static("public"));
// Routes
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});