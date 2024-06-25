// src/CalendarPage.jsx
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const events = [
  {
    id: 0,
    title: 'Board meeting',
    start: new Date(2024, 5, 25, 9, 0, 0),
    end: new Date(2024, 5, 25, 13, 0, 0),
  },
  {
    id: 1,
    title: 'Team lunch',
    start: new Date(2024, 5, 28, 12, 0, 0),
    end: new Date(2024, 5, 28, 13, 0, 0),
  },
];

const CalendarPage = () => {
  return (
    <div style={{ height: '80vh' }}>
      <h2>Calendar Page</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
        defaultView="week"
        views={['month', 'week', 'day']}
      />
    </div>
  );
};

export default CalendarPage;
