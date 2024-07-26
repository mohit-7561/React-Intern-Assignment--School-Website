import React from "react";

const ContactUs = () => {
  return (
    <section id="contact-us">
      <h2>Contact Us</h2>
      <p>We are located at 123 School Lane, Springfield, IL 62704.</p>
      <p>Phone: (555) 7890</p>
      <p>Email: info@springdale.edu</p>
      <h3>Contact Form</h3>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Send</button>
      </form>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.758358439831!2d-122.414957!3d37.779359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580645c7fa017%3A0x43dc8acb4ae2d0f5!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1634174173391!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactUs;
