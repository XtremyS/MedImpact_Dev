//* JWT MODULE
const jwt = require("jsonwebtoken");

//* DOCTOR DB SCHEMA
const Patients = require("../DBSchema/patient_schema");
// const Doctor = require("../DBSchema/doc_schema");

const Middleware = async (req, res, next) => {
  try {
    //* GETTING TOKEN FROM USER
    const token = req.cookies.jwt;

    //* VERIFYING TOKEN
    const verifyToken = jwt.verify(token, process.env.AUTH_KEY);

    //* GETTING THAT USER WHOSE TOKEN IS VERIFIED
    const rootUser = await Patients.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });

    if (!rootUser) {
      //*IF USER NOT FOUND THROW ERROR
      throw new Error("Couldn't find user!");
    } else {
      //* ASSIGNING TOKEN AND USERS DETAILS
      req.token = token;
      req.rootUser = rootUser;
      req.userId = rootUser._id;
      next();
    }
  } catch (error) {
    res.status(401).send("Unauthorized Token!" + error);
  }
};

module.exports = Middleware;
