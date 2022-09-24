const express = require("express");
const router = express.Router();

const cookieParser = require("cookie-parser");

const FileUpload = require("../Middleware/fileupload")

//* JSON WEB TOKEN MODULE
const jwt = require("jsonwebtoken");

//* PASSWORD HASHING MODULE
const bcrypt = require("bcrypt");

//* DB INSTANCE SCHEMA
const Admin = require("../DBSchema/admin_schema");
const Doctor = require("../DBSchema/doc_schema");
const Patient = require("../DBSchema/patient_schema");
const Lab = require("../DBSchema/lab_schema");
const Pharmacy = require("../DBSchema/pharmacy_schema");

//* GET HOME
router.get("/", (req, res) => {
  res.send("BACKEND ACTIVATED PAGE HOME FROM AUTH");
});

//* MIDDLEWARE MODULE
const Middleware = require("../Middleware/middleware");
const { log } = require("console");

router.use(cookieParser());

//*  POST DOCTORS REGISTRATION
router.post("/doctors-registration", FileUpload.single("img"),async (req, res) => {
  //* DESTRUCTURED USER FILLED DATA
  const { full_name, gender, email, role, age, phone, password, cpassword ,img} =
    req.body;

  //* CHECKING IF THE SAME EMAIL IS REGISTERED IN OTHER COLLECTION IN DATABASE
  const PatientsEmailExists = await Patient.findOne({ email: email });
  const LabEmailExists = await Lab.findOne({ email: email });

  if (PatientsEmailExists || LabEmailExists) {
    return res.status(422).json({ error: "Email Already In Use!" });
  }

  //* CHECKING IF THE FIELDS ARE EMPTY OR NOT
  if (
    !full_name ||
    !gender ||
    !email ||
    !age ||
    !phone ||
    !password ||
    !cpassword
  ) {
    return res.status(422).json({ error: "Fields Cannot Be Empty!" });
  }
  try {
    //* USER DETAILS WHICH EMAILS MATCH IN DB
    const userExist = await Doctor.findOne({ email: email });
    //* CHECKING PASS AND C PASS
    if (password !== cpassword) {
      return res
        .status(400)
        .json({ error: "Password & Confirm Password Mismatch!" });
    } else if (userExist) {
      //*  CHECKING EMAIL ALREADY EXIST IN DB
      return res.status(422).json({ error: "Email Already Exist!" });
    } else {
      //* IF USER NOT EXIST CREATING NEW USER IN DB
      const Doctors = new Doctor({
        full_name,
        gender,
        email,
        phone,
        age,
        role,
        password,
        cpassword,
        img
      });

      //* HASHING PASSWORD HERE FROM SCHEMA.JS THROUGH MIDDLEWARE

      //* SAVING DATA IN DB

      await Doctors.save();

      //* SENDING RESPONSE
      res.status(201).json({ response: "User Registered!" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//* POST PATIENTS REGISTRATIONS
router.post("/patients-registration", async (req, res) => {
  //* DESTRUCTURED USER FILLED DATA
  const { full_name, gender, email, age, phone, password, cpassword } =
    req.body;

  //* CHECKING IF THE SAME EMAIL IS REGISTERED IN OTHER COLLECTION IN DATABASE
  const DoctorEmailExists = await Doctor.findOne({ email: email });
  const LabEmailExists = await Lab.findOne({ email: email });

  if (DoctorEmailExists || LabEmailExists) {
    return res.status(422).json({ error: "Email Already In Use!" });
  }

  //* CHECKING IF THE FIELDS ARE EMPTY OR NOT
  if (
    !age ||
    !full_name ||
    !gender ||
    !email ||
    !phone ||
    !password ||
    !cpassword
  ) {
    return res.status(422).json({ error: "Fields Cannot Be Empty!" });
  }
  try {
    //* USER DETAILS WHICH EMAILS MATCH IN DB
    const userExist = await Patient.findOne({ email: email });
    //* CHECKING PASS AND C PASS
    if (password !== cpassword) {
      return res
        .status(400)
        .json({ error: "Password & Confirm Password Mismatch!" });
    } else if (userExist) {
      //*  CHECKING EMAIL ALREADY EXIST IN DB
      return res.status(422).json({ error: "Email Already Exist!" });
    } else {
      //* IF USER NOT EXIST CREATING NEW USER IN DB
      const Patients = new Patient({
        full_name,
        gender,
        email,
        phone,
        password,
        cpassword,
      });

      //*  HASHING PASSWORD HERE FROM SCHEMA.JS THROUGH MIDDLEWARE

      //* SAVING DATA IN DB
      await Patients.save();

      //* SENDING RESPONSE
      res.status(201).json({ response: "User Registered!" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//* POST LABS REGISTRATIONS
router.post("/labs-registration", async (req, res) => {
  //* DESTRUCTURED USER FILLED DATA
  const {
    lab_name,
    lab_type,
    country,
    email,
    phone,
    city,
    state,
    address,
    password,
    cpassword,
  } = req.body;

  //* CHECKING IF THE SAME EMAIL IS REGISTERED IN OTHER COLLECTION IN DATABASE
  const DoctorEmailExists = await Doctor.findOne({ email: email });
  const PatientEmailExists = await Patient.findOne({ email: email });

  if (DoctorEmailExists || PatientEmailExists) {
    return res.status(422).json({ error: "Email Already In Use!" });
  }

  //* CHECKING IF THE FIELDS ARE EMPTY OR NOT
  if (
    (!lab_name ||
      !lab_type ||
      !country ||
      !email ||
      !phone ||
      !city ||
      !state ||
      !address,
    !password || !cpassword)
  ) {
    return res.status(422).json({ error: "Fields Cannot Be Empty!" });
  }
  try {
    //* USER DETAILS WHICH EMAILS MATCH IN DB
    const userExist = await Lab.findOne({ email: email });
    //* CHECKING PASS AND C PASS
    if (password !== cpassword) {
      return res
        .status(400)
        .json({ error: "Password & Confirm Password Mismatch!" });
    } else if (userExist) {
      //*  CHECKING EMAIL ALREADY EXIST IN DB
      return res.status(422).json({ error: "Email Already Exist!" });
    } else {
      //* IF USER NOT EXIST CREATING NEW USER IN DB
      const Labs = new Lab({
        lab_name,
        lab_type,
        country,
        email,
        phone,
        city,
        state,
        address,
        password,
        cpassword,
      });

      //*  HASHING PASSWORD HERE FROM SCHEMA.JS THROUGH MIDDLEWARE

      //* SAVING DATA IN DB
      await Labs.save();

      //* SENDING RESPONSE
      res.status(201).json({ response: "Lab Registered!" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//* POST PHARMACY REGISTRATIONS
router.post("/pharmacy-registration", async (req, res) => {
  //* DESTRUCTURED USER FILLED DATA
  const {
    pharmacy_name,
    country,
    email,
    phone,
    city,
    state,
    address,
    password,
    cpassword,
  } = req.body;

  //* CHECKING IF THE SAME EMAIL IS REGISTERED IN OTHER COLLECTION IN DATABASE
  const DoctorEmailExists = await Doctor.findOne({ email: email });
  const PatientEmailExists = await Patient.findOne({ email: email });

  if (DoctorEmailExists || PatientEmailExists) {
    return res.status(422).json({ error: "Email Already In Use!" });
  }

  //* CHECKING IF THE FIELDS ARE EMPTY OR NOT
  if (
    (!pharmacy_name ||
      !country ||
      !email ||
      !phone ||
      !city ||
      !state ||
      !address,
    !password || !cpassword)
  ) {
    return res.status(422).json({ error: "Fields Cannot Be Empty!" });
  }
  try {
    //* USER DETAILS WHICH EMAILS MATCH IN DB
    const userExist = await Pharmacy.findOne({ email: email });
    //* CHECKING PASS AND C PASS
    if (password !== cpassword) {
      return res
        .status(400)
        .json({ error: "Password & Confirm Password Mismatch!" });
    } else if (userExist) {
      //*  CHECKING EMAIL ALREADY EXIST IN DB
      return res.status(422).json({ error: "Email Already Exist!" });
    } else {
      //* IF USER NOT EXIST CREATING NEW USER IN DB
      const Pharmacies = new Pharmacy({
        pharmacy_name,
        country,
        email,
        phone,
        city,
        state,
        address,
        password,
        cpassword,
      });

      //*  HASHING PASSWORD HERE FROM SCHEMA.JS THROUGH MIDDLEWARE

      //* SAVING DATA IN DB
      await Pharmacies.save();

      //* SENDING RESPONSE
      res.status(201).json({ response: "Pharmacy Registered!" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//* POST DOCTOR LOGIN
router.post("/login-doctor", async (req, res) => {
  try {
    //* DATA WHICH USER TYPED FOR LOGIN
    const Email = req.body.login_email;
    const Password = req.body.login_password;
    console.log(Email, Password);
    //* CHECKING IF EMAIL FIELD IS EMPTY OR NOT
    if (!Email || !Password) {
      return res.status(400).json({ message: "Please Fill The Data" });
    }

    //* GETTING THE SPECIFIC DATA OF SAME EMAIL
    const UserLogin = await Doctor.findOne({ email: Email });
    if (!UserLogin || UserLogin == null) {
      res.status(404).json({ message: "No User Found" });
    } else {
      res.status(200).json(UserLogin);
    }
    console.log("USER DETAILS  " + UserLogin);

    //* DECRYPTING DB USER PASSWORD AND COMPARING IT FOR LOGIN
    const HashPassword = await bcrypt.compare(Password, UserLogin.password);

    //* CHECKING IF THE USER EXIST IN DB OR NOT WHILE LOGIN
    if (UserLogin && HashPassword) {
      //* GENERATING AUTH TOKEN WHILE LOGIN (USING MIDDLEWEARE)
      const token = await UserLogin.generateAuthToken();
      //*  console.log(token);

      //* SAVING AUTH TOKEN IN COOKIE
      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 300000),
        httpOnly: true,
      });

      res.json(UserLogin + "SignIn Successfully!!");
    } else {
      res.status(400).json({ error: "Sign in Failure,No Such Id Exist!!" });
    }
  } catch (error) {
    console.log(error);
  }
});

//* POST PATIENTS LOGIN
router.post("/login-patient", async (req, res) => {
  try {
    //* DATA WHICH USER TYPED FOR LOGIN
    const Email = req.body.login_email;
    const Password = req.body.login_password;
    console.log(Email, Password);
    //* CHECKING IF EMAIL FIELD IS EMPTY OR NOT
    if (!Email || !Password) {
      return res.status(400).json({ message: "Please Fill The Data" });
    }

    //* GETTING THE SPECIFIC DATA OF SAME EMAIL
    const UserLogin = await Patient.findOne({ email: Email });
    if (!UserLogin || UserLogin == null) {
      res.status(404).json({ message: "No User Found" });
    } else {
      res.status(200).json(UserLogin);
    }
    console.log("USER DETAILS  " + UserLogin);

    //* DECRYPTING DB USER PASSWORD AND COMPARING IT FOR LOGIN
    const HashPassword = await bcrypt.compare(Password, UserLogin.password);

    //* CHECKING IF THE USER EXIST IN DB OR NOT WHILE LOGIN
    if (UserLogin && HashPassword) {
      //* GENERATING AUTH TOKEN WHILE LOGIN (USING MIDDLEWEARE)
      const token = await UserLogin.generateAuthToken();
      //*  console.log(token);

      //* SAVING AUTH TOKEN IN COOKIE
      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 300000),
        httpOnly: true,
      });

      res.json(UserLogin + "SignIn Successfully!!");
    } else {
      res.status(400).json({ error: "Sign in Failure,No Such Id Exist!!" });
    }
  } catch (error) {
    console.log(error);
  }
});

//* POST LAB LOGIN
router.post("/login-lab", async (req, res) => {
  try {
    //* DATA WHICH USER TYPED FOR LOGIN
    const Email = req.body.login_email;
    const Password = req.body.login_password;
    console.log(Email, Password);
    //* CHECKING IF EMAIL FIELD IS EMPTY OR NOT
    if (!Email || !Password) {
      return res.status(400).json({ message: "Please Fill The Data" });
    }

    //* GETTING THE SPECIFIC DATA OF SAME EMAIL
    const UserLogin = await Lab.findOne({ email: Email });
    if (!UserLogin || UserLogin == null) {
      res.status(404).json({ message: "No User Found" });
    } else {
      res.status(200).json(UserLogin);
    }
    console.log("USER DETAILS  " + UserLogin);

    //* DECRYPTING DB USER PASSWORD AND COMPARING IT FOR LOGIN
    const HashPassword = await bcrypt.compare(Password, UserLogin.password);

    //* CHECKING IF THE USER EXIST IN DB OR NOT WHILE LOGIN
    if (UserLogin && HashPassword) {
      //* GENERATING AUTH TOKEN WHILE LOGIN (USING MIDDLEWEARE)
      const token = await UserLogin.generateAuthToken();
      //*  console.log(token);

      //* SAVING AUTH TOKEN IN COOKIE
      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 300000),
        httpOnly: true,
      });

      res.json(UserLogin + "SignIn Successfully!!");
    } else {
      res.status(400).json({ error: "Sign in Failure,No Such Id Exist!!" });
    }
  } catch (error) {
    console.log(error);
  }
});

//* POST PHARMACY LOGIN
router.post("/login-pharmacy", async (req, res) => {
  try {
    //* DATA WHICH USER TYPED FOR LOGIN
    const Email = req.body.login_email;
    const Password = req.body.login_password;
    console.log(Email, Password);
    //* CHECKING IF EMAIL FIELD IS EMPTY OR NOT
    if (!Email || !Password) {
      return res.status(400).json({ message: "Please Fill The Data" });
    }

    //* GETTING THE SPECIFIC DATA OF SAME EMAIL
    const UserLogin = await Pharmacy.findOne({ email: Email });
    if (!UserLogin || UserLogin == null) {
      res.status(404).json({ message: "No User Found" });
    } else {
      res.status(200).json(UserLogin);
    }
    console.log("USER DETAILS  " + UserLogin);

    //* DECRYPTING DB USER PASSWORD AND COMPARING IT FOR LOGIN
    const HashPassword = await bcrypt.compare(Password, UserLogin.password);

    //* CHECKING IF THE USER EXIST IN DB OR NOT WHILE LOGIN
    if (UserLogin && HashPassword) {
      //* GENERATING AUTH TOKEN WHILE LOGIN (USING MIDDLEWEARE)
      const token = await UserLogin.generateAuthToken();
      //*  console.log(token);

      //* SAVING AUTH TOKEN IN COOKIE
      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 300000),
        httpOnly: true,
      });

      res.json(UserLogin + "SignIn Successfully!!");
    } else {
      res.status(400).json({ error: "Sign in Failure,No Such Id Exist!!" });
    }
  } catch (error) {
    console.log(error);
  }
});


//*  DOCTOR APPOINTMENT 
router.patch("/add_medicine", async (req, res) => {
  try {
    //*  GETTING USER UPDATING INPUT
    const Id = req.body._id;
    const MedicineName = req.body.medicine_name;
    const MedicineFormula = req.body.medicine_formula;
    const MedicinePrice = req.body.medicine_price;

    //* UPDATING SPECIFIC USER WITH ID
    const UpdateUser = await Pharmacy.updateOne(
      { _id: Id },
      {
        $push: {
          medicines: {
            medicine_name: MedicineName,
            medicine_formula: MedicineFormula,
            medicine_price: MedicinePrice,
          },
        },
      }
    );

    //* SENDING RESPONSE
    if (UpdateUser.acknowledged) {
      res.status(201).json({ response: "Details Updated Successfully!" });
    } else {
      res.status(400).json({ error: "Failed To Updated User Profile!" });
    }
  } catch (error) {
    console.log(error);
  }
});

//*  ADDING MEDICINES
router.patch("/add_medicine", async (req, res) => {
  try {
    //*  GETTING USER UPDATING INPUT
    const Id = req.body._id;
    const MedicineName = req.body.medicine_name;
    const MedicineFormula = req.body.medicine_formula;
    const MedicinePrice = req.body.medicine_price;

    //* UPDATING SPECIFIC USER WITH ID
    const UpdateUser = await Pharmacy.updateOne(
      { _id: Id },
      {
        $push: {
          medicines: {
            medicine_name: MedicineName,
            medicine_formula: MedicineFormula,
            medicine_price: MedicinePrice,
          },
        },
      }
    );

    //* SENDING RESPONSE
    if (UpdateUser.acknowledged) {
      res.status(201).json({ response: "Details Updated Successfully!" });
    } else {
      res.status(400).json({ error: "Failed To Updated User Profile!" });
    }
  } catch (error) {
    console.log(error);
  }
});

//*  ADDING MEDICINES
router.patch("/add_medicine", async (req, res) => {
  try {
    //*  GETTING USER UPDATING INPUT
    const Id = req.body._id;
    const MedicineName = req.body.medicine_name;
    const MedicineFormula = req.body.medicine_formula;
    const MedicinePrice = req.body.medicine_price;

    //* UPDATING SPECIFIC USER WITH ID
    const UpdateUser = await Pharmacy.updateOne(
      { _id: Id },
      {
        $push: {
          medicines: {
            medicine_name: MedicineName,
            medicine_formula: MedicineFormula,
            medicine_price: MedicinePrice,
          },
        },
      }
    );

    //* SENDING RESPONSE
    if (UpdateUser.acknowledged) {
      res.status(201).json({ response: "Details Updated Successfully!" });
    } else {
      res.status(400).json({ error: "Failed To Updated User Profile!" });
    }
  } catch (error) {
    console.log(error);
  }
});

//*  UPLOAD FILE
router.post("/upload-img", FileUpload.single("img"),(req, res) => {
  res.send("File Uploaded!");
});


//*  GET ABOUT
router.get("/about", Middleware, (req, res) => {
  res.send(req.rootUser);
});

//*  GET LOGOUT
router.get("/logout", (req, res) => {
  res.clearCookie("jwt", { path: "/" });
  res.status(200).json({ message: "User Logout Successfully!" });
});

//*  CONTACTUS USER DETAILS REQUEST
router.get("/getdata", Middleware, (req, res) => {
  res.send(req.rootUser);
});

module.exports = router;
