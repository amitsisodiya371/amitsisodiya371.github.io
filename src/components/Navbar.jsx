import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
// import { Link } from 'react-bootstrap-icons';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import {Link} from "react-router-dom"
import resume from '../images/Resume/Amit Sisodiya Resume.pdf';
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

    const onUpdateActiveLk = () =>{
        setActiveLink({resume});
        
    }
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>

                {/* <Navbar.Brand href="/home"> */}
                    <Nav.Link href='#home'>Amit Sisodiya</Nav.Link>
                    {/* <Nav.Link href='#about-parent'>About</Nav.Link> */}
                {/* <Nav.Link style={{color:"whitesmoke"}} to='/home' className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}>Dilasa Thapa</Nav.Link> */}
                    {/* <Nav.Link style={{color:"whitesmoke"}} to='/home' className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Dilasa Thapa</Nav.Link> */}
                {/* </Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-icon'></span>

                </Navbar.Toggle>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                    
                        {/* <Nav.Link href='#' className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link> */}
                        <Nav.Link href='#about-parent' className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about-parent')}>About</Nav.Link>
                        <Nav.Link href='#skills' className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href='#project-parent' className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project-parent')}>Projects</Nav.Link>
                        {/* <Nav.Link href='#Resume'  className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLk('project-parent')}>resume</Nav.Link> */}

                        <a href='https://drive.google.com/file/d/1nloSv0G47c7bgRwZwYxrxlvgr4TfJHtZ/view?usp=sharing' target='_blank' id="resume-link-1">
                         <button id='resume' type="button" >Resume</button>
                         </a>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href="https://github.com/amitsisodiya371" > <p><FaGithub className='img'/></p></a>
                            <a href="https://linkedin.com/in/amit-sisodiya-a9b488205/" > <p><FaLinkedinIn className='img' /></p> </a>
                            <a href="https://twitter.com/amitSis99328470" > <p><FaTwitter className='img' /></p></a>
                             
                        </div>
                        <button className='vvd'
                            onClick={() => console.log('connect')}>
                            <span><Nav.Link href='#form-parent'>Let's Connect</Nav.Link></span>
                        </button>
                    </span>

                </Navbar.Collapse>

            </Container>

        </Navbar>
    )
}