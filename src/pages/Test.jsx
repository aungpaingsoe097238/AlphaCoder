import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Test = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zpj6fom",
        "template_7ig565q",
        form.current,
        "soR96ieOcIAK5CjJJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('success')
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Your Email</label>
      <input type="email" name="from_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Test;
