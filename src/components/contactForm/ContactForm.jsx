import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import "./contactForm.scss";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gmk06zm", // Reemplaza con tu Service ID
        "template_3htrtpx", // Reemplaza con tu Template ID
        form.current,
        "LQG9Wl4SBYDG3uuo4" // Reemplaza con tu User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mensaje enviado con éxito!");
          form.current.reset(); // Limpia el formulario después de enviar
        },
        (error) => {
          console.log(error.text);
          alert("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
        }
      );
  };

  return (
    <section className="contactForm">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contáctame
      </motion.h2>

      <form ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="formGroup">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="formGroup">
          <label htmlFor="message">Mensaje</label>
          <textarea id="message" name="message" rows="5" required />
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Enviar Mensaje
        </motion.button>
      </form>
    </section>
  );
};

export default ContactForm;