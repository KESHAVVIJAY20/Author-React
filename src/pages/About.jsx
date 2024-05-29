// Filename - pages/about.js

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import amazon from '../assets/svg/amazon.svg'
import linkedin from '../assets/svg/linkedin.svg'
import twitter from '../assets/svg/twitter.svg'
import calendar from '../assets/svg/calendar.svg'
import mail from '../assets/svg/mail.svg'
import logo from '../assets/images/CM-logo-1.png'
import book from '../assets/images/book-1.png'
import BDLbook from '../assets/images/Billion-Dollar-Lessons.png'



import { Container, Row, Col } from "react-bootstrap";
import '../styling/About.css'

function About(){
	return (
		<Container fluid className="p-0 bgImg Header-bg">
			<Header/>
			<MainSection/>
			<Content/>
			<InnovationAndStrategy/>
			<Footer/>
		</Container>
	);
};

const Header = () => {
    return (
      <Container fluid >
        <Row>
          <Col>
            <a href="#"><img src={linkedin} alt="LinkedIn" /></a>
            <a href="#"><img src={twitter} alt="Twitter" /></a>
            <a href="https://www.amazon.com"><img src={amazon} alt="Amazon" /></a>
          </Col>
          <div className="col text-end">
            <a href="#" className="calendar-icon-head pe-3 text-decoration-none text-light"><img src={calendar} alt="Calendar" /> Book For a Speaking Event</a>
            <a href="#" className="mail-icon-head text-decoration-none text-white"><img src={mail} alt="Mail" /> Email Kishan</a>
          </div>
        </Row>
        <hr style={{ color: 'white' }} />
      </Container>
    );
  }
  function MainSection() {
	return (
		<Container fluid>
		<Row>
			<Col>
			<img className="logo w-50 ms-5 mt-4" src={logo} alt="Logo" />
			{/* <img id="list-icon" onClick={showMenu} src={list} alt="List Icon" /> */}
			</Col>
			<Col>
			<Menu />
			</Col>
			<h1 className="mt-5 text-light" style={{fontSize:'5rem', textAlign:'center'}}>ABOUT</h1>

		</Row>
		</Container>
	);
	}
	function Menu() {
		return (
		  <div>
			<div>
			<Row>
			<Col className="mt-5 pt-2 menu">
			  <a href="./index.html" className="me-3 text-white text-decoration-none">HOME</a>
			  <a href="./Book.jsx" className="me-3 text-white text-decoration-none">BOOKS</a>
			  <a href="./about.html" className="me-3 text-white text-decoration-none">ABOUT</a>
			  <a href="./contact.html" className="me-3 text-white text-decoration-none">CONTACT</a>
			  <a href="./articles.html" className="me-3 text-white text-decoration-none">ARTICLES</a>
			  {/* <button className="btn bg-primary text-white">FREE EXPERT</button> */}
			</Col>
		  </Row>
		  </div>
		  </div>
		  
		);
	  }
function Content(){
	return (
		<div className="container-fluid bg-light pt-5">
      <div className="container">
        <h5 className="text-default fs-2"><strong>ABOUT</strong></h5>
        <h1 className="text-primary">KISHAN PRANAY</h1>
        <p className="font-family">
          Chunka Mui, a futurist and innovation advisor, believes we stand at the forefront of the greatest personal and professional opportunity of our time. His optimistic work, captured in his latest book, 
          <a href="#" className="text-decoration-none">“A Brief History of a Perfect Future: Inventing the World We Can Proudly Leave Our Kids by 2050”</a>, 
          dives into the immense possibilities of science, technology, and human creativity. This book is a roadmap to a future filled with health, sustainability, and prosperity.
        </p>
        <p className="font-family">
          With a career spanning several prestigious advisory firms, where he has advised hundreds of companies and studied thousands more, Chunka’s insights are rooted in real-world experience. At Diamond Management and Technology Consultants (now part of PwC), he served as a managing partner and chief innovation officer. At CSC Index (now part of DXC Technology), Chunka co-founded the Vanguard emerging technologies research program (now TTI Vanguard). His journey began at Andersen Consulting (now Accenture), where he played a pivotal role in that firm’s Artificial Intelligence group and co-founded its Center for Strategic Technology Research (a precursor to Accenture Labs).
        </p>
        <p className="font-family">
          Chunka’s voice has resonated through the pages of numerous leading publications, including 
          <a href="#" className="text-decoration-none">Forbes</a>, 
          <a href="#" className="text-decoration-none">Harvard Business Review</a>, and MIT Technology Review. He has co-authored four other award-winning books, including “Unleashing the Killer App” and 
          <a href="#" className="text-decoration-none">Billion-Dollar Lessons</a>. He also publishes the 
          <a href="#" className="text-decoration-none">Future Perfect Newsletter</a>, available via LinkedIn.
        </p>
        <p className="pb-5 mb-0 font-family">
          An MIT alumnus, Chunka’s academic background in computer science and engineering laid the foundation for his groundbreaking work. His life journey, from his birth in Hong Kong to his upbringing in Chicago, and his current home in the serene Champlain Valley of Western Vermont, informs the diverse perspectives he brings to his work.
        </p>
      </div>
    </div>
	)
}

