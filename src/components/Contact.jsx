import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
// import styled from "styled-components";
// import icona from "./../images/mailgif/icon-animation.gif"

// npm i @emailjs/browser

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3i7uz1a",
        "template_xx2i5hn",
        form.current,
        "3XfI1TIY1R9WCNooo"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="form-parent">
      <h1>Lets's Connect</h1>

      <div id="c-parent">
        <div>
          {/* <img id="icona" src={icona} alt="email box image" /> */}
          <img id="icona" src="https://www.somaiya.edu.in/assets/university/img/hostel/contact.svg" alt="email box" />
        </div>
        <div id="child">
          <form ref={form} onSubmit={sendEmail} id="form">
            <p>Name</p>
            <input type="text" name="user_name" />
            <p>Enter Email</p>
            <input type="email" name="user_email" />
            <p>Message</p>
            <textarea name="message" /> <br />
            <input type="submit" id="button" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};


