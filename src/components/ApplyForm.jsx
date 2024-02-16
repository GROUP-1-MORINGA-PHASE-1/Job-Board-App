import React, { useState } from 'react';

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: null,
    image: null,
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.files[0],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send a POST request with the form data to the server
    const formDataObject = new FormData();
    for (const key in formData) {
      formDataObject.append(key, formData[key]);
    }

    fetch('http://localhost:3000/applied', { // Corrected the URL
    method: 'POST',
      body: formDataObject,
    })
      .then((response) => {
        if (response.ok) {
          // Handle successful form submission
          alert('Application submitted!');
        } else {
          throw new Error('Failed to submit application');
        }
      })
      .catch((error) => {
        // Handle error during form submission
        console.error(error);
        alert('Failed to submit application');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
      />

      <label htmlFor="resume">Resume:</label>
      <input
        type="file"
        name="resume"
        id="resume"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
      />

      <label htmlFor="image">Profile Image:</label>
      <input
        type="file"
        name="image"
        id="image"
        accept="image/*"
        onChange={handleFileChange}
      />

      <button type="submit">Submit Application</button>
    </form>
  );
};

export default ApplyForm;