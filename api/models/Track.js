const mongoose = require("mongoose");

const TrackSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  duration: String,
  album: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Album",
    required: true,
  },
});

const Track = mongoose.model("Track", TrackSchema);
module.exports = Track;
