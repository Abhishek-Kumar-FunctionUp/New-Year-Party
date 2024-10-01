import React, { useState, useEffect } from "react";
import Countdown from "../components/Countdown";
import RegistrationForm from "../components/RegistrationForm";

const Home: React.FC = () => {
  const eventDate = new Date("2023-12-31T20:00:00");

  return (
    <div className="home-page">
      <marquee>
        <h1>New Year's Party</h1>
      </marquee>
      <Countdown targetDate={eventDate} />
      <div className="event-details">
        <h2>Event Information</h2>
        <div className="event-item">
          <strong>Event Description:</strong>
          <p>
            Join us for a fantastic New Year's Eve celebration filled with fun,
            food, and music!
          </p>
        </div>
        <div className="event-item">
          <strong>Location:</strong>
          <p>
            #404 Nilamber Primero, Vasna - Bhayli Main Rd, near Nilamber Circle,
            Vadodara, Gujarat 390021
          </p>
        </div>
        <div className="event-item">
          <strong>Date:</strong>
          <p>31st December 2023</p>
        </div>
        <div className="event-item">
          <strong>Time:</strong>
          <p>08:00 p.m. IST</p>
        </div>
      </div>

      <RegistrationForm />
    </div>
  );
};

export default Home;
