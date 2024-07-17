import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./ContactUs.css"; 

const SalesDetails = () => (
  <div>
    <h4>Sales Department</h4>
    <p>Email: sales@example.com</p>
    <p>Phone: +1234567890</p>
    <p>Address: 123 Innovation Drive, Suite 400, Techville, TX 75001, USA</p>
  </div>
);

const SupportDetails = () => (
  <div>
    <h4>Support Department</h4>
    <p>Email: support@example.com</p>
    <p>Phone: +1234567890</p>
    <p> Address: 456 Global Ave, Floor 5, International Business Park, London, UK NW1 5DL</p>
  </div>
);

const ContactUs = () => {
  const { department } = useParams();
  const [animationClass, setAnimationClass] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setAnimationClass("fade-in");
  }, []);

  const validateForm = () => {
    const errors = {};
    if (!name.trim()) errors.name = "Name is required";
    else if(!/^[a-zA-Z\s]*$/.test(name)) errors.name = "Name is invalid";
    if (!email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) errors.email = "Email is invalid";
    if (!message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
    } else {
      setErrors({});
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");

    }
  };

  return (
    <div className={`contactus-container ${animationClass}`}>
      <h1>Contact Us</h1>

      {/* Contact Form */}
      <div className="contact-form">
        <h2>Contact Form</h2>
        {success && (
          <p className="success-message">
            Your message has been sent successfully!
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input className="input" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>
          <div>
            <label>Email:</label>
            <input className="input" type="email" name="email"  value={email}  onChange={(e) => setEmail(e.target.value)}  required/>
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div>
            <label>Message:</label>
            <textarea className="input" name="message"  value={message}  onChange={(e) => setMessage(e.target.value)}  required></textarea>
            {errors.message && (
              <p className="error-message">{errors.message}</p>
            )}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="contact">
        <hr />

        <div className="department-details">
          <h2>Department Details</h2>
          <br />
          {department === "sales" && <SalesDetails />}
          {department === "support" && <SupportDetails />}
        </div>

        <div className="department-links">
          <button>
            <Link className="link" to="/contact-us/sales"> Sales </Link>
          </button>
          <button>
            <Link className="link" to="/contact-us/support"> Support </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
