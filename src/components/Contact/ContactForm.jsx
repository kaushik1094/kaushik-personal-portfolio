import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { FormControl, TextField } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";

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

export default function ContactForm() {
  const reduce = useReducedMotion();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sentSuccess, setSentSuccess] = useState(false);

  function resetStates() {
    setName("");
    setEmail("");
    setMessage("");
  }

  useEffect(() => {
    if (sentSuccess) {
      const timeout = setTimeout(() => {
        setSentSuccess(false);
        resetStates();
      }, 2400);
      return () => clearTimeout(timeout);
    }
    return undefined;
  }, [sentSuccess]);

  const sendEmail = (e) => {
    e.preventDefault();
    if (name !== "" && email !== "" && message !== "") {
      const templateParams = { name, email, notes: message };

      emailjs
        .send(
          "service_5wyqalw",
          "template_oleg1q5",
          templateParams,
          "vENA4BgOh2GpAyLA2"
        )
        .then(
          function (response) {
            if (response.status === 200) {
              setSentSuccess(true);
            } else {
              alert("message is not delivered please try again");
            }
          },
          function (error) {
            alert(`${error} message is not delivered please try again`);
          }
        );
    } else {
      alert("Please fill out all required form fields");
    }
  };

  return (
    <div id="contact-form">
      <div className="ping-title">Ping me</div>
      <FormControl>
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
          className="resume-button"
          onClick={sendEmail}
          whileHover={reduce ? undefined : { y: -3, scale: 1.03 }}
          whileTap={reduce ? undefined : { scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 18 }}
        >
          {sentSuccess ? (
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
              Sent
            </span>
          ) : (
            "Send"
          )}
        </motion.button>
      </FormControl>
    </div>
  );
}
