import "../styles/HomepageContact.css";

import React from "react";
import { businessHours } from "../utils/BusinessHours";
import { contactInfo } from "../utils/ContactInfo";

const HomepageContact = () => {
  return (
    <div className="HomepageContactContainer">
      <div className="ContactHeader">
        <span className="ContactSplitText">
          <h1>Contact &</h1>
          <h1>Reservations</h1>
        </span>
        <p>
          Join us at Riella's Homestyle. Make a reservation or get in touch -
          we'd love to welcome you to our family.
        </p>
      </div>
      <div className="ContactBody">
        <div className="ContactHours">
          {businessHours.map((day) => (
            <div key={`${day.day}`}>
              <p>{day.day}</p>
              <p>{day.hours}</p>
            </div>
          ))}
        </div>
        <div className="ContactInfo">
          <div className="ContactInfoHeader">
            <h2>Contact Us</h2>
          </div>
          <div className="ContactInfoBody">
            {contactInfo.map((info) => (
              <div className="ContactInfoItem">
                <div className="ContactBodyIcon">
                  {/* ${info.icon} */}
                </div>
              </div>
            ))}
          </div>
          <div className="ContactInfoMap">
            <div>
              <iframe
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=3103%20N%20Jerusalem%20Rd,%20Levittown,%20NY%2011756+(Riella's%20Homestyle)&amp;t=p&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.gps.ie/collections/sports-gps/">
                  Cycling gps
                </a>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageContact;
