const express = require('express');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
// MySQL Connection Pool
// const plants = mysql.createPlants({
//   host: 'your_mysql_host',
//   user: 'your_mysql_user',
//   password: 'your_mysql_password',
//   database: 'your_database_name',
//   connectionLimit: 10, 
// });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve the static HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
// Handle the contact form submission
app.post('/submit-contact-form', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }
    const connection = await plants.getConnection();
    const insertQuery = 'INSERT INTO contact_forms (name, email, message) VALUES (?, ?, ?)';
    await connection.query(insertQuery, [name, email, message]);
    connection.release();
    return res.status(200).json({ message: 'Form submitted successfully.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred while submitting the form.' });
  }
});


//The setTimeout example., 1
console.log(1);
setTimeout(function foo(){
    console.log(2);
}, 0);
console.log(3);
function myCallback() {
    console.log("Timeout: The callback function has been executed.");
  }
  setTimeout(myCallback, 8000); // This will wait for 8 seconds before executing the callback
//using 'console.time()'
console.time("myTimer");
// Simulating the task
setTimeout(() => {
  console.timeEnd("myTimer");
}, 7000); // This will wait for 7 seconds before stopping the timer
// Using setInterval()
let counter = 0;
function myIntervalCallback() {
  counter++;
  console.log(`Interval: Callback executed ${counter} times.`);
  if (counter === 10) {
    clearInterval(intervalID);
    console.log("Interval: Stopped interval execution.");
  }
}
const intervalID = setInterval(myIntervalCallback, 1000); // This will execute the callback every 1 second until 5 iterations are reached


app.get('/plants', (req, res) => {
    const plants = [
      { id: 1, name: 'Baseball Plant', scienceName: 'Euphorbia obesa', place: ' South Africa'},
      { id: 2, name: 'Corpse Flower', scienceName: ' Amorphophallus titanum', place: ' Sumatra, Indonesia'},
      { id: 3, scienceName: 'Rafflesia arnoldii', place:  'Indonesian rainforests'},
      { id: 4, name: 'Dragon Arum', scienceName: 'Dracunculus vulgaris', place:'Mediterranean region'},
      { id: 5, name: 'African Starfish Flowers', scienceName: 'Stapelia lepida', place:  ' Botswana, Namibia, South Africa, and Zimbabwe.'},
      { id: 6, name: 'Hydnora Africana', scienceName: 'Victoria amazonica', place: 'Botswana, Namibia, Swaziland, Ethiopia'},
      { id: 7, name: 'Giant Water Lily', scienceName: 'Amorphophallus giganteus', place: 'South America'},
      { id: 8, name: 'Elephant-Foot Yam', scienceName: 'Welwitschia Mirabilis', place:  ' Madagascar, India'},
      { id: 9, scienceName: 'Euphorbia obesa', place: '  Namib Desert (Namibia and Angola)'},
      { id: 10, name: 'Vegetable Sheep', scienceName: ' Raoulia rubra', place:  'New Zealand'}
    ];
    res.json(plants);
  });
  
  app.get('/plants/:id', (req, res) => {
    const id = req.params.id;
    const plant = plant.find(p => p.id === id);
    if (!plant) {
      return res.status(404).send('Plant not found');
    }
    res.json(plant);
  });
  
  app.post('/plants', (req, res) => {
    const plant = req.body;
    plant.push(plant);
    res.status(201).send('Plant created successfully');
  });
  
  app.delete('/plants/:id', (req, res) => {
    const id = req.params.id;
    const plant = plant.find(p => p.id === id);
    if (!plant) {
      return res.status(404).send('Plant not found');
    }
    plant.splice(plant.indexOf(plant), 1);
    res.send('Plant deleted successfully');
  });


  "use strict";

const {promises: {readFile}} = require("fs");

const files = [
  "package.json",
//   "README.md",
];
        
Promise.all(files.map(file => {
  return readFile(file);
})).then(fileBuffers => {
  fileBuffers.forEach(fileBuffer => {
    console.log(fileBuffer.toString());
  });
}).catch(error => {
  console.error(error.message);
  process.exit(1);
});


// Node.js program to demonstrate the 
// fsPromises.writeFile() method 
  
// Import the filesystem module 
const fs = require('fs');
const fsPromises = require('fs').promises;
let data = "This is a file containing"
        + " a collection of Twenty unique plants guaranteed blow your mind"
        + '1. Baseball Plant'
        +'Scientific Name: Euphorbia obesa'
        +'Where it’s Found: South Africa'
        +'2. Corpse Flower'
        +'Scientific Name: Amorphophallus titanum'
        +'Where it’s Found: Sumatra, Indonesia'
       +' 3. Rafflesia arnoldii'
        +'Where it’s Found: Indonesian rainforests'
       +' 4. Dragon Arum'
        +'Scientific Name: Dracunculus vulgaris'
        +'Where it’s Found: Mediterranean region'
        +'5. African Starfish Flowers'
        +'Scientific Name: Stapelia lepida'
        +'Where it’s Found: Botswana, Namibia, South Africa, and Zimbabwe.'
        +'6. Hydnora Africana'
        +'Where it’s Found: Botswana, Namibia, Swaziland, Ethiopia'
        +'7. Giant Water Lily'
        +'Scientific Name: Victoria amazonica'
        +'Where it’s Found: South America'
        +'8. Elephant-Foot Yam'
        +'Scientific Name: Amorphophallus giganteus'
        +'Where it’s Found: Madagascar, India, China, Taiwan, Philippines, Malaysia, Indonesia, Papua New Guinea, Australia'
        +'9. Welwitschia Mirabilis'
        +'Where it’s Found: Namib Desert (Namibia and Angola)'
        +'10. Vegetable Sheep'
        +'Scientific Name: Raoulia rubra'
        +'Where it’s Found: New Zealand'
        +'11. Living Stones'
        +'Scientific Name: Lithops'
        +'Where it’s Found: Southern Africa'  
        ;
  
(async function main() {
    try {
        await fsPromises.writeFile(
                "plants.txt", data)
  
        console.log("File written successfully");
        console.log("The written file has"
            + " the following contents:");
  
        console.log("" + 
            fs.readFileSync("./plants.txt"));
  
    } catch (err) {
        console.error(err);
    }
})();

  // Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });