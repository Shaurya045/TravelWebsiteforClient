import React, { useState } from "react";

function Contact() {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ succes: true, message: "Message sent successfully!!" });
    } else {
      setStatus({
        succes: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };
  return (
    <div className="bg-gray-200 ">
      <div className="flex flex-col pt-[150px]" id="contact">
        <div className="mx-[40px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7195.068936314497!2d85.09710686073036!3d25.62038121180862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57e4e6d37fa7%3A0xe24791bb2082c760!2sPratap%20Library!5e0!3m2!1sen!2sin!4v1722356224050!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <h2 className="text-[30px] font-[600] ">Contact US</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-[20px] mx-[50px] my-[20px] items-center">
            <div className="flex flex-row gap-[20px]">
              <input
                className="p-[10px] text-[20px] rounded-[10px]"
                type="text"
                value={formDetails.firstName}
                placeholder="First Name"
                required
                onChange={(e) => onFormUpdate("firstName", e.target.value)}
              />
              <input
                className="p-[10px] text-[20px] rounded-[10px]"
                type="text"
                value={formDetails.lastName}
                placeholder="Last Name"
                onChange={(e) => onFormUpdate("lastName", e.target.value)}
              />
            </div>
            <div className="flex flex-row gap-[20px]">
              <input
                className="p-[10px] text-[20px] rounded-[10px]"
                type="email"
                value={formDetails.email}
                placeholder="Email Address"
                required
                onChange={(e) => onFormUpdate("email", e.target.value)}
              />
              <input
                className="p-[10px] text-[20px] rounded-[10px]"
                type="tel"
                value={formDetails.phone}
                placeholder="Phone No."
                required
                onChange={(e) => onFormUpdate("phone", e.target.value)}
              />
            </div>
            <textarea
              className="p-[10px] text-[20px] rounded-[10px] w-[600px] h-[150px] "
              rows="6"
              value={formDetails.message}
              placeholder="Write your Message here..."
              required
              onChange={(e) => onFormUpdate("message", e.target.value)}
            ></textarea>
            <button
              className="bg-blue-800 text-white text-[18px] w-[150px] h-[50px] rounded-[10px] "
              type="submit"
            >
              <span>{buttonText}</span>
            </button>
            <div className="text-green-500 text-[20px] ">
              {status.message && (
                <p className={status.success === false ? "danger" : "success"}>
                  {status.message}
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
