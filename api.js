const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'Sidwell ' },
    { id: 2, name: 'Sisipho' },
    { id: 3, name: 'Ridhaa' },
    { id: 4, name: 'Lisa' },
    { id: 5, name: 'Liyabona' },
    { id: 6, name: 'Olwethu' }
  ];
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = users.find(u => u.id === id);
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.json(user);
});

app.post('/users', (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).send('User created successfully');
});

app.delete('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = users.find(u => u.id === id);
  if (!user) {
    return res.status(404).send('User not found');
  }
  users.splice(users.indexOf(user), 1);
  res.send('User deleted successfully');
});

app.listen(2000, () => {
  console.log('Server started on port 2000');
});