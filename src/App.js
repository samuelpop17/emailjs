import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const App = () => {
  const frmContact = { userEmail: '', userName: '', phoneNumber: '', message: '' };
  const [contact, setContact] = useState(frmContact);
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Asegúrate de que todos los campos necesarios estén presentes
    if (!contact.userEmail || !contact.userName || !contact.phoneNumber || !contact.message) {
      console.log('All fields are required');
      return;
    }

    emailjs
      .send('default_service', 'template_wwpuvrj', contact, 'ExPSrGwO6SCA_y1bA')
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setContact(frmContact);
          setShowMessage(true);

        },
        (err) => {
          console.log('FAILED...', err);

        }
      );
      emailjs
      .send('default_service', 'template_g1wmo3f', contact, 'ExPSrGwO6SCA_y1bA')
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setContact(frmContact);
          setShowMessage(true);

        },
        (err) => {
          console.log('FAILED...', err);

        }
      );
  };


  return (
    <div className="container pt-2 text-center">


      {showMessage ? (
        <div className="alert alert-success col-md-5 mx-auto" role="alert">
          Email Send Success!!
        </div>
      ) : (
        ``
      )}

      <form onSubmit={handleSubmit}>
        <div className="pt-3">
          <h3 className="font-weight-bold"> Contact Us !! </h3>
        </div>
        <div className="pt-3 col-md-5 mx-auto">
          <div className="form-group text-left">
            <b>Your Email</b> <br />
            <input
              required
              type="text"
              value={contact.userEmail}
              name="userEmail"
              onChange={handleChange}
              className="form-control"
              placeholder="Your email"
            />
          </div>
        </div>
        <div className="pt-3 col-md-5 mx-auto">
          <div className="form-group text-left">
            <b>Your Name</b> <br />
            <input
              required
              type="text"
              value={contact.userName}
              name="userName"
              onChange={handleChange}
              className="form-control"
              placeholder="Your name"
            />
          </div>
        </div>
        <div className="pt-3 col-md-5 mx-auto">
          <div className="form-group text-left">
            <b>Your Phone Number</b> <br />
            <input
              required
              type="text"
              value={contact.phoneNumber}
              name="phoneNumber"
              onChange={handleChange}
              className="form-control"
              placeholder="Your phone number"
            />
          </div>
        </div>
        <div className="pt-3 col-md-5 mx-auto">
          <div className="form-group text-left">
            <b>Your Message</b> <br />
            <textarea
              required
              name="message"
              onChange={handleChange}
              className="form-control"
              placeholder="Your message"
              value={contact.message}
            ></textarea>
          </div>
        </div>
        <div className="pt-3 col-md-5 mx-auto text-left">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
      <div className="pt-5 font-weight-bold">tupaginaonline.net</div>
    </div>
  );
};

export default App;
