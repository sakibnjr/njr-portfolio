import React from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import InputField from "../components/InputField";

const ContactForm = ({ projectType }) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message Sent!");
    setFormState({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <>
      <Toaster />
      <motion.form
        className="relative bg-white p-6 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h3 className="text-2xl font-bold text-red-500 mb-4">{`Build a ${projectType}`}</h3>
        <InputField
          label="Name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          placeholder="Your Name"
        />
        <InputField
          label="Email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          type="email"
          placeholder="Your Email"
        />
        <InputField
          label="Message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          type="textarea"
          placeholder="Your Message"
        />
        <button
          type="submit"
          className="w-full py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-400 transition-colors duration-300"
        >
          Send Message
        </button>
      </motion.form>
    </>
  );
};

export default ContactForm;
