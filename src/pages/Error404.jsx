import React, { useState } from "react";

//////////////// import CSS /////////////////////
import "../css/animate.min.css";
import "../css/datepicker.css";
import "../css/bootstrap.min.css"
import "../css/font-awesome.min.css";
import "../css/icofont.css";
import "../css/magnific-popup.css";
import "../css/nice-select.css";
import '../css/normalize.css'
import "../css/owl-carousel.css";
import "../css/responsive.css";
import "../css/slicknav.min.css";
import "../css/style.css";

//////////////  CSS end /////////////////////

export const Error = () => {
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
      {/* Error Page  */}
      <section class="error-page section">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 offset-lg-3 col-12">
              {/* Error Inner  */}
              <div class="error-inner">
                <h1>
                  404<span>Oop's sorry we can't find that page!</span>
                </h1>
                <p>
                  Aenean eget sollicitudin lorem, et pretium felis. Nullam
                  euismod diam libero, sed dapibus leo laoreet ut. Suspendisse
                  potenti. Phasellus urna lacus
                </p>
                <form class="search-form">
                  <input placeholder="Search from Here" type="text" />
                  <button class="btn" type="submit">
                    <i class="fa fa-search"></i>
                  </button>
                </form>
              </div>
              {/* End Error Inner  */}
            </div>
          </div>
        </div>
      </section>
      {/* End Error Page  */}
    </>
  );
};
