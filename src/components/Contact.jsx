import React from "react";
import Title from "../components/utli/Title";
import { GrSend } from "react-icons/gr";

const Contact = () => {
  return (
    <>
      <div
        className="my-5 md:my-0 md:h-screen flex flex-col justify-center contact "
        id="contact"
      >
        <Title title="Contact" subTitle="Get in touch with me" />
        <span className="my-5"></span>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="basis-1/2">
            {/* Contact Form */}
            <div className="flex flex-col gap-3">
              <div>
                <label for="name" class="label">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="input-text "
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
                  className="input-text "
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
                  className="input-text "
                  placeholder="Write your thoughts here..."
                ></textarea>
              </div>
              <div className=" w-full text-center">
                <button
                  className="border border-slate-500 text-slate-500 p-3 active:bg-slate-700 active:text-white"
                  role="button"
                >
                  <div className="flex gap-2">Send Message</div>
                </button>
              </div>
            </div>
            {/* Contact Form */}
          </div>
          <div className=" basis-1/2">
            <iframe
              className=" grayscale-[90%] "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61079.47671080627!2d96.06268790637493!3d16.9022264047699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c195ce696dd4f7%3A0x8e6136e36e0ca442!2sInsein%20Township%2C%20Yangon!5e0!3m2!1sen!2smm!4v1683645616545!5m2!1sen!2smm"
              width="100%"
              height="450"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
