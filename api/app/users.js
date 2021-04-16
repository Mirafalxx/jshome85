const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.post("/", async (req, res) => {
  const userData = req.body;
  const user = new User(userData);
  try {
    user.generateToken();
    await user.save();
    return res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/sessions", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user) return res.status(400).send({ error: "User not found!" });

  const isMatch = await user.checkPassword(req.body.password);

  if (!isMatch) return res.status(401).send({ error: "Login or password are incorrect" });

  user.generateToken();
  await user.save();
  return res.send({ message: "User and password are correct", token: user.token });
});
module.exports = router;
