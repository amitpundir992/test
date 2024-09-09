import React, { useState } from "react";
//////////////// import CSS /////////////////////
import "../css/animate.min.css";
import "../css/datepicker.css";
import "../css/bootstrap.min.css"
import "../css/font-awesome.min.css";
import "../css/icofont.css";
import "../css/magnific-popup.css";
import "../css/nice-select.css";
import "../css/normalize.css";
import "../css/owl-carousel.css";
import "../css/responsive.css";
import "../css/slicknav.min.css";
import "../css/style.css";
export const Contact = () => {
  const [email, setEmail] = useState("");
  const [placeholder, setPlaceholder] = useState("Your email address");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    // Add your form submission logic here, e.g., sending the email to a server
    console.log("Form submitted with email:", email);
  };

  const handleFocus = () => {
    setPlaceholder(""); // Clear placeholder on focus
  };

  const handleBlur = () => {
    setPlaceholder("Your email address"); // Reset placeholder on blur
  };
  return (
    <>
      {/* Breadcrumbs  */}
      <div className="breadcrumbs overlay">
        <div className="container">
          <div className="bread-inner">
            <div className="row">
              <div className="col-12">
                <h2>Contact Us</h2>
                <ul className="bread-list">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <i className="icofont-simple-right"></i>
                  </li>
                  <li className="active">Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrumbs  */}

      {/* Start Contact Us  */}
      <section className="contact-us section">
        <div className="container">
          <div className="inner">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-us-left">
                  {/* Start Google-map  */}
                  <div id="myMap"></div>
                  {/* End Google-map  */}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-us-form">
                  <h2>Contact With Us</h2>
                  <p>
                    If you have any questions please fell free to contact with
                    us.
                  </p>
                  {/* Form  */}
                  <form className="form" method="post" action="mail/mail.php">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            placeholder="Your Message"
                            required=""
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group login-btn">
                          <button className="btn" type="submit">
                            Send
                          </button>
                        </div>
                        <div className="checkbox">
                          <label className="checkbox-inline" for="2">
                            <input name="news" id="2" type="checkbox" />
                            Do you want to subscribe our Newsletter ?
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                  {/* End Form  */}
                </div>
              </div>
            </div>
          </div>
          <div className="contact-info">
            <div className="row">
              {/* single-info  */}
              <div className="col-lg-4 col-12 ">
                <div className="single-info">
                  <i className="icofont icofont-ui-call"></i>
                  <div className="content">
                    <h3>+(000) 1234 56789</h3>
                    <p>info@company.com</p>
                  </div>
                </div>
              </div>
              {/* End single-info  */}
              {/* single-info  */}
              <div className="col-lg-4 col-12 ">
                <div className="single-info">
                  <i className="icofont-google-map"></i>
                  <div className="content">
                    <h3>2 Fir e Brigade Road</h3>
                    <p>Chittagonj, Lakshmipur</p>
                  </div>
                </div>
              </div>
              {/* End single-info  */}
              {/* single-info  */}
              <div className="col-lg-4 col-12 ">
                <div className="single-info">
                  <i className="icofont icofont-wall-clock"></i>
                  <div className="content">
                    <h3>Mon - Sat: 8am - 5pm</h3>
                    <p>Sunday Closed</p>
                  </div>
                </div>
              </div>
              {/* End single-info  */}
            </div>
          </div>
        </div>
      </section>
      {/* End Contact Us  */}
    </>
  );
};
