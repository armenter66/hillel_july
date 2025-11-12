import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const users = [];

app.post('/signin', (request, response) => {
  const {login, password} = request.body;
  const currentUser = users.find(user => user.login === login && user.password === password);
  if (!currentUser) {
    return response.sendStatus(404);
  }

  return response.send(currentUser);

});

app.post('/register', (request, response) => {
  const {login, password, fullname, city} = request.body;
  const newUser = { id: users.length + 1, login, password, fullname, city };
  users.push(newUser);
  response.send(newUser);
});

app.listen(3000);