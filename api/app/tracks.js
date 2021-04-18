const express = require('express');
const Track = require('../models/Track');
const User = require('../models/User');
const TrackHistory = require('../models/TrackHistory');
const router = express.Router();

router.get('/', async (req, res) => {
  if (req.query.album) {
    const tracks = await Track.find({ album: req.query.album }).populate('album', 'title').sort({ number: 1 });
    return res.send(tracks);
  } else {
    const tracks = await Track.find().populate('album', 'title');
    res.send(tracks);
  }
});

router.post('/', async (req, res) => {
  const trackData = req.body;
  const track = new Track(trackData);
  try {
    track.save();
    res.send(track);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post('/history', async (req, res) => {
  const token = req.get('Authorization');
  if (!token) res.status(401).send({ error: 'No Token present' });
  const user = await User.findOne({ token });
  if (!user) return res.status(401).send({ error: 'Wrong Token' });

  // **************

  const history = new TrackHistory({ track: user._id, user: user._id });
  await history.save();
  return res.send({ message: 'Secret message', history });
});
module.exports = router;
