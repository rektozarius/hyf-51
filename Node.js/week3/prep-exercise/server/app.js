import express from 'express';
import {register, login, profile, logout} from './users.js'

let app = express();

app.use(express.json());

app.get('/auth/profile', profile);

app.post('/auth/register', register);

app.post('/auth/login', login);

app.post('/auth/logout', logout);

// Serve the front-end application from the `client` folder
app.use(express.static('client'));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
