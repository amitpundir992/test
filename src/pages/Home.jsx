import React, { useState } from "react";

//////////////// import CSS /////////////////////
import "../css/animate.min.css";
import "../css/datepicker.css";
import "../css/bootstrap.min.css"
import "../css/font-awesome.min.css";
import "../css/icofont.css";
import "../css/magnific-popup.css";
import "../css/nice-select.css";
// import '../css/normalize.css'
import "../css/owl-carousel.css";
import "../css/responsive.css";
import "../css/slicknav.min.css";
import "../css/style.css";
//////////////  CSS end /////////////////////

//import images
import slider from "../img/slider.jpg"
import slider2 from "../img/slider2.jpg";
import slider3 from "../img/slider3.jpg";
import sectionimg from "../img/section-img.png";
import pf1 from "../img/pf1.jpg";
import pf2 from "../img/pf2.jpg";
import pf3 from "../img/pf3.jpg";
import pf4 from "../img/pf4.jpg";
import blog1 from "../img/blog1.jpg";
import blog2 from "../img/blog2.jpg";
import blog3 from "../img/blog3.jpg";
import client1 from "../img/client1.png";
import client2 from "../img/client2.png";
import client3 from "../img/client3.png";
import client4 from "../img/client4.png";
import client5 from "../img/client5.png";
import contactimg from "../img/contact-img.png";

/////////////// IMAGE IMPORT END //////////////////

