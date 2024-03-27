// TeachersPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TeachersPage = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get('/api/teachers');
        setTeachers(response.data);
      } catch (error) {
        console.error('Error fetching teachers:', error);
        // Handle error here, for example by setting an error message in state and displaying it
      }
    };

    fetchTeachers();
  }, []);

  return (
    <div>
      <h1>Teachers</h1>
      {teachers.length > 0 ? (
        <ul>
          {teachers.map(teacher => (
            <li key={teacher._id}>
              Name: {teacher.name}, Subject: {teacher.subject}, Tenure: {teacher.tenure} years
            </li>
          ))}
        </ul>
      ) : (
        <p>No teachers data available.</p>
      )}
    </div>
  );
};

export default TeachersPage;
