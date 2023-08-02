// client-side code
const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://example.com/users/123');
xhr.onload = function() {
  if (xhr.status === 200) {
    console.log(xhr.responseText);
  } else {
    console.log('Request failed.  Returned status of ' + xhr.status);
  }
};
xhr.send();


// server-side code
app.get('/users/:id', function(req, res) {
    const id = parseInt(req.params.id, 10);
    const user = users.find(u => u.id === id);
    if (user) {
      res.send(JSON.stringify(user));
    } else {
      res.status(404).send('User not found');
    }
  });


  const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to our Plants server');
});

app.listen(4000, () => {
  console.log('Server started on port 4000');
});