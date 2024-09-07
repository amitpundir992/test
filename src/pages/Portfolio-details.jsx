 
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
export const Portfolio=() =>{

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
     

  
    
   {/* Breadcrumbs */}
		<div className="breadcrumbs overlay">
			<div className="container">
				<div className="bread-inner">
					<div className="row">
						<div className="col-12">
							<h2>Portfolio Details</h2>
							<ul className="bread-list">
								<li><a href="index.html">Home</a></li>
								<li><i className="icofont-simple-right"></i></li>
								<li className="active">Portfolio Details</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		  {/* End Breadcrumbs */}
	
		  {/* Start Portfolio Details Area */}
		<section className="pf-details section">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="inner-content">
							<div className="image-slider">
								<div className="pf-details-slider">
									<img src="img/call-bg.jpg" alt="#" />
									<img src="img/call-bg.jpg" alt="#" />
									<img src="img/call-bg.jpg" alt="#" />
								</div>
							</div>
							<div className="date">
								<ul>
									<li><span>Category :</span> Heart Surgery</li>
									<li><span>Date :</span> April 20, 2019</li>
									<li><span>Client :</span> Suke Agency</li>
									<li><span>Ags :</span> Typo</li>
								</ul>
							</div>
							<div className="body-text">
								<h3>Here is the name of this project here</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor a ti incididunt ut labore et dolore to in magna aliqua. Ut enim ad minim veniam, quis to the in nostrud.abore et dolore magna aliqua uis nostrud.Lorem ipsum dolor sit amet, in a in to in a consectetur.ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis to the in nostrud.abore et dolore magna in a aliqua uis nostrud.Lorem ipsum dolor sit amet, in aed do eiusmod</p>
								<p>ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis to the in nostrud.abore et dolore magna to in aliqua uis nostrud.Lorem ipsum dolor sit amet, in aed do eiusmod.ncididunt ut labore et dolore magna aliqua. </p>
								<p>ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis to the in nostrud.abore et dolore magna a aliqua uis nostrud.Lorem ipsum dolor sit amet, in aed do eiusmod.ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis to the in nostrud.abore et dolore magna aliqua uis nostrud.Lorem ipsum dolor sit amet, in aed do eiusmod. dolor sit amet, in aed do eiusmod.ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis to the in nostrud.abore et dolore magna aliqua uis nostrud.</p>
								<div className="share">
									<h4>Share Now -</h4>
									<ul>
										<li><a href="#"><i className="fa fa-facebook-official" aria-hidden="true"></i></a></li>
										<li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
										<li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		  {/* End Portfolio Details Area */}
    
     
    
      {/* jquery Min JS   */}
    <script src="js/jquery.min.js"></script>
      {/* jquery Migrate JS   */}
    <script src="js/jquery-migrate-3.0.0.js"></script>
      {/* jquery Ui JS   */}
    <script src="js/jquery-ui.min.js"></script>
      {/* Easing JS   */}
    <script src="js/easing.js"></script>
      {/* Color JS   */}
    <script src="js/colors.js"></script>
      {/* Popper JS   */}
    <script src="js/popper.min.js"></script>
      {/* Bootstrap Datepicker JS   */}
    <script src="js/bootstrap-datepicker.js"></script>
      {/* Jquery Nav JS   */}
    <script src="js/jquery.nav.js"></script>
      {/* Slicknav JS   */}
    <script src="js/slicknav.min.js"></script>
      {/* ScrollUp JS   */}
    <script src="js/jquery.scrollUp.min.js"></script>
      {/* Niceselect JS   */}
    <script src="js/niceselect.js"></script>
      {/* Tilt Jquery JS   */}
    <script src="js/tilt.jquery.min.js"></script>
      {/* Owl Carousel JS   */}
    <script src="js/owl-carousel.js"></script>
      {/* counterup JS   */}
    <script src="js/jquery.counterup.min.js"></script>
      {/* Steller JS   */}
    <script src="js/steller.js"></script>
      {/* Wow JS   */}
    <script src="js/wow.min.js"></script>
      {/* Magnific Popup JS   */}
    <script src="js/jquery.magnific-popup.min.js"></script>
      {/* Counter Up CDN JS   */}
    <script src="http://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js"></script>
      {/* Bootstrap JS   */}
    <script src="js/bootstrap.min.js"></script>
      {/* Main JS   */}
    <script src="js/main.js"></script>
 
     </>
  )
}
