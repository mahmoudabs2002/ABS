/* eslint-disable react/prop-types */
import { useState } from "react";
import Swal from "sweetalert2";
import { IoMdArrowForward } from "react-icons/io";

const ContactForm = ({ formData, handleChange, setSection }) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!formData.first_name) newErrors.first_name = "First name must not be empty";
    if (!formData.last_name) newErrors.last_name = "Last name must not be empty";
    if (!formData.email) newErrors.email = "Email must not be empty";
    if (!formData.phone) newErrors.phone = "Phone number must not be empty";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      setSection(2);
    } else {
      Swal.fire({
        title: "All fields are required",
        icon: "error",
        draggable: true,
      });
    }
  };

  return (
    <div className="mx-4 lg:mx-0 max-w-full">
      <div>
        {[
          { label: "First name", name: "first_name", width: "lg:w-[550px]" },
          { label: "Last name", name: "last_name", width: "lg:w-[615px]" },
        ].map(({ label, name, width  },index) => (
          <div key={name} className={`${index === 1 ? " lg:ml-6 md:ml-2":""} inline-block relative mr-2`}>
            <label className="text-white">{label}</label>
            <input
              required
              value={formData[name]}
              onChange={handleChange}
              className={`block ${errors[name] ? "border border-red-600" : ""} ${width} w-[180px] h-8 mt-2 outline-none px-2 rounded-lg`}
              type="text"
              name={name}
            />
            {errors[name] && <span className="absolute text-red-600">{errors[name]}</span>}
          </div>
        ))}
        
        {[
          { label: "Your e-mail address", name: "email" },
          { label: "Your phone number", name: "phone" },
        ].map(({ label, name }) => (
          <div key={name} className="my-4">
            <label className="text-white">{label}</label>
            <input
              required
              value={formData[name]}
              onChange={handleChange}
              className={`block lg:w-[1200px] w-full h-8 mt-2 outline-none px-2 rounded-lg ${errors[name] ? "border border-red-600" : ""}`}
              type="text"
              name={name}
            />
            {errors[name] && <p className="text-red-600">{errors[name]}</p>}
          </div>
        ))}
      </div>
      <div
        onClick={handleNext}
        className="flex gap-2 items-center bg-primary rounded-3xl text-white py-2 px-10 w-fit mt-4 float-end cursor-pointer hover:shadow-xl duration-300"
      >
        Next Step <IoMdArrowForward />
      </div>
    </div>
  );
};

export default ContactForm;
