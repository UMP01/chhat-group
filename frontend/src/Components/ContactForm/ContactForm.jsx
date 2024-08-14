import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="p-4 max-w-xl mx-auto">
      <h3 className="text-2xl primary-color my-5">Get In Touch Now</h3>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              id="fullname"
              name="txtFullname"
              placeholder="Fullname"
              className="mt-1 p-2 w-full border-2 rounded-md focus:border-cyan-500 focus:outline-none"
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="txtemail"
              placeholder="Email"
              className="mt-1 p-2 w-full border-2 rounded-md focus:border-cyan-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="my-3">
          <input
            type="text"
            placeholder="Subject"
            className="mt-1 p-2 w-full border-2 rounded-md focus:border-cyan-500 focus:outline-none"
          />
        </div>
        <div className="my-3">
          <textarea
            rows="4"
            placeholder="Message"
            className="mt-1 w-full px-3 py-2 border-2 rounded-md focus:outline-none focus:border-cyan-500"
          ></textarea>
        </div>
        <button className="inline-flex items-center px-10 py-2 primary-bg-color text-white rounded-md hover:bg-gray-100 hover:text-cyan-500 transition ease-in-out delay-900">
          Send <FaTelegramPlane className="ml-2" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
