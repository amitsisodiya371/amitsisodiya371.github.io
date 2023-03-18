import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";


                                        //     class="button-82-front text" style="background-color:#25d366 ;">
                                        //     <span><i class="fa-brands fa-whatsapp"
                                        //             style="color:white; font-size: 20px;"></i> Whatsapp</span>
                                        // </a>
export const Footer = () => {
    return (
        <>
            <div id="footer-parent">
                <div id="footer">
                    <div id="icons">
                        <a href="https://github.com/amitsisodiya371" id="ref"><FaGithub className="footer-icons" /></a>
                        <a href="https://linkedin.com/in/amit-sisodiya-a9b488205" id="ref"><FaLinkedinIn className="footer-icons" /> </a>
                        <a href="https://twitter.com/amitSis99328470" id="ref"><FaTwitter className="footer-icons" /></a>
                        <a href="https://wa.me/919368155634"  id="ref"><FaWhatsapp className="footer-icons" /></a>
                    </div>
                    <br />
                    <h3>Made By <span style={{color:"red"}}><AiFillHeart/> </span> Amit Sisodiya</h3>

                </div>
            </div>
        </>
    )
}