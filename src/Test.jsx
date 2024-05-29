import React from 'react';
import './App.css';
import './pages/Book.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from 'react-bootstrap'
import amazon from './assets/svg/amazon.svg'
import linkedin from './assets/svg/linkedin.svg'
import twitter from './assets/svg/twitter.svg'
import calendar from './assets/svg/calendar.svg'
import mail from './assets/svg/mail.svg'
import logo from './assets/images/CM-logo-1.png'
import list from './assets/svg/list.svg'
import book from './assets/images/book-1.png'
import BDLbook from './assets/images/Billion-Dollar-Lessons.png'
import NKAbook from './assets/images/The-New-Killer-Apps.png'
import forbes from './assets/images/forbes.png'
import cnbc from './assets/images/CNBC.png'
import npr from './assets/images/npr.png'
import harvard from './assets/images/harvard.png'
import splusb from './assets/images/s+b.png'
import tabImg from './assets/images/tab-img.png'
import { Row, Col} from 'react-bootstrap';
// import book2 from './assets/images/book-2.png'



function App() {
  return (
    <Container fluid className='background-image '>
      <div className="container-fluid background-opacity home">
        <Header />
        <MainSection />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Footer />
      </div>
    </Container>
  );
}

function Header() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <a href="#"><img src={linkedin} alt="LinkedIn" /></a>
          <a href="#"><img src={twitter} alt="Twitter" /></a>
          <a href="#"><img src={amazon} alt="Amazon" /></a>
        </div>
        <div className="col text-end me-3 head">
          <a href="#" className="calendar-icon-head pe-3 text-decoration-none text-light"><img src={calendar} alt="Calendar" /> Book For a Speaking Event</a>
          <a href="#" className="mail-icon-head text-decoration-none text-white"><img src={mail} alt="Mail" /> Email Kishan</a>
        </div>
      </div>
      <hr style={{ color: 'white' }} />
    </div>
  );
}

function MainSection() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <img className="logo w-50" src={logo} alt="Logo" />
          <img id="list-icon" onClick={showMenu} src={list} alt="List Icon" />
        </div>
        <div className="col">
          <Menu />
        </div>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="row">
      <div className="col mt-4 menu">
        <a href="./index.html" className="me-3 text-white text-decoration-none">HOME</a>
        <a href="./Book.jsx" className="me-3 text-white text-decoration-none">BOOKS</a>
        <a href="./about.html" className="me-3 text-white text-decoration-none">ABOUT</a>
        <a href="./contact.html" className="me-3 text-white text-decoration-none">CONTACT</a>
        <a href="./articles.html" className="me-3 text-white text-decoration-none">ARTICLES</a>
        <button className="btn bg-primary text-white">FREE EXPERT</button>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <section className="section-1">
      <div className="book-img">
        <img className="book-1" src={book} alt="Book" />
      </div>
      <div className="book-1-about">
        <h4 style={{ WebkitTextStroke: '2px rgb(255, 255, 255)', color: 'rgb(255, 255, 255)' }}>
          LATEST RELEASE <br /> BY KISHAN PRANAY
        </h4>
        <br />
        <div className="sec-1-text">
          <span style={{ WebkitTextStroke: '2px rgb(255, 247, 0)', color: 'rgb(255, 255, 0)', fontSize: '4rem', fontFamily: "'Dancing Script', cursive", width: '700px' }}>
            A Brief History Of a Perfect Future
          </span>
        </div>
        <b>
          <p style={{ color: 'white', fontFamily: 'sans-serif', fontSize: '1.5rem' }}>
            A few years ago, my daughter Zoe saw me referred to as a “futurist” and quipped, “Well, I hope you adults don’t mess mine up.” Ever since, I’ve been working on this book, which tries to address just that: How can we “adults” build a future that we can proudly leave to our kids?
          </p>
        </b>
        <button id="learn-more" className="btn bg-primary text-white">LEARN MORE</button>
      </div>
    </section>
  );
}

function Section2() {
  return (
    // <section className="section-2 bg-light pt-5 container-fluid " style={{flexWrap: 'wrap'}}>
      <div className="section-2-div-1" style={{ display: 'flex',}}>
        <div className="sec-2 ms-4" style={{ maxWidth: '60%'}}>
          <b>
            <span style={{ color: 'rgb(208, 37, 191)', fontFamily: 'Poetsen One', fontSize: '2rem' }}>KISHAN PRANAY</span>
          </b>
          <br />
          <span style={{ fontSize: '4rem', fontFamily: 'Poetsen One' }}>
            FUTURIST & INNOVATION ADVISOR
          </span>
          <p style={{border: '5px solid purple', width: '30vw'}}></p>
          <p className="sec-2-para" style={{ maxWidth: '80%', marginTop: '5%', fontFamily: "'Times New Roman'" }}>
            I help individuals and organizations pursue innovation at the intersection of purpose, advantage and societal need.
          </p>
          <span style={{ fontSize: '4rem', fontFamily: 'Poetsen One' }}>AS FEATURED ON</span>
          <br /><br />
          <FeaturedOn />
        </div>
        <div className="sec-2-col-2" style={{ backgroundColor: 'rgb(255, 255, 255)', width: '35%', textAlign: 'center', marginTop: '-10%', flexWrap: 'wrap'}}>
          <b><span style={{ paddingTop: '10%' }}>START READING NOW</span></b>
          <br />
          <h1>GET 3 FREE CHAPTERS</h1>
          <br />
          <a href="#"><img style={{width: 'auto', height: '50vh' }} className="tab-img" src={tabImg} alt="Tablet" /></a>
          <br /><br />
          <SignUpForm />
        </div>
      </div>
    // </section>
  );
}