export const Home = () => {
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
      {/* Slider Area  */}
      <section className="slider">
        <div className="hero-slider">
          {/* Start Single Slider */}
          <div
            className="single-slider"
            style={{ backgroundImage: `url(${slider2})` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="text">
                    <h1>
                      We Provide <span>Medical</span> Services That You Can{" "}
                      <span>Trust!</span>
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris sed nisl pellentesque, faucibus libero eu, gravida
                      quam.
                    </p>
                    <div className="button">
                      <a href="#" className="btn">
                        Get Appointment
                      </a>
                      <a href="#" className="btn primary">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Single Slider */}

          {/* Start Single Slider */}
          <div
            className="single-slider"
            style={{ backgroundImage: `url(${slider})` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="text">
                    <h1>
                      We Provide <span>Medical</span> Services That You Can{" "}
                      <span>Trust!</span>
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris sed nisl pellentesque, faucibus libero eu, gravida
                      quam.
                    </p>
                    <div className="button">
                      <a href="#" className="btn">
                        Get Appointment
                      </a>
                      <a href="#" className="btn primary">
                        About Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Single Slider */}

          {/* Start Single Slider */}
          <div
            className="single-slider"
            style={{ backgroundImage: `url(${slider3})` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="text">
                    <h1>
                      We Provide <span>Medical</span> Services That You Can{" "}
                      <span>Trust!</span>
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris sed nisl pellentesque, faucibus libero eu, gravida
                      quam.
                    </p>
                    <div className="button">
                      <a href="#" className="btn">
                        Get Appointment
                      </a>
                      <a href="#" className="btn primary">
                        Contact Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Single Slider */}
        </div>
      </section>
      {/* End Slider Area  */}

      {/* Start Schedule Area  */}
      <section className="schedule">
        <div className="container">
          <div className="schedule-inner">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                {/* Single Schedule */}
                <div className="single-schedule first">
                  <div className="inner">
                    <div className="icon">
                      <i className="fa fa-ambulance"></i>
                    </div>
                    <div className="single-content">
                      <span>Lorem Amet</span>
                      <h4>Emergency Cases</h4>
                      <p>
                        Lorem ipsum sit amet consectetur adipiscing elit.
                        Vivamus et erat in lacus convallis sodales.
                      </p>
                      <a href="#">
                        LEARN MORE <i className="fa fa-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Single Schedule */}
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                {/* Single Schedule */}
                <div className="single-schedule middle">
                  <div className="inner">
                    <div className="icon">
                      <i className="icofont-prescription"></i>
                    </div>
                    <div className="single-content">
                      <span>Fusce Porttitor</span>
                      <h4>Doctors Timetable</h4>
                      <p>
                        Lorem ipsum sit amet consectetur adipiscing elit.
                        Vivamus et erat in lacus convallis sodales.
                      </p>
                      <a href="#">
                        LEARN MORE <i className="fa fa-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Single Schedule */}
              </div>
              <div className="col-lg-4 col-md-12 col-12">
                {/* Single Schedule */}
                <div className="single-schedule last">
                  <div className="inner">
                    <div className="icon">
                      <i className="icofont-ui-clock"></i>
                    </div>
                    <div className="single-content">
                      <span>Donec luctus</span>
                      <h4>Opening Hours</h4>
                      <ul className="time-sidual">
                        <li className="day">
                          Monday - Friday <span>8.00-20.00</span>
                        </li>
                        <li className="day">
                          Saturday <span>9.00-18.30</span>
                        </li>
                        <li className="day">
                          Monday - Thursday <span>9.00-15.00</span>
                        </li>
                      </ul>
                      <a href="#">
                        LEARN MORE <i className="fa fa-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Single Schedule */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Start schedule Area  */}

      {/* Start Feautes  */}
      <section className="Features section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>We Are Always Ready to Help You & Your Family</h2>
                <img src={sectionimg} alt="Section" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  praesent aliquet. pretiumts
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-12">
              {/* Start Single features */}
              <div className="single-features">
                <div className="single-icon">
                  <i className="icofont icofont-ambulance-cross"></i>
                </div>
                <h3>Emergency Help</h3>
                <p>
                  Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam
                  vulputate.
                </p>
              </div>
              {/* End Single features */}
            </div>
            <div className="col-lg-4 col-12">
              {/* Start Single features */}
              <div className="single-features">
                <div className="single-icon">
                  <i className="icofont icofont-medical-sign-alt"></i>
                </div>
                <h3>Enriched Pharmacy</h3>
                <p>
                  Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam
                  vulputate.
                </p>
              </div>
              {/* End Single features */}
            </div>
            <div className="col-lg-4 col-12">
              {/* Start Single features */}
              <div className="single-features last">
                <div className="single-icon">
                  <i className="icofont icofont-stethoscope"></i>
                </div>
                <h3>Medical Treatment</h3>
                <p>
                  Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam
                  vulputate.
                </p>
              </div>
              {/* End Single features */}
            </div>
          </div>
        </div>
      </section>
      {/* End Feautes  */}

      {/* Start Fun-facts  */}
      <div id="fun-facts" className="fun-facts section overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              {/* Start Single Fun */}
              <div className="single-fun">
                <i className="icofont icofont-home"></i>
                <div className="content">
                  <span className="counter">3468</span>
                  <p>Hospital Rooms</p>
                </div>
              </div>
              {/* End Single Fun */}
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* Start Single Fun */}
              <div className="single-fun">
                <i className="icofont icofont-user-alt-3"></i>
                <div className="content">
                  <span className="counter">557</span>
                  <p>Specialist Doctors</p>
                </div>
              </div>
              {/* End Single Fun */}
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* Start Single Fun */}
              <div className="single-fun">
                <i className="icofont-simple-smile"></i>
                <div className="content">
                  <span className="counter">4379</span>
                  <p>Happy Patients</p>
                </div>
              </div>
              {/* End Single Fun */}
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* Start Single Fun */}
              <div className="single-fun">
                <i className="icofont icofont-table"></i>
                <div className="content">
                  <span className="counter">32</span>
                  <p>Years of Experience</p>
                </div>
              </div>
              {/* End Single Fun */}
            </div>
          </div>
        </div>
      </div>
      {/* End Fun-facts */}

      {/* Start Why choose  */}
      <section className="why-choose section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>We Offer Different Services To Improve Your Health</h2>
                <img src={sectionimg} alt="Health Services" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  praesent aliquet. pretiumts
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-12">
              {/* Start Choose Left */}
              <div className="choose-left">
                <h3>Who We Are</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas pharetra antege vel est lobortis, a commodo magna
                  rhoncus. In quis nisi non emet quam pharetra commodo.
                </p>
                <p>
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul className="list">
                      <li>
                        <i className="fa fa-caret-right"></i>Maecenas vitae
                        luctus nibh.
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>Duis massa massa.
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>Aliquam feugiat
                        interdum.
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul className="list">
                      <li>
                        <i className="fa fa-caret-right"></i>Maecenas vitae
                        luctus nibh.
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>Duis massa massa.
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>Aliquam feugiat
                        interdum.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End Choose Left */}
            </div>
            <div className="col-lg-6 col-12">
              {/* Start Choose Right */}
              <div className="choose-right">
                <div className="video-image">
                  {/* Video Animation */}
                  <div className="promo-video">
                    <div className="waves-block">
                      <div className="waves wave-1"></div>
                      <div className="waves wave-2"></div>
                      <div className="waves wave-3"></div>
                    </div>
                  </div>
                  {/* End Video Animation */}
                  <a
                    href="https://www.youtube.com/watch?v=RFVXy6CRVR4"
                    className="video video-popup mfp-iframe"
                  >
                    <i className="fa fa-play"></i>
                  </a>
                </div>
              </div>
              {/* End Choose Right */}
            </div>
          </div>
        </div>
      </section>
      {/* End Why choose  */}

      {/* Start Call to action  */}
      <section
        className="call-action overlay"
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="content">
                <h2>Do you need Emergency Medical Care? Call @ 1234 56789</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque porttitor dictum turpis nec gravida.
                </p>
                <div className="button">
                  <a href="#" className="btn">
                    Contact Now
                  </a>
                  <a href="#" className="btn second">
                    Learn More <i className="fa fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Call to action */}

      {/* Start portfolio */}
      <section className="portfolio section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>We Maintain Cleanliness Rules Inside Our Hospital</h2>
                <img src={sectionimg} alt="Cleanliness Rules" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  praesent aliquet. pretiumts
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-12">
              <div className="owl-carousel portfolio-slider">
                <div className="single-pf">
                  <img src={pf1} alt="Portfolio 1" />
                  <a href="portfolio-details.html" className="btn">
                    View Details
                  </a>
                </div>
                <div className="single-pf">
                  <img src={pf2} alt="Portfolio 2" />
                  <a href="portfolio-details.html" className="btn">
                    View Details
                  </a>
                </div>
                <div className="single-pf">
                  <img src={pf3} alt="Portfolio 3" />
                  <a href="portfolio-details.html" className="btn">
                    View Details
                  </a>
                </div>
                <div className="single-pf">
                  <img src={pf4} alt="Portfolio 4" />
                  <a href="portfolio-details.html" className="btn">
                    View Details
                  </a>
                </div>
                <div className="single-pf">
                  <img src={pf1} alt="Portfolio 1" />
                  <a href="portfolio-details.html" className="btn">
                    View Details
                  </a>
                </div>
                <div className="single-pf">
                  <img src={pf2} alt="Portfolio 2" />
                  <a href="portfolio-details.html" className="btn">
                    View Details
                  </a>
                </div>
                <div className="single-pf">
                  <img src={pf3} alt="Portfolio 3" />
                  <a href="portfolio-details.html" className="btn">
                    View Details
                  </a>
                </div>
                <div className="single-pf">
                  <img src={pf4} alt="Portfolio 4" />
                  <a href="portfolio-details.html" className="btn">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End portfolio  */}

      {/* Start service  */}
      <section className="services section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>We Offer Different Services To Improve Your Health</h2>
                <img src={sectionimg} alt="#" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  praesent aliquet. pretiumts
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Service  */}
              <div className="single-service">
                <i className="icofont icofont-prescription"></i>
                <h4>
                  <a href="service-details.html">General Treatment</a>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  luctus dictum eros ut imperdiet.{" "}
                </p>
              </div>
              {/* End Single Service  */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Service  */}
              <div className="single-service">
                <i className="icofont icofont-tooth"></i>
                <h4>
                  <a href="service-details.html">Teeth Whitening</a>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  luctus dictum eros ut imperdiet.{" "}
                </p>
              </div>
              {/* End Single Service  */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Service  */}
              <div className="single-service">
                <i className="icofont icofont-heart-alt"></i>
                <h4>
                  <a href="service-details.html">Heart Surgery</a>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  luctus dictum eros ut imperdiet.{" "}
                </p>
              </div>
              {/* End Single Service  */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Service  */}
              <div className="single-service">
                <i className="icofont icofont-listening"></i>
                <h4>
                  <a href="service-details.html">Ear Treatment</a>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  luctus dictum eros ut imperdiet.{" "}
                </p>
              </div>
              {/* End Single Service  */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Service  */}
              <div className="single-service">
                <i className="icofont icofont-eye-alt"></i>
                <h4>
                  <a href="service-details.html">Vision Problems</a>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  luctus dictum eros ut imperdiet.{" "}
                </p>
              </div>
              {/* End Single Service  */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Service  */}
              <div className="single-service">
                <i className="icofont icofont-blood"></i>
                <h4>
                  <a href="service-details.html">Blood Transfusion</a>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  luctus dictum eros ut imperdiet.{" "}
                </p>
              </div>
              {/* End Single Service  */}
            </div>
          </div>
        </div>
      </section>
      {/* End service  */}

      {/* Pricing Table  */}
      <section className="pricing-table section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>We Provide You The Best Treatment In Resonable Price</h2>
                <img src={sectionimg} alt="#" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  praesent aliquet. pretiumts
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Single Table  */}
            <div className="col-lg-4 col-md-12 col-12">
              <div className="single-table">
                {/* Table Head   */}
                <div className="table-head">
                  <div className="icon">
                    <i className="icofont icofont-ui-cut"></i>
                  </div>
                  <h4 className="title">Plastic Suggery</h4>
                  <div className="price">
                    <p className="amount">
                      $199<span>/ Per Visit</span>
                    </p>
                  </div>
                </div>
                {/* Table List  */}
                <ul className="table-list">
                  <li>
                    <i className="icofont icofont-ui-check"></i>Lorem ipsum
                    dolor sit
                  </li>
                  <li>
                    <i className="icofont icofont-ui-check"></i>Cubitur
                    sollicitudin fentum
                  </li>
                  <li className="cross">
                    <i className="icofont icofont-ui-close"></i>Nullam interdum
                    enim
                  </li>
                  <li className="cross">
                    <i className="icofont icofont-ui-close"></i>Donec ultricies
                    metus
                  </li>
                  <li className="cross">
                    <i className="icofont icofont-ui-close"></i>Pellentesque
                    eget nibh
                  </li>
                </ul>
                <div className="table-bottom">
                  <a className="btn" href="#">
                    Book Now
                  </a>
                </div>
                {/* Table Bottom  */}
              </div>
            </div>
            {/* End Single Table */}
            {/* Single Table  */}
            <div className="col-lg-4 col-md-12 col-12">
              <div className="single-table">
                {/* Table Head  */}
                <div className="table-head">
                  <div className="icon">
                    <i className="icofont icofont-tooth"></i>
                  </div>
                  <h4 className="title">Teeth Whitening</h4>
                  <div className="price">
                    <p className="amount">
                      $299<span>/ Per Visit</span>
                    </p>
                  </div>
                </div>
                {/* Table List  */}
                <ul className="table-list">
                  <li>
                    <i className="icofont icofont-ui-check"></i>Lorem ipsum
                    dolor sit
                  </li>
                  <li>
                    <i className="icofont icofont-ui-check"></i>Cubitur
                    sollicitudin fentum
                  </li>
                  <li>
                    <i className="icofont icofont-ui-check"></i>Nullam interdum
                    enim
                  </li>
                  <li className="cross">
                    <i className="icofont icofont-ui-close"></i>Donec ultricies
                    metus
                  </li>
                  <li className="cross">
                    <i className="icofont icofont-ui-close"></i>Pellentesque
                    eget nibh
                  </li>
                </ul>
                <div className="table-bottom">
                  <a className="btn" href="#">
                    Book Now
                  </a>
                </div>
                {/* Table Bottom  */}
              </div>
            </div>
            {/* End Single Table */}
            {/* Single Table  */}
            <div className="col-lg-4 col-md-12 col-12">
              <div className="single-table">
                {/* Table Head  */}
                <div className="table-head">
                  <div className="icon">
                    <i className="icofont-heart-beat"></i>
                  </div>
                  <h4 className="title">Heart Suggery</h4>
                  <div className="price">
                    <p className="amount">
                      $399<span>/ Per Visit</span>
                    </p>
                  </div>
                </div>
                {/* Table List  */}
                <ul className="table-list">
                  <li>
                    <i className="icofont icofont-ui-check"></i>Lorem ipsum
                    dolor sit
                  </li>
                  <li>
                    <i className="icofont icofont-ui-check"></i>Cubitur
                    sollicitudin fentum
                  </li>
                  <li>
                    <i className="icofont icofont-ui-check"></i>Nullam interdum
                    enim
                  </li>
                  <li>
                    <i className="icofont icofont-ui-check"></i>Donec ultricies
                    metus
                  </li>
                  <li>
                    <i className="icofont icofont-ui-check"></i>Pellentesque
                    eget nibh
                  </li>
                </ul>
                <div className="table-bottom">
                  <a className="btn" href="#">
                    Book Now
                  </a>
                </div>
                {/* Table Bottom  */}
              </div>
            </div>
            {/* End Single Table */}
          </div>
        </div>
      </section>
      {/* End Pricing Table  */}

      {/* Start Blog Area  */}
      <section className="blog section" id="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Keep up with Our Most Recent Medical News.</h2>
                <img src={sectionimg} alt="#" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  praesent aliquet. pretiumts
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              {/* Single Blog   */}
              <div className="single-news">
                <div className="news-head">
                  <img src={blog1} alt="#" />
                </div>
                <div className="news-body">
                  <div className="news-content">
                    <div className="date">22 Aug, 2020</div>
                    <h2>
                      <a href="blog-single.html">
                        We have annnocuced our new product.
                      </a>
                    </h2>
                    <p className="text">
                      Lorem ipsum dolor a sit ameti, consectetur adipisicing
                      elit, sed do eiusmod tempor incididunt sed do incididunt
                      sed.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Blog   */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Single Blog   */}
              <div className="single-news">
                <div className="news-head">
                  <img src={blog2} alt="#" />
                </div>
                <div className="news-body">
                  <div className="news-content">
                    <div className="date">15 Jul, 2020</div>
                    <h2>
                      <a href="blog-single.html">
                        Top five way for solving teeth problems.
                      </a>
                    </h2>
                    <p className="text">
                      Lorem ipsum dolor a sit ameti, consectetur adipisicing
                      elit, sed do eiusmod tempor incididunt sed do incididunt
                      sed.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Blog   */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Single Blog   */}
              <div className="single-news">
                <div className="news-head">
                  <img src={blog3} alt="#" />
                </div>
                <div className="news-body">
                  <div className="news-content">
                    <div className="date">05 Jan, 2020</div>
                    <h2>
                      <a href="blog-single.html">
                        We provide highly business soliutions.
                      </a>
                    </h2>
                    <p className="text">
                      Lorem ipsum dolor a sit ameti, consectetur adipisicing
                      elit, sed do eiusmod tempor incididunt sed do incididunt
                      sed.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Blog   */}
            </div>
          </div>
        </div>
      </section>
      {/* End Blog Area   */}

      {/* Start clients   */}
      <div className="clients overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="owl-carousel clients-slider">
                <div className="single-clients">
                  <img src={client1} alt="#" />
                </div>
                <div className="single-clients">
                  <img src={client2} alt="#" />
                </div>
                <div className="single-clients">
                  <img src={client3} alt="#" />
                </div>
                <div className="single-clients">
                  <img src={client4} alt="#" />
                </div>
                <div className="single-clients">
                  <img src={client5} alt="#" />
                </div>
                <div className="single-clients">
                  <img src={client1} alt="#" />
                </div>
                <div className="single-clients">
                  <img src={client2} alt="#" />
                </div>
                <div className="single-clients">
                  <img src={client3} alt="#" />
                </div>
                <div className="single-clients">
                  <img src={client4} alt="#" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Ens clients   */}

      {/* Start Appointment   */}
      <section className="appointment">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>We Are Always Ready to Help You. Book An Appointment</h2>
                <img src={sectionimg} alt="#" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  praesent aliquet. pretiumts
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <form className="form" action="#">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input name="name" type="text" placeholder="Name" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input name="email" type="email" placeholder="Email" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input name="phone" type="text" placeholder="Phone" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <div
                        className="nice-select form-control wide"
                        tabIndex="0"
                      >
                        <span className="current">Department</span>
                        <ul className="list">
                          <li data-value="1" className="option selected ">
                            Department
                          </li>
                          <li data-value="2" className="option">
                            Cardiac Clinic
                          </li>
                          <li data-value="3" className="option">
                            Neurology
                          </li>
                          <li data-value="4" className="option">
                            Dentistry
                          </li>
                          <li data-value="5" className="option">
                            Gastroenterology
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <div
                        className="nice-select form-control wide"
                        tabIndex="0"
                      >
                        <span className="current">Doctor</span>
                        <ul className="list">
                          <li data-value="1" className="option selected ">
                            Doctor
                          </li>
                          <li data-value="2" className="option">
                            Dr. Akther Hossain
                          </li>
                          <li data-value="3" className="option">
                            Dr. Dery Alex
                          </li>
                          <li data-value="4" className="option">
                            Dr. Jovis Karon
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input type="text" placeholder="Date" id="datepicker" />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        placeholder="Write Your Message Here....."
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-5 col-md-4 col-12">
                    <div className="form-group">
                      <div className="button">
                        <button type="submit" className="btn">
                          Book An Appointment
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-8 col-12">
                    <p>( We will be confirm by an Text Message )</p>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6 col-md-12 ">
              <div className="appointment-image">
                <img src={contactimg} alt="#" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Appointment   */}

      {/* Start Newsletter Area   */}
      <section className="newsletter section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              {/* Start Newsletter Text */}
              <div className="subscribe-text">
                <h6>Sign up for newsletter</h6>
                <p>
                  Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu,
                  <br /> homero alterum.
                </p>
              </div>
              {/* End Newsletter Text */}
            </div>
            <div className="col-lg-6 col-12">
              {/* Start Newsletter Form */}
              <div className="subscribe-form">
                <form onSubmit={handleSubmit} className="newsletter-inner">
                  <input
                    type="email"
                    name="EMAIL"
                    placeholder={placeholder}
                    className="common-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required
                  />
                  <button type="submit" className="btn">
                    Subscribe
                  </button>
                </form>
              </div>
              {/* End Newsletter Form */}
            </div>
          </div>
        </div>
      </section>
      {/* /End Newsletter Area   */}

    </>
  );
};
