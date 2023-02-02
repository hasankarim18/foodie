import React from "react";
import ContactForm from "../body/ContactForm";

const Contact = () => {
  return (
    <div className="container ">
      <h1 className="text-center">Send us your feedback</h1>
      <div className="form_container">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