function FeaturedOn() {
  return (
    <div className="container">
      <a href="#"><img src={forbes} alt="Forbes" /></a>
      <a href="#"><img src={cnbc} alt="CNBC" /></a>
      <a href="#"><img src={npr} alt="NPR" /></a>
      <a href="#"><img src={harvard} alt="Harvard" /></a>
      <a href="#"><img src={splusb} alt="s+b" /></a>
    </div>
  );
}

function SignUpForm() {
  return (
    <form action="#" className='read-sign-up'>
      <input type="text" className="form-control" name="name" placeholder="Name" required />
      <br />
      <input type="email" className="form-control" name="mail" placeholder="Email Address" required />
      <br />
      <input type="submit" className="btn bg-primary text-white ps-5 pe-5" name="Submit" id="submit" />
    </form>
  );
}

function Section3() {
  return (
    <section className="section-3">
      <div className="container-fluid text-center mb-5">
        <b><h5 className="container pt-4" style={{ fontFamily: 'mono', color: 'rgb(156, 53, 53)', WebkitTextStroke: '2px rgb(150, 79, 149)' }}>INNOVATION AND STRATEGY</h5></b>
        <br /><h1 className="container text-center pb-4" style={{ borderBottom: '4px solid rgb(147, 109, 154)', width: '150px', color: 'rgb(132, 255, 0)' }}>BOOKS</h1>
      </div>
      <Books />
      <div className="container-fluid text-center mt-5 pb-4">
        <button className="btn bg-success text-white">VIEW ALL BOOKS</button>
      </div>
    </section>
  );
}

