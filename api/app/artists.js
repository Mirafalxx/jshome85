const express = require("express");
const Artist = require("../models/Artist");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const artists = await Artist.find();
    res.send(artists);
  } catch (e) {
    res.sendStatus(500);
  }
});

// router.get("/:id", async (req, res) => {
//   const signleArtist = await Artist.findOne({ _id: req.params.id }).populate("album", "title");
//   res.send(signleArtist);
// });

router.post("/", async (req, res) => {
  const artistData = req.body;
  const artist = new Artist(artistData);
  try {
    await artist.save();
    res.send(artist);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
