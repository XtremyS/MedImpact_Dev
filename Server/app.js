// ENV MODULE //! IF NODEJS THROWS ERROR EMPTY STRING ADD ONE . TO ENV PATH
const dotenv = require("dotenv").config({ path: "../Server/config.env" });

//* DB MODULE
require("./DB/connection");

//* DB USER DATA INSTANCE
const User = require("./DBSchema/doc_schema");

//* EXPRESS JS MODULE
const express = require("express");
const app = express();

//* SERVER PORT NUMBER
const port = process.env.PORT || 5000;
app.use(express.json());

//* IMPORTING AUTH MODULE
app.use(require("./Router/auth"));

//* CONVERTING DATA FROM DB INTO JSON FORMAT
app.use(express.json());

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
}

//* LISTING PORT
app.listen(port, () => {
  console.log(`Server is running at PORT: ${port}`);
});





// const fs = require("fs");
// const indexPath = path.resolve(__dirname, "../BMH-Client/src/index.html");

// const defaultMetaData = {
//   title: "Spaarks - Local connect, promote 1111111111, nearby friend11111s",
  
// };


// app.use(express.static(path.resolve(__dirname), { maxAge: "30d" }));

// app.get("/*", async (req, res, next) => {
//   res.send(await updateIndexHtml(defaultMetaData));
// });

// updateIndexHtml = (data) => {
//   let htmlData = fs.readFileSync(indexPath, "utf8");
//   return htmlData;
// };




