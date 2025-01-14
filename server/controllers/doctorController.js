import jwt from "jsonwebtoken";
import doctorModel from "../models/doctorModel.js";
import bcrypt from "bcrypt";

const loginDoctor = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (role !== "doctor") {
      return res.status(400).json({
        success: false,
        message: "Invalid role for this login endpoint.",
      });
    }
    const doctor = await doctorModel.findOne({ email });
    if (!doctor) {
      return res
        .status(404)
        .json({ success: false, message: "User Not Found !!" });
    }

    const isMatch = await bcrypt.compare(password, doctor.password);

    if (isMatch) {
      const token = jwt.sign({ id: doctor._id, role }, process.env.JWT_SECRET);
      res.status(201).json({ success: true, token, role: "doctor" });
    } else {
      res.status(401).json({ success: true, message: "Invalid Credinatial" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "login doctor : " + error.message });
  }
};

const doctorAuthTest = async (req, res) => {
  try {
    res.send("this is working fine ");
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Doctor Auth Catch Block Error : " + error.message,
    });
  }
};

export { loginDoctor, doctorAuthTest };
