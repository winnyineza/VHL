// server.js

const express = require('express');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Dummy secret for demonstration purposes
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// API endpoints
app.post('/api/auth/signin', (req, res) => {
  // Implement your sign-in logic here
});

app.post('/api/auth/signup', async (req, res) => {
  // Implement your sign-up logic here
});

// Serve React static files after build in production
if (process.env.NODE_ENV === 'production') {
  // Set the static folder
  app.use(express.static(path.join(__dirname, 'build')));

  // Handles any requests that don't match the ones above
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/vhl', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(cors()); // Use CORS to allow cross-origin access
app.use(express.json()); // Parse JSON bodies for this app. Make sure you're using Node.js 4.16.0+

// Define Schemas
const StudentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  class: String,
});

const TeacherSchema = new mongoose.Schema({
  name: String,
  subject: String,
  tenure: Number,
});

const EventSchema = new mongoose.Schema({
  title: String,
  date: Date,
  description: String,
});

const FinanceSchema = new mongoose.Schema({
  invoiceNumber: String,
  amount: Number,
  status: String,
});

// Create Models
const Student = mongoose.model('Student', StudentSchema);
const Teacher = mongoose.model('Teacher', TeacherSchema);
const Event = mongoose.model('Event', EventSchema);
const Finance = mongoose.model('Finance', FinanceSchema);

// API Routes
// Students
app.get('/api/students', async (req, res) => {
  const students = await Student.find({});
  res.json(students);
});

app.post('/api/students', async (req, res) => {
  const newStudent = new Student(req.body);
  const savedStudent = await newStudent.save();
  res.status(201).json(savedStudent);
});

// Teachers
app.get('/api/teachers', async (req, res) => {
  const teachers = await Teacher.find({});
  res.json(teachers);
});

app.post('/api/teachers', async (req, res) => {
  const newTeacher = new Teacher(req.body);
  const savedTeacher = await newTeacher.save();
  res.status(201).json(savedTeacher);
});

// Events
app.get('/api/events', async (req, res) => {
  const events = await Event.find({});
  res.json(events);
});

app.post('/api/events', async (req, res) => {
  const newEvent = new Event(req.body);
  const savedEvent = await newEvent.save();
  res.status(201).json(savedEvent);
});

// Finance
app.get('/api/finance', async (req, res) => {
  const financeRecords = await Finance.find({});
  res.json(financeRecords);
});

app.post('/api/finance', async (req, res) => {
  const newFinanceRecord = new Finance(req.body);
  const savedFinanceRecord = await newFinanceRecord.save();
  res.status(201).json(savedFinanceRecord);
});

// ... Add more routes as needed

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Students Routes
app.get('/api/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching students', error: error.message });
  }
});

// Teachers Routes
app.get('/api/teachers', async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching teachers', error: error.message });
  }
});
