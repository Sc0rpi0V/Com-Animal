import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AppointmentForm from './AppointmentForm';
import './style/Calendar.css';

const MyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showForm, setShowForm] = useState(false);

  const handleDateClick = date => {
    setSelectedDate(date);
    setShowForm(true);
  };

  return (
    <div className='calendar-container'>
        <h4>Rendez-vous</h4>
        <Calendar onClickDay={handleDateClick} />
        {showForm && <AppointmentForm date={selectedDate} onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default MyCalendar;