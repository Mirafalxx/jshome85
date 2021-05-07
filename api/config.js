const path = require('path');
const rootPath = __dirname;

module.exports = {
  rootPath,
  uploadPath: path.join(rootPath, 'public/uploads'),
  db: {
    name: 'home82',
    url: 'mongodb://localhost',
  },
  google: {
    clientId: '509568669737-b0aol5hmsolu4qp1dqnl0asor30i76r8.apps.googleusercontent.com',
  },
};
