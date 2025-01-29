import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sending the form data to EmailJS using the sendForm method
    emailjs.sendForm(
      'service_uc0z58j',  // Replace with your EmailJS service ID
      'template_smjynyi',  // Replace with your EmailJS template ID
      e.target,            // The form data (it automatically uses input names)
      'oKkBCk0YMkxptQk2v'       // Replace with your EmailJS user ID (you get it from EmailJS dashboard)
    )
    .then((result) => {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Reset form after submission
    }, (error) => {
      setStatus('Failed to send message. Please try again later.');
    });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Contact Information</h2>
      <ul style={styles.text}>
        <li><strong>Phone:</strong> 📞+91-8015671191</li>
        {/* <li><strong>Email:</strong> <a href="mailto:dhanapriya.v2023aiml@sece.ac.in">dhanapriya.v2023aiml@sece.ac.in</a></li>
        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/dhana-priya-b210412a5" target="_blank" rel="noopener noreferrer">Dhanapriya</a></li>
        <li><strong>GitHub:</strong> <a href="https://github.com/Dhanapriya11" target="_blank" rel="noopener noreferrer">Dhanapriya11</a></li> */}
      </ul>

      <h3 style={styles.subHeading}>Send me a message:</h3>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          style={styles.textarea}
        ></textarea>
        <button type="submit" style={styles.button}>Send Message</button>
      </form>

      {status && <p style={styles.status}>{status}</p>}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
  },
  heading: {
    textAlign: 'center',
    color: '#333',
  },
  subHeading: {
    color: '#333',
    marginTop: '20px',
  },
  text: {
    listStyle: 'none',
    padding: '0',
    fontSize: '1.1rem',
  },
  input: {
    padding: '10px',
    marginBottom: '15px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
  },
  textarea: {
    padding: '10px',
    marginBottom: '15px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
    height: '150px',
    resize: 'none',
  },
  button: {
    backgroundColor: '#f04e23',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
  },
  buttonHover: {
    backgroundColor: '#d03b1f',
  },
  status: {
    fontSize: '1.2rem',
    color: 'green',
    marginTop: '20px',
    textAlign: 'center',
  },
};

export default Contact;
