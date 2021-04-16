const express = require("express");
const Track = require("../models/Track");
const User = require("../models/User");
const TrackHistory = require("../models/TrackHistory");
const router = express.Router();

router.post("/", async (req, res) => {
  const token = req.get("Authorization");
  if (!token) res.status(401).send({ error: "No Token present" });
  const user = await User.findOne({ token });
  if (!user) return res.status(401).send({ error: "Wrong Token" });
  const track = await Track.findOne({ _id: req.body.track });

  const history = new TrackHistory({ track: track._id, user: user._id });
  await history.save();
  return res.send({ message: "Secret message", history });
});
module.exports = router;
