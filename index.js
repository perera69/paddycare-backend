const app = require('./app');
const db = require('./config/db');
const UserModel = require('./model/user.model');


const port = 3000;

app.get('/', (req, res) => {
  res.send('paddy care backend connected');
});

app.listen(port, () => {
  console.log(`server Listening on Port http://localhost:${port}`);
});
