const mongoose = require("mongoose");

const TrackHistorySchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    requried: true,
  },
  track: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Track",
    requried: true,
  },
  listenDate: {
    type: Date,
    default: () => Date.now(),
  },
});

const TrackHistory = mongoose.model("TrackHistory", TrackHistorySchema);

module.exports = TrackHistory;
