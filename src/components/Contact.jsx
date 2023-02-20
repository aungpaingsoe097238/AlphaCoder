import React from "react";
import Title from "../components/utli/Title";
import { GrSend } from "react-icons/gr";

const Contact = () => {
  return (
    <div className=" h-screen flex flex-col justify-center contact" id="contact">
      <Title title="Contact" subTitle="Get in touch with me" />
      <span className="my-5"></span>
      <div className="flex gap-5">
        <div className="basis-1/2">
          {/* Contact Form */}
          <div className=" flex flex-col gap-3">
            <div>
              <label for="name" class="label">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="write-style"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label for="email" class="label">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="write-style"
                placeholder="John@example.com"
                required
              />
            </div>
            <div>
              <label for="message" class="label">
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                className="write-style"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
            <div className=" w-full text-center">
              <button className="button-55 active:bg-slate-200" role="button">
                <div className=" flex gap-2">
                  <GrSend className=" text-xl" /> Send Message
                </div>
              </button>
            </div>
          </div>
          {/* Contact Form */}
        </div>
        <div className=" basis-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7496.4794559903685!2d140.02019976208075!3d35.72771209020153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60227ff1024555dd%3A0x2d04a09a512d4490!2sSHISUKA!5e0!3m2!1sen!2smm!4v1676869014695!5m2!1sen!2smm"
            width="100%"
            height="450"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
