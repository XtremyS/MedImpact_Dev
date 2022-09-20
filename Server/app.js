// ENV MODULE //! IF NODEJS THROWS ERROR EMPTY STRING ADD ONE . TO ENV PATH
const dotenv = require("dotenv").config({ path: "../Server/config.env" });

//DB MODULE
require("./DB/connection");

//DB USER DATA INSTANCE
const User = require("./DBSchema/doc_schema");

const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

//IMPORTING AUTH MODULE
app.use(require("./Router/auth"));

//GET HOME
// app.get("/", (req, res) => {
//   res.send("BACKEND ACTIVATED PAGE HOME");
// });

//CONVERTING DATA FROM DB INTO JSON FORMAT
app.use(express.json());

//GET ABOUT
// app.get("/about", (req, res) => {
//   res.send("BACKEND ACTIVATED PAGE ABOUT");
// });

/* //GET CONTACT
app.get("/contact", (req, res) => {
  res.send("BACKEND ACTIVATED PAGE CONTACT");
}); */
/* //GET LOGIN
app.get("/login", (req, res) => {
  res.send("BACKEND  ACTIVATED PAGE LOGIN");
}); */
//GET REGISTER

/* app.get("/signup", (req, res) => {
  res.send("BACKEND ACTIVATED PAGE REGISTER");
});
 */
if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
}

//LISTING PORT
app.listen(port, () => {
  console.log(`Server is running at PORT: ${port}`);
});
