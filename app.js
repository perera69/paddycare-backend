const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routers/user.router');
const loginRouter = require('./routers/user.router');
const cors = require('cors');



const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
// Use the login route
app.use('/login', loginRouter);

app.use('/', userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
