const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/Users");
const router = express.Router();
require("dotenv").config();
router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, role, password } = req.body;

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "user already exist" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);
    user = new User({
      firstName,
      lastName,
      email,
      role,
      password: hashedpassword,
    });
    await user.save();
    res.status(201).json({ message: "user register successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
function generateJWT(user) {
  const payload = {
    id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    role: user.role,
    createdAt: user.CreatedAt,
  };
  token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
}
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid password" });
    const token = generateJWT(user);
    res.cookie("token", token, { HTTPOnly: true });
    res.status(200).json({ message: "login succefully", token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;
