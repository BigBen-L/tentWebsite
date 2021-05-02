import React from 'react';
import './ContactPage.scss';

const ContactPage: React.FC = () => {
  return (
    <div className="container contact-page">
      <div className="contact-page__text">
        <h2>Phone:</h2>
        <p>0410606896</p>
        <h2>Address:</h2>
        <p>391 Park Road, Regents Park NSW 2143</p>
      </div>

      <div className="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6624.801879010603!2d151.0167817976307!3d-33.87932652223333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bcf4fee88e7b%3A0x8842c547a605ce76!2s391%20Park%20Rd%2C%20Regents%20Park%20NSW%202143!5e0!3m2!1sen!2sau!4v1619948660006!5m2!1sen!2sau"
          width="auto"
          height="450"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ContactPage;
