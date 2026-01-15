import React, { useState, useRef } from "react";
import Title from "../Elements/Title";
import { MdSend } from "react-icons/md";
import { FiCheck } from "react-icons/fi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [status, setStatus] = useState("idle"); // idle | loading | success
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientMessage, setClientMessage] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const form = useRef();

  const validate = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (clientName.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(clientEmail)) {
      newErrors.email = "Enter a valid email address";
      valid = false;
    }

    if (clientMessage.trim().length < 5) {
      newErrors.message = "Message must be at least 5 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus("loading");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setStatus("success");

          setTimeout(() => {
            setStatus("idle");
            setClientName("");
            setClientEmail("");
            setClientMessage("");
            setErrors({ name: "", email: "", message: "" });
          }, 2000);
        },
        (error) => {
          console.log("Email send error:", error.text);
          setStatus("idle");
          alert("Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="w-full">
      <Title title={"Get"} subTitle={"in Touch"} />
      <div className="p-6 justify-between">
        <div className="w-full grid md:grid-cols-12 gap-4">
          <p className="col-span-6 flex justify-between items-center w-full text-lg text-[#ccc] py-4 borderBottom">
            <span className="bg-designColor py-1.5 text-gray-700 text-sm font-titleFont font-medium px-4 rounded-md items-center justify-center">
              Address:
            </span>
            Ali Town, Lahore, Pakistan
          </p>
          <p className="col-span-6 flex justify-between items-center w-full text-lg text-[#ccc] py-4 borderBottom">
            <span className="bg-designColor py-1.5 text-gray-700 text-sm font-titleFont font-medium px-4 rounded-md items-center justify-center">
              Email:
            </span>
            syedahsanullah.dev@gmail.com
          </p>
          <p className="col-span-6 flex justify-between items-center w-full text-lg text-[#ccc] py-4 borderBottom">
            <span className="bg-designColor py-1.5 text-gray-700 text-sm font-titleFont font-medium px-4 rounded-md items-center justify-center">
              Phone:
            </span>
            +92 3332281460
          </p>
          <p className="col-span-6 flex justify-between items-center w-full text-lg text-[#ccc] py-4 borderBottom">
            <span className="bg-designColor py-1.5 text-gray-700 text-sm font-titleFont font-medium px-4 rounded-md items-center justify-center">
              Freelance:
            </span>
            Available
          </p>
        </div>
      </div>

      <div className="">
        <Title title={"Send"} subTitle={"Message"} />
      </div>

      <form
        ref={form}
        onSubmit={handleSubmit}
        className="mt-6 px-6 grid gap-6 mb-5 md:mb-0 max-w-3xl"
      >
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full flex flex-col">
            <input
              type="text"
              name="name"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder="Full Name"
              className={`w-full bg-transparent border-2 px-4 py-2 text-gray-200 border-zinc-600 focus-visible:border-designColor outline-none duration-300 ${
                errors.name ? "border-red-500" : ""
              }`}
            />
            {errors.name && (
              <span className="text-red-500 text-sm mt-1">{errors.name}</span>
            )}
          </div>

          <div className="w-full flex flex-col">
            <input
              type="email"
              name="email"
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
              placeholder="Your Email"
              className={`w-full bg-transparent border-2 px-4 py-2 text-gray-200 border-zinc-600 focus-visible:border-designColor outline-none duration-300 ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">{errors.email}</span>
            )}
          </div>
        </div>

        <div className="flex flex-col">
          <textarea
            rows="5"
            name="message"
            value={clientMessage}
            onChange={(e) => setClientMessage(e.target.value)}
            placeholder="Your Message"
            className={`w-full bg-transparent border-2 px-4 py-2 text-gray-200 border-zinc-600 focus-visible:border-designColor outline-none duration-300 ${
              errors.message ? "border-red-500" : ""
            }`}
          />
          {errors.message && (
            <span className="text-red-500 text-sm mt-1">{errors.message}</span>
          )}
        </div>

        <input type="hidden" name="time" value={new Date().toLocaleString()} />

        <button
          type="submit"
          disabled={status !== "idle"}
          className={`group relative flex items-center justify-center gap-2 w-48 border-2 px-6 py-2 text-base overflow-hidden outline-none transition-all duration-300
            active:scale-95 disabled:opacity-60
            ${
              status === "success"
                ? "border-green-500 text-green-400"
                : "border-zinc-600 text-gray-200 hover:border-designColor"
            }`}
        >
          <span
            className={`transition-all duration-300 ${
              status === "idle"
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-6"
            }`}
          >
            Send Message
          </span>

          {status === "idle" && (
            <MdSend className="absolute -translate-x-5 opacity-0 group-hover:translate-x-17 group-hover:opacity-100 transition-all duration-300" />
          )}
          {status === "loading" && (
            <AiOutlineLoading3Quarters className="absolute text-xl animate-spin" />
          )}
          {status === "success" && (
            <FiCheck className="absolute text-2xl scale-100 opacity-100 transition-all duration-300" />
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
