// const fs = require('fs');
// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// //Middlewares
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// //Write POST endpoint to get the sum of two number


// //Write POST endpoint to get the differance of two number


// //Write POST endpoint to get the multiplication of two number


// //Write POST endpoint to check if the num2 is 0 or not and to get the result after dividing two number

      

// const server = app.listen(4000, () => {
//   console.log(`Server running on port 4000`);
// });
    
// module.exports = app;

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Define the /add endpoint
app.post('/add', (req, res) => {
  const { num1, num2 } = req.body;

  // Check if num1 and num2 are valid numbers
  if (!isNumeric(num1) || !isNumeric(num2)) {
    return res.status(400).json({ status: 'error', message: 'Invalid data types' });
  }

  const result = num1 + num2;

  // Check for overflow or underflow
  if (isOutOfBounds(result)) {
    return res.status(400).json({ status: 'error', message: 'Overflow' });
  }

  res.json({ result });
});

// Define the /subtract endpoint
app.post('/subtract', (req, res) => {
  const { num1, num2 } = req.body;

  if (!isNumeric(num1) || !isNumeric(num2)) {
    return res.status(400).json({ status: 'error', message: 'Invalid data types' });
  }

  const result = num1 - num2;

  if (isOutOfBounds(result)) {
    return res.status(400).json({ status: 'error', message: 'Underflow' });
  }

  res.json({ result });
});

// Define the /multiply endpoint
app.post('/multiply', (req, res) => {
  const { num1, num2 } = req.body;

  if (!isNumeric(num1) || !isNumeric(num2)) {
    return res.status(400).json({ status: 'error', message: 'Invalid data types' });
  }

  const result = num1 * num2;

  if (isOutOfBounds(result)) {
    return res.status(400).json({ status: 'error', message: 'Overflow' });
  }

  res.json({ result });
});

// Define the /divide endpoint
// Define the /divide endpoint
app.post('/divide', (req, res) => {
  const { num1, num2 } = req.body;

  if (!isNumeric(num1) || !isNumeric(num2)) {
    return res.status(400).json({ status: 'error', message: 'Invalid data types' });
  }

  if (num2 === 0) {
    return res.status(400).json({ status: 'error', message: 'Cannot divide by zero' });
  }

  const result = num1 / num2;

  if (isOutOfBounds(result)) {
    return res.status(400).json({ status: 'error', message: 'Overflow' });
  }

  res.json({ result });
});



// Helper function to check if a value is a valid number
function isNumeric(value) {
  return typeof value === 'number' && !isNaN(value);
}

// Helper function to check if a value is out of bounds (-1 million to 1 million)
function isOutOfBounds(value) {
  return value < -1000000 || value > 1000000;
}

// Start the server
const server = app.listen(4000, () => {
  console.log(`Server running on port 4000`);
});
    
module.exports = app;
