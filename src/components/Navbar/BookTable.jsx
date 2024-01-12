// BookTable.jsx

import React, { useState } from 'react';
import './BookTable.css';

const BookTable = () => {
  const [selectedTable, setSelectedTable] = useState(null);
  const [bookedTables, setBookedTables] = useState([]);
  const [isFormOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phoneNumber: '' });
  const [bookedTablesVisible, setBookedTablesVisible] = useState(false);

  const handleTableSelect = (tableNumber) => {
    setSelectedTable(tableNumber);
  };

  const handleConfirmBooking = () => {
    if (selectedTable !== null && formData.name && formData.phoneNumber) {
      const bookingDetails = {
        tableNumber: selectedTable,
        name: formData.name,
        phoneNumber: formData.phoneNumber,
      };
      setBookedTables([...bookedTables, bookingDetails]);
      setSelectedTable(null);
      setFormData({ name: '', phoneNumber: '' });
      setFormOpen(false);
    }
  };

  const handleOpenForm = () => {
    setFormOpen(true);
  };

  const handleModalClose = () => {
    setFormOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="booktable-container">
      <div className="buttons-container">
        {!isFormOpen && (
          <button className="new-button" onClick={handleOpenForm}>
            Reserve a Table
          </button>
        )}

        {isFormOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <div className="close-icon" onClick={handleModalClose}>
                &times;
              </div>

              <div className="table-options">
                {[...Array(15)].map((_, index) => (
                  <div
                    key={index}
                    className={`table-option ${selectedTable === index + 1 ? 'selected' : ''}`}
                    onClick={() => handleTableSelect(index + 1)}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>

              <div className="form-container">
                <h2 className="form-title">Reservation Form</h2>
                <div className="form-line"></div>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                <div className="form-line"></div>
                <label>Phone Number:</label>
                <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} />
                <div className="form-line"></div>
                <button className="confirm-button" onClick={handleConfirmBooking}>
                  Confirm Reservation
                </button>
              </div>
            </div>
          </div>
        )}

        <button
          className={`new-button ${isFormOpen ? 'hidden' : ''}`}
          onClick={() => {
            setBookedTablesVisible(!bookedTablesVisible);
          }}
        >
          Booked Tables
        </button>
      </div>

      {bookedTablesVisible && (
        <div className="booked-tables-modal">
          <div className="booked-tables-content">
            <div className="close-icon" onClick={() => setBookedTablesVisible(false)}>
              &times;
            </div>

            <h2>Booked Tables</h2>
            <ul>
              {bookedTables.map((booking, index) => (
                <li key={index}>{`Table ${booking.tableNumber}: ${booking.name} - ${booking.phoneNumber}`}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookTable;
