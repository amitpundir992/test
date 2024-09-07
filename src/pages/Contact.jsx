 
import React, { useState } from 'react'
//////////////// import CSS /////////////////////
import '../css/animate.css'
import '../css/datepicker.css'
import '../css/font-awesome.min.css'
import '../css/icofont.css'
import '../css/magnific-popup.css'
import '../css/nice-select.css'
// import '../css/normalize.css'
import '../css/owl-carousel.css'
import '../css/responsive.css'
import '../css/slicknav.min.css'
import '../css/style.css'

//////////////  CSS end /////////////////////

//import images
import logo from "../img/logo.png"
import slider2 from "../img/slider2.jpg"
import slider3 from "../img/slider3.jpg"
import sectionimg from "../img/section-img.png"
import pf1 from "../img/pf1.jpg"
import pf2 from "../img/pf2.jpg"
import pf3 from "../img/pf3.jpg"
import pf4 from "../img/pf4.jpg"
import blog1 from "../img/blog1.jpg"
import blog2 from "../img/blog2.jpg"
import blog3 from "../img/blog3.jpg"
import client1 from "../img/client1.png"
import client2 from "../img/client2.png"
import client3 from "../img/client3.png"
import client4 from "../img/client4.png"
import client5 from "../img/client5.png"
import contactimg from "../img/contact-img.png"

/////////////// IMAGE IMPORT END //////////////////
export const Contact=() =>{

    const [email, setEmail] = useState('');
    const [placeholder, setPlaceholder] = useState('Your email address');

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        // Add your form submission logic here, e.g., sending the email to a server
        console.log('Form submitted with email:', email);
    };

    const handleFocus = () => {
        setPlaceholder(''); // Clear placeholder on focus
    };

    const handleBlur = () => {
        setPlaceholder('Your email address'); // Reset placeholder on blur
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
								<li><a href="index.html">Home</a></li>
								<li><i className="icofont-simple-right"></i></li>
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
								<p>If you have any questions please fell free to contact with us.</p>
							 {/* Form  */}
								<form className="form" method="post" action="mail/mail.php">
									<div className="row">
										<div className="col-lg-6">
											<div className="form-group">
												<input type="text" name="name" placeholder="Name" required="" />
											</div>
										</div>
										<div className="col-lg-6">
											<div className="form-group">
												<input type="email" name="email" placeholder="Email" required="" />
											</div>
										</div>
										<div className="col-lg-6">
											<div className="form-group">
												<input type="text" name="phone" placeholder="Phone" required="" />
											</div>
										</div>
										<div className="col-lg-6">
											<div className="form-group">
												<input type="text" name="subject" placeholder="Subject" required="" />
											</div>
										</div>
										<div className="col-lg-12">
											<div className="form-group">
												<textarea name="message" placeholder="Your Message" required="" ></textarea>
											</div>
										</div>
										<div className="col-12">
											<div className="form-group login-btn">
												<button className="btn" type="submit">Send</button>
											</div>
											<div className="checkbox">
												<label className="checkbox-inline" for="2"><input name="news" id="2" type="checkbox" />Do you want to subscribe our Newsletter ?</label>
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
  
    
    
    
    
      {/* jquery Min JS  */}
        <script src="js/jquery.min.js"></script>
		 {/* jquery Migrate JS  */}
		<script src="js/jquery-migrate-3.0.0.js"></script>
		 {/* jquery Ui JS  */}
		<script src="js/jquery-ui.min.js"></script>
		 {/* Easing JS  */}
        <script src="js/easing.js"></script>
		 {/* Color JS  */}
		<script src="js/colors.js"></script>
		 {/* Popper JS  */}
		<script src="js/popper.min.js"></script>
		 {/* Bootstrap Datepicker JS  */}
		<script src="js/bootstrap-datepicker.js"></script>
		 {/* Jquery Nav JS  */}
        <script src="js/jquery.nav.js"></script>
		 {/* Slicknav JS  */}
		<script src="js/slicknav.min.js"></script>
		 {/* ScrollUp JS  */}
        <script src="js/jquery.scrollUp.min.js"></script>
		 {/* Niceselect JS  */}
		<script src="js/niceselect.js"></script>
		 {/* Tilt Jquery JS  */}
		<script src="js/tilt.jquery.min.js"></script>
		 {/* Owl Carousel JS  */}
        <script src="js/owl-carousel.js"></script>
		 {/* counterup JS  */}
		<script src="js/jquery.counterup.min.js"></script>
		 {/* Steller JS  */}
		<script src="js/steller.js"></script>
		 {/* Wow JS  */}
		<script src="js/wow.min.js"></script>
		 {/* Magnific Popup JS  */}
		<script src="js/jquery.magnific-popup.min.js"></script>
		 {/* Counter Up CDN JS  */}
		<script src="http://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js"></script>
		 {/* Google Map API Key JS  */}
		<script src="https://maps.google.com/maps/api/js?key=AIzaSyDGqTyqoPIvYxhn_Sa7ZrK5bENUWhpCo0w"></script>
		 {/* Gmaps JS  */}
		<script src="js/gmaps.min.js"></script>
		 {/* Map Active JS  */}
		<script src="js/map-active.js"></script>
		 {/* Bootstrap JS  */}
		<script src="js/bootstrap.min.js"></script>
		 {/* Main JS  */}
		<script src="js/main.js"></script>
 
     </>
  )
}
