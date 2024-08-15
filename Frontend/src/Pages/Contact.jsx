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
    let response = await fetch("https://madhovari.onrender.com/contact", {
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
    <div className="bg-[#33333360]">
      <div
        className="flex flex-col pt-[150px] items-center gap-[40px]"
        id="contact"
      >
        <div className="mx-[40px] mb-[20px] w-[95%] shadow-black shadow-[0px_30px_60px_-20px_rgba(0,0,0,0.37)] rounded-[20px] overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d476.41457181287814!2d85.09529302489938!3d25.624720861010168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1722894545649!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="glass bg-[#ffffffda] flex flex-col w-[80%] text-center justify-center gap-[15px] mb-[40px] ">
          <h2 className="mt-[30px] text-[30px] text-gray-500 font-[600] font-['Merriweather'] ">Contact US</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-[30px] mx-[20px] md:mx-[50px] my-[20px] items-center justify-center">
              <div className="flex flex-col w-full md:flex-row gap-[30px]">
                <input
                  className="px-[10px] text-gray-500 md:text-[20px] w-full block rounded-[10px bg-transparent border-0 border-b-2 border-b-gray-400 focus:outline-none focus:ring-0 focus:border-gray-500  "
                  type="text"
                  value={formDetails.firstName}
                  placeholder="First Name"
                  required
                  onChange={(e) => onFormUpdate("firstName", e.target.value)}
                />
                <input
                  className="px-[10px] text-gray-500 md:text-[20px] w-full block rounded-[10px bg-transparent border-0 border-b-2 border-b-gray-400 focus:outline-none focus:ring-0 focus:border-gray-500"
                  type="text"
                  value={formDetails.lastName}
                  placeholder="Last Name"
                  onChange={(e) => onFormUpdate("lastName", e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full md:flex-row gap-[30px]">
                <input
                  className="px-[10px] text-gray-500 md:text-[20px] w-full block rounded-[10px bg-transparent border-0 border-b-2 border-b-gray-400 focus:outline-none focus:ring-0 focus:border-gray-500"
                  type="email"
                  value={formDetails.email}
                  placeholder="Email Address"
                  required
                  onChange={(e) => onFormUpdate("email", e.target.value)}
                />
                <input
                  className="px-[10px] text-gray-500 md:text-[20px] w-full block rounded-[10px bg-transparent border-0 border-b-2 border-b-gray-400 focus:outline-none focus:ring-0 focus:border-gray-500"
                  type="phone"
                  value={formDetails.phone}
                  placeholder="Phone No."
                  required
                  onChange={(e) => onFormUpdate("phone", e.target.value)}
                />
              </div>
              <textarea
                className="px-[10px] text-gray-500 md:text-[20px] w-full block rounded-[10px bg-transparent border-0 border-b-2 border-b-gray-400 focus:outline-none focus:ring-0 focus:border-gray-500 "
                rows="6"
                value={formDetails.message}
                placeholder="Write your Message here..."
                required
                onChange={(e) => onFormUpdate("message", e.target.value)}
              ></textarea>
              <button
                className="bg-[#003366] text-white text-[19px] md:text-[22px] w-[100px] md:w-[150px] h-[40px] md:h-[50px] rounded-[10px] my-[10px] duration-[0.5s] hover:scale-[1.05] "
                type="submit"
              >
                <span>{buttonText}</span>
              </button>
              <div className="text-green-500 text-[20px] mb-[20px] ">
                {status.message && (
                  <p
                    className={status.success === false ? "danger" : "success"}
                  >
                    {status.message}
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
