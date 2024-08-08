import React from "react";
import PropTypes from 'prop-types';
import { ContactPicker } from "../contactPicker/ContactPicker"; 

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  selectedContact,
  setSelectedContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  console.log("AppointmentForm props:", {
    contacts,
    title,
    selectedContact,
    date,
    time,
    handleSubmit
  }); // Debug output

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            aria-label="Appointment name"
          />
        </label>
      </div>
      <div>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={getTodayString()}
            aria-label="Appointment date"
          />
        </label>
      </div>
      <div>
        <label>
          Time:
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            aria-label="Appointment time"
          />
        </label>
      </div>
      <div>
        <ContactPicker
          contacts={contacts}
          selectedContact={selectedContact}
          onChange={(e) => setSelectedContact(e.target.value)}
          aria-label="Select a contact for the appointment"
        />
      </div>
      <button type="submit">Add Appointment</button>
    </form>
  );
};

AppointmentForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  selectedContact: PropTypes.string.isRequired,
  setSelectedContact: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  setDate: PropTypes.func.isRequired,
  time: PropTypes.string.isRequired,
  setTime: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};