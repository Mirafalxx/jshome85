const mongoose = require('mongoose');

const { nanoid } = require('nanoid');
const config = require('./config');
const User = require('./models/User');
const Album = require('./models/Album');
const Artist = require('./models/Artist');
const Track = require('./models/Track');

mongoose.connect(config.db.url + '/' + config.db.name);

const db = mongoose.connection;

db.once('open', async () => {
  try {
    await db.dropCollection('albums');
    await db.dropCollection('artists');
    await db.dropCollection('tracks');
    await db.dropCollection('users');
  } catch (e) {
    console.log('Collections were not present, skipping drop...');
  }

  const [eminem, Miyagi, LinkinPark] = await Artist.create(
    {
      name: 'Eminem',
      information: 'Eminem',
    },
    {
      name: 'Miyagi & AndyPanda',
      information: 'Miyagy & AndyPanda',
    },
    {
      name: 'Linkin Park',
      information: 'LP',
    }
  );
  const [Godzilla, Yamakasi, Meteora] = await Album.create(
    {
      name: 'Godzilla',
      releaseDate: '2020.12.10',
      artist: eminem._id,
    },
    {
      name: 'YAMAKASI',
      releaseDate: '2020.06.12',
      artist: Miyagi._id,
    },
    {
      name: 'Meteora',
      releaseDate: '2020.12.10',
      artist: LinkinPark._id,
    }
  );

  Track.create(
    { name: 'Shake that Ass ', duration: '2:10', album: Godzilla._id },
    { name: 'Мало Нам', duration: '3:13', album: Yamakasi._id },
    { name: 'Faint', duration: '4:23', album: Meteora._id }
  );
  await User.create(
    {
      email: 'user@music',
      password: 'user',
      displayName: 'User',
      token: nanoid(),
      role: 'user',
    },
    {
      email: 'admin@music',
      password: 'admin',
      displayName: 'Admin',
      token: nanoid(),
      admin: 'admin',
      role: 'admin',
    }
  );

  db.close();
});
