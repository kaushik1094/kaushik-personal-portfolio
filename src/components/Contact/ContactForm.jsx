import { useEffect, useState } from "react";
import { FormControl, TextField } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";

const WHATSAPP_NUMBER = "13134245353";

const style = {
  "& label.Mui-focused": {
    color: "#474306",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#474306",
    },
  },
};

function buildMessage({ name, email, message }) {
  return [
    `Hi Kaushik, this is ${name}.`,
    "",
    `Reply-to email: ${email}`,
    "",
    "Message:",
    message,
  ].join("\n");
}

function openWhatsApp({ name, email, message }) {
  const text = encodeURIComponent(buildMessage({ name, email, message }));
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export default function ContactForm() {
  const reduce = useReducedMotion();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [opened, setOpened] = useState(false);

  function resetStates() {
    setName("");
    setEmail("");
    setMessage("");
  }

  useEffect(() => {
    if (opened) {
      const timeout = setTimeout(() => {
        setOpened(false);
        resetStates();
      }, 2400);
      return () => clearTimeout(timeout);
    }
    return undefined;
  }, [opened]);

  const handleSend = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      alert("Please fill out all required form fields");
      return;
    }
    openWhatsApp({ name, email, message });
    setOpened(true);
  };

  return (
    <div id="contact-form">
      <div className="ping-title">Ping me</div>
      <FormControl component="form" onSubmit={handleSend}>
        <TextField
          sx={style}
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Name"
          variant="outlined"
          margin="dense"
        />
        <TextField
          sx={style}
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          type="email"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          sx={style}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          label="Message"
          multiline
          rows={5}
          margin="normal"
          fullWidth
        />
        <motion.button
          type="submit"
          className="resume-button whatsapp-button"
          onClick={handleSend}
          whileHover={reduce ? undefined : { y: -3, scale: 1.03 }}
          whileTap={reduce ? undefined : { scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 18 }}
        >
          {opened ? (
            <span className="send-success">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <motion.path
                  d="M4 10.5L8.5 15L16 6"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </svg>
              Opening WhatsApp...
            </span>
          ) : (
            <span className="send-success">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M19.05 4.91A9.82 9.82 0 0012.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.78 1.22h.01c5.46 0 9.91-4.45 9.91-9.91a9.82 9.82 0 00-2.9-7.02zM12.04 20.13h-.01a8.21 8.21 0 01-4.18-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.16 8.16 0 01-1.26-4.37c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.83 2.41a8.18 8.18 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.13-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23a7.5 7.5 0 01-1.39-1.72c-.14-.25 0-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.83-.2-.49-.41-.42-.56-.43-.14 0-.31-.02-.48-.02-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.06 0 1.21.88 2.38 1 2.55.12.17 1.74 2.65 4.21 3.71.59.25 1.05.4 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.3z" />
              </svg>
              Send via WhatsApp
            </span>
          )}
        </motion.button>
      </FormControl>
      <div className="form-helper">
        Sending opens WhatsApp with your message pre-filled.
      </div>
    </div>
  );
}
