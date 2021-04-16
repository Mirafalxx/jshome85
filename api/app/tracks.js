const express = require("express");
const Track = require("../models/Track");
const User = require("../models/User");
const TrackHistory = require("../models/TrackHistory");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const tracks = await Track.find().populate("album", "title");
    res.send(tracks);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.post("/", async (req, res) => {
  const trackData = req.body;
  const track = new Track(trackData);
  try {
    track.save();
    res.send(track);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/history", async (req, res) => {
  const token = req.get("Authorization");
  if (!token) res.status(401).send({ error: "No Token present" });
  const user = await User.findOne({ token });
  if (!user) return res.status(401).send({ error: "Wrong Token" });

  // **************

  const history = new TrackHistory({ track: user._id, user: user._id });
  await history.save();
  return res.send({ message: "Secret message", history });
});
module.exports = router;
