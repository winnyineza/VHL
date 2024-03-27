// CalendarPage.js

import React from 'react';
import './CalendarPage.css'; // This will be your CSS file for styling the calendar

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

const CalendarPage = () => {
  // Assuming we want to display October 2024 for example purposes
  const year = 2024;
  const month = 9; // October (month is 0-indexed in JavaScript Dates)
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  
  // Calculate the days to show in the calendar (including previous and next month's days)
  const calendarDays = [];
  let day = 1 - firstDayOfMonth;
  const totalDays = daysInMonth(year, month) + firstDayOfMonth;
  
  while (day <= totalDays) {
    calendarDays.push(new Date(year, month, day++));
  }

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h1>Calendar</h1>
        <h2>October 2024</h2> {/* You can make this dynamic */}
      </div>
      <div className="calendar-grid">
        {daysOfWeek.map(d => (
          <div key={d} className="calendar-day-header">
            {d}
          </div>
        ))}
        {calendarDays.map((date, index) => (
          <div key={index} className={`calendar-day ${date.getMonth() !== month ? 'not-current-month' : ''}`}>
            {date.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarPage;
