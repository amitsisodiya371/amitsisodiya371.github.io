import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from 'react-icons/fa';
export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll)
    }, []);

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }

    const onResumeClick = () => {
        fetch("Amit Sisodiya Resume.pdf").then((response) => {
          response.blob().then((blob) => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "Amit Sisodiya Resume.pdf";
            alink.click();
          });
        });
      };
    return ( 
        <div id='nav-menu'>
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                    <Nav.Link className="nav-link home"  href='#home'>Amit Sisodiya</Nav.Link>
                   
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-icon'></span>

                </Navbar.Toggle>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                    
                        {/* <Nav.Link href='#' className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link> */}
                        <Nav.Link   href='#about' className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about-parent')}>About</Nav.Link>
                        <Nav.Link  href='#skills' className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link   href='#project-parent' className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project-parent')}>Projects</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a id="contact-github" href="https://github.com/amitsisodiya371" > <p><FaGithub className='img'/></p></a>
                            <a  id="contact-linkedin" href="https://www.linkedin.com/in/amit-sisodiya-a9b488205/" > <p><FaLinkedinIn className='img' /></p> </a>
                            <a href="https://twitter.com/amitSis99328470" > <p><FaTwitter className='img' /></p></a>
                            <a href="https://wa.me/919368155634"  ><p><FaWhatsapp className="img" /></p></a>
                        </div>
                        <button className='vvd'
                            onClick={() => console.log('connect')}>
                            <Nav.Link className="nav-link contact" id="contact" href='#form-parent' >Let's Connect</Nav.Link>
                        </button>
                        <button className="nav-link resume" id='resume-button-1' onClick={onResumeClick} type="button" >Resume</button>
                    </span>
                </Navbar.Collapse>

            </Container>

        </Navbar>
        </div>
    )
}