function InnovationAndStrategy(){
	return(
		<div className="bg-light">
			<div className="container-fluid bg-sec-2 pt-5">
		<strong>
			<p className="text-center text-danger fs-5">INNOVATION AND STRATEGY</p>
		</strong>
		<h1 className="text-center">BOOKS</h1>
		{/* <p className="text-center custom-border-bottom"></p> */}
		<div className="container-fluid ms-5 book-parent">
			<div className="row pb-5 books">
			{Array(8).fill().map((_, index) => (
				<div className="col me-5 pe-5" key={index}>
				<img className="book-img" src={BDLbook} alt="Book cover" />
				<p>“A positive and optimistic view of our future, grounded in science, technology, facts and the lessons of history. It is both inspirational and aspirational.”</p>
				</div>
			))}
			</div>
		</div>
		</div>

		</div>
		)
}


	  function Footer() {
		return (
		  <div className="container-fluid pb-3" style={{backgroundColor:'rgb(27, 27, 118)'}}>
			<Row>
			  <Col className="mt-5 ms-4">
				<img className="footer-img" src={logo} alt="" />
				<br />
				<p className="text-white ms-4 mt-4">Futurist and Innovation Advisor</p>
				<br />
				<SocialIcons/>
			  </Col>
			  <Col className="mt-5 ms-4 ">
				<h3 className="text-warning">Quick Links</h3>
				<FooterLinks/>
			  </Col>
			  <div className="col mt-5 ms-4">
				<h3 className="text-warning">Contact</h3>
				<div>
				  <a href="#" className="text-decoration-none text-white">Sign Up</a>
				  <br />
				  <br />
				  <a href="#" className="text-decoration-none text-white">
					<img src={mail} alt="Mail" /> Email KISHAN
				  </a>
				  <br />
				  <br />
				  <a href="#" className="text-decoration-none text-white">
					<img src={calendar} alt="Calendar" /> Book For a Speaking Event
				  </a>
				</div>
			  </div>
			</Row>
			<hr style={{ color: 'white' }} />
			<p className="text-white pb-4">Kishan Pranay Copyright © 2024</p>
		  </div>
		);
	  }
	  
	  function FooterLinks() {
		return (
		  <div className="footer-links">
			<a href="./index.html" className="me-3 text-decoration-none text-white">HOME</a><br /><br />
			<a href="./books.html" className="me-3 text-decoration-none text-white">BOOKS</a><br /><br />
			<a href="./about.html" className="me-3 text-decoration-none text-white">ABOUT</a><br /><br />
			<a href="./contact.html" className="me-3 text-decoration-none text-white">CONTACT</a><br /><br />
			<a href="./articles.html" className="me-3 text-decoration-none text-white">ARTICLES</a><br /><br />
		  </div>
		);
	  }
	  
	  function SocialIcons() {
		return (
		  <div className="social-icons">
			<a href="#"><img className="me-4 ms-4"  src={linkedin} alt="LinkedIn" /></a>
			<a href="#"><img className="me-4" src={twitter} alt="Twitter" /></a>
			<a href="#"><img className="me-4" src={amazon} alt="Amazon" /></a>
		  </div>
		);
	  }

export default About;
