const mongoose = require("mongoose");

const ArtistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  information: String,
  
});

const Artist = mongoose.model("Artist", ArtistSchema);

module.exports = Artist;
