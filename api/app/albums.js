const express = require('express');
const Album = require('../models/Album');
const router = express.Router();

router.get('/', async (req, res) => {
  if (req.query.artist) {
    const albumsArtist = await Album.find({ artist: req.query.artist }).populate('artist', 'name');
    return res.send(albumsArtist);
  } else {
    const albums = await Album.find().populate('artist', 'name');
    res.send(albums);
  }
});

router.post('/', async (req, res) => {
  const albumData = req.body;
  const album = new Album(albumData);
  try {
    await album.save();
    res.send(album);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
