const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const artists = require("./app/artists");
const albums = require("./app/albums");
const tracks = require("./app/tracks");
const users = require("./app/users");
const trackHistory = require("./app/trackHistory");

app.use(express.json());
app.use(cors());
const port = 8000;

app.use("/artists", artists);
app.use("/albums", albums);
app.use("/tracks", tracks);
app.use("/users", users);
app.use("/track_history", trackHistory);

const run = async () => {
  await mongoose.connect("mongodb://localhost/home82", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  app.listen(port, () => {
    console.log(`Server started on ${port} port`);
  });
};

run().catch(console.error);
