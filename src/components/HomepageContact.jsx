import "../styles/HomepageContact.css";
import React from "react";
import { businessHours } from "../utils/BusinessHours";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const HomepageContact = () => {
  return (
    <div className="HomepageContactContainer">
      <div className="ContactHeader">
        <span className="ContactSplitText">
          <h1>Contact &</h1>
          <h1>Reservations</h1>
        </span>
        <p>
          Join us at Riella's Homestyle. Make a reservation or get in touch –
          we'd love to welcome you to our family.
        </p>
      </div>
      <div className="ContactBody">
        <div className="ContactHours">
          {businessHours.map((day) => (
            <div className="ContactHoursItem" key={day.day}>
              <p>{day.day}</p>
              <p>{day.hours}</p>
            </div>
          ))}
        </div>
        <div className="ContactInfo">
          <div className="ContactInfoHeader">
            <h2>Find Us</h2>
          </div>
          <div className="ContactInfoBody">
            <div className="ContactInfoItem">
              <MapPin color="var(--primary-red)" size={24} />
              <span>
                <h3>Address</h3>
                <h3>3103 N Jerusalem Rd, Levittown, NY 11756</h3>
              </span>
            </div>
            <div className="ContactInfoItem">
              <Phone color="var(--primary-red)" size={24} />
              <span>
                <h3>Phone</h3>
                <h3>(845) 444-4444</h3>
              </span>
            </div>
            <div className="ContactInfoItem">
              <Mail color="var(--primary-red)" size={24} />
              <span>
                <h3>Email</h3>
                <h3>info@riellas.com</h3>
              </span>
            </div>
          </div>
          <div className="ContactInfoMap">
            <iframe
              width="100%"
              height="250"
              frameBorder="0"
              style={{ borderRadius: "8px" }}
              src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=3103%20N%20Jerusalem%20Rd,%20Levittown,%20NY%2011756+(Riella's%20Homestyle)&t=p&z=15&ie=UTF8&iwloc=B&output=embed"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Riella's Homestyle Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageContact;