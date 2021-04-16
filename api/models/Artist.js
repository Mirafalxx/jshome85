const mongoose = require("mongoose");

const ArtistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  information: String,
  album: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Album",
    required: true,
  },
});

const Artist = mongoose.model("Artist", ArtistSchema);

module.exports = Artist;
