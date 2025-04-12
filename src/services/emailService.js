import emailjs from "emailjs-com";

export const sendEmail = (form, btn, setEmail, setMessage) => {
  btn.value = "Sending...";

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const userId = import.meta.env.VITE_EMAILJS_USER_ID;

  return emailjs.sendForm(serviceId, templateId, form, userId).then(
    (response) => {
      alert("Message Sent! Thanks for reaching out.");
      setEmail("");
      setMessage("");
    },
    (error) => {
      console.log("FAILED...", error);
      btn.value = "Send Email";
      alert("Error sending message. Please try again.");
    }
  );
};
