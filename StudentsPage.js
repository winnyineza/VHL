// StudentsPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentsPage = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // This is where you would fetch the student data from the server
    const fetchStudents = async () => {
      try {
        const response = await axios.get('/api/students');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students', error);
        // Handle error here, e.g., set an error message state and display it
      }
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <h1>Students</h1>
      <ul>
        {students.map(student => (
          <li key={student._id}>
            Name: {student.name}, Age: {student.age}, Class: {student.class}
          </li>
        ))}
      </ul>
      {/* Add form or other UI elements for adding/editing students */}
    </div>
  );
};

export default StudentsPage;
