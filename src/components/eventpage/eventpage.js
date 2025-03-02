import React from "react";

import "./eventpage.css";
import Event from "./event";
import Speaker from "./speaker";

const EventPage = () => {
  return (
    <div className="event-page" id="events">
      <div className="head">
        <h1 className="title">Events</h1>
        <p className="info">Come learn, share and connect with us.</p>
      </div>

      <Event className="current-event" />
      {/* <Speaker /> */}
    </div>
  );
};

export default EventPage;
