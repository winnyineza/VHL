// DashboardPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DashboardPage.css'; // Make sure to create proper CSS for styling

const DashboardPage = () => {
  const [totalStudents, setTotalStudents] = useState(0);
  const [totalTeachers, setTotalTeachers] = useState(0);
  const [events, setEvents] = useState([]);
  const [invoiceStatus, setInvoiceStatus] = useState({});

  useEffect(() => {
    // Fetch the total number of students
    const fetchStudents = async () => {
      const result = await axios('/api/students/count');
      setTotalStudents(result.data.count);
    };

    // Fetch the total number of teachers
    const fetchTeachers = async () => {
      const result = await axios('/api/teachers/count');
      setTotalTeachers(result.data.count);
    };

    // Fetch the latest events
    const fetchEvents = async () => {
      const result = await axios('/api/events/latest');
      setEvents(result.data.events);
    };

    // Fetch the invoice status
    const fetchInvoiceStatus = async () => {
      const result = await axios('/api/finance/invoices');
      setInvoiceStatus(result.data.status);
    };

    fetchStudents();
    fetchTeachers();
    fetchEvents();
    fetchInvoiceStatus();
  }, []);

  return (
    <div className="dashboard-container">
      {/* ... rest of the dashboard */}
      <div className="dashboard-stats">
        <div className="stat-item">
          <div className="stat-value">{totalStudents}</div>
          <div className="stat-name">Total Students</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{totalTeachers}</div>
          <div className="stat-name">Total Teachers</div>
        </div>
        {/* ... other stat items */}
      </div>
      {/* ... other sections */}
    </div>
  );
};

export default DashboardPage;