function Books() {
  const books = [
    {
      src: BDLbook,
      alt: "Book 1",
      text: "“A positive and optimistic view of our future, grounded in science, technology, facts and the lessons of history. It is both inspirational and aspirational.”",
      link: "#"
    },
    {
      src: BDLbook,
      alt: "Book 2",
      text: "“This engaging book demonstrates how even very smart people can make very bad mistakes—and how we can learn from them and so avoid the same fate.”",
      link: "#"
    },
    {
      src: NKAbook,
      alt: "Book 3",
      text: "“Chunka Mui and Paul Carroll want to take us back to the roots of business success: running an organization that fosters continuous innovation.”",
      link: "#"
    },
  ];

  return (
    <div className="container text-center">
      <div className="row">
        {books.map((book, index) => (
          <div className="col-md-4 col-12" key={index}>
            <div className="card p-2">
              <img className="card-img-top w-100" src={book.src} alt={book.alt} />
              <p className="card-body">{book.text}</p>
              <a href={book.link} className="card-link">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Section4() {
  return (
    <section className="section-4 bg-light ">
      <div className="row pt-5 pb-5" style={{flexWrap: 'wrap'}}>
        <div className="col text-center">
          <img className="w-25" src="https://chunkamui.com/wp-content/uploads/2021/07/Chunka-Mui-Speaker.png" alt="Book 2" /><br />
          <h2 className='text-dark'>Speaker</h2><br />
          <p className='text-dark'>Engaging insight and essential tools to proactively embrace the future.</p><br />
          <button className="btn bg-primary text-white">LEARN MORE</button>
        </div>
        <div className="col text-center">
          <img className="w-25" src="https://chunkamui.com/wp-content/uploads/2021/07/Chunka-Mui-Speaker.png" alt="Book 2" /><br />
          <h2 className='text-dark'>Advisor</h2><br />
          <p className="text-dark">Aggressive yet pragmatic design and stress testing of innovation strategies.</p><br />
          <button className="btn bg-primary text-white">LEARN MORE</button>
        </div>
        <div className="col text-center">
          <img className="w-25" src="https://chunkamui.com/wp-content/uploads/2021/07/Chunka-Mui-Speaker.png" alt="Book 2" /><br />
          <h2 className='text-dark'>Author</h2><br />
          <p className="text-dark">Five books and hundreds of articles written about strategy and innovation.</p><br />
          <button className="btn bg-primary text-white">LEARN MORE</button>
        </div>
      </div>
    </section>
  );
}

function Section5() {
  const chunkaImg1 = {
    width: '50vw',
    height: '70vh',
    position: 'relative'
  }
  const chunkaImg2 = {
    width: '20vw',
    height: '50vh',
    position: 'absolute',
    left: '30vw',
    top: '-5vh',
    border: '10px solid yellow'
  }
  return (
    <section className="section-5 pt-5 pb-5 text-center">
      <Row>
      <Col className="section-5-content text-start ps-5">
        <h4 className="text-dark">ABOUT THE AUTHOR</h4>
        <h1 className="text-dark" style={{ fontFamily: 'Poetsen One' }}>KISHAN PRANAY</h1>
        <p className="text-success">I’m a futurist and advisor on strategy and innovation trying to help invent the world we can proudly leave to my kids—and yours. I was born in Hong Kong, raised on the South Side of Chicago, and now live in (and zoom from) the Champlain Valley of Western Vermont.</p>
      </Col>
      
      <Col style={chunkaImg1}>
        <img style={chunkaImg1} src="https://chunkamui.com/wp-content/uploads/2023/10/presenting.jpg" alt="" />
        <img style={chunkaImg2} src="https://chunkamui.com/wp-content/uploads/2023/10/presenting5.jpg" alt="" />
      </Col>
      </Row>
      <br />
      <button className="btn bg-primary text-white">VIEW ALL BOOKS</button>
    </section>
  );
}

function Section6() {
  return (
    <section className="section-6 pt-5">
      <div className="container-fluid text-center mb-5">
        <b><h5 className="container pt-4" style={{ fontFamily: 'mono', color: 'rgb(156, 53, 53)', WebkitTextStroke: '2px rgb(150, 79, 149)' }}>INNOVATION AND STRATEGY</h5></b>
        <br /><h1 className="container text-center pb-4" style={{ borderBottom: '4px solid rgb(147, 109, 154)', width: '150px', color: 'rgb(132, 255, 0)' }}>ARTICLES</h1>
      </div>
      <Articles />
      <div className="container-fluid text-center mt-5 pb-4">
        <button className="btn bg-success text-white">VIEW ALL ARTICLES</button>
      </div>
    </section>
  );
}

function Articles() {
  const articles = [
    {
      title: "Can Amazon Beat Tesla?",
      date: "May 12, 2023",
      image: "images/img1.jpg",
      link: "#"
    },
    {
      title: "How to Improve Amazon’s HQ2?",
      date: "May 12, 2023",
      image: "images/img2.jpg",
      link: "#"
    },
    {
      title: "Lessons From Zappos",
      date: "May 12, 2023",
      image: "images/img3.jpg",
      link: "#"
    }
  ];

  return (
    <div className="container text-center">
      <div className="row">
        {articles.map((article, index) => (
          <div className="col-md-4 col-12" key={index}>
            <div className="card">
              <img className="card-img-top" src={article.image} alt={article.title} />
              <div className="card-body">
                <a href={article.link}><h3>{article.title}</h3></a>
                <p>{article.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Section7() {
  return (
    <section className="section-7">
      <div className="section-7-content">
        <div className="row">
          <div className="col-md-6 col-12">
            <img className="w-50" src="images/book-3.png" alt="Book 3" />
          </div>
          <div className="col-md-6 col-12">
            <h1 className="text-white" style={{ fontFamily: 'Poetsen One' }}>REACH FOR</h1>
            <h3 className="text-white">The Stars</h3>
            <p className="text-white">A sweeping yet concise examination of our history, filled with powerful ideas and actionable insights.</p>
            <button className="btn bg-primary text-white">LEARN MORE</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer pt-5 pb-5">
      <div className="container text-center">
        <img className="logo" src="https://chunkamui.com/wp-content/uploads/2021/07/CM-logo-1.png" alt="Logo" />
        <hr />
        <FooterLinks />
        <SocialIcons />
      </div>
    </footer>
  );
}

function FooterLinks() {
  return (
    <div className="footer-links">
      <a href="./index.html" className="me-3 text-decoration-none text-white">HOME</a>
      <a href="./books.html" className="me-3 text-decoration-none text-white">BOOKS</a>
      <a href="./about.html" className="me-3 text-decoration-none text-white">ABOUT</a>
      <a href="./contact.html" className="me-3 text-decoration-none text-white">CONTACT</a>
      <a href="./articles.html" className="me-3 text-decoration-none text-white">ARTICLES</a>
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="social-icons">
      <a href="#"><img className="logo" src="books-svg/linkedin.svg" alt="LinkedIn" /></a>
      <a href="#"><img className="logo" src="books-svg/twitter.svg" alt="Twitter" /></a>
      <a href="#"><img className="logo" src="books-svg/amazon.svg" alt="Amazon" /></a>
    </div>
  );
}

function showMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}

export default App;
