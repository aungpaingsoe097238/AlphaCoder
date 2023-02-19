import React from "react";

const Contact = () => {
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="flex gap-3">
        <div className="basis-1/2">
          <div>
            
          </div>
        </div>
        <div className=" basis-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207446.97305237717!2d139.6007814386439!3d35.668162526139774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b857628235d%3A0xcdd8aef709a2b520!2sTokyo%2C%20Japan!5e0!3m2!1sen!2smm!4v1676818820609!5m2!1sen!2smm"
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
