import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { FormControl, TextField } from "@mui/material";
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
      alert("Message sent successfully!");
      resetStates();
    }
  }, [sentSuccess]);

  // eslint-disable-next-line no-unused-vars
  const sendEmail = (e) => {
    e.preventDefault();
    if (name !== "" && email !== "" && message !== "") {
      const templateParams = {
        name: name,
        email,
        notes: message,
      };

      emailjs
        .send(
          "service_5wyqalw",
          "template_oleg1q5",
          templateParams,
          "vENA4BgOh2GpAyLA2"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
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
  //   return (
  //     <div id="stylized">
  //       <form ref={form} onSubmit={sendEmail}>
  //         <span>
  //           <label>Name</label>
  //           <input type="text" name="user_name" />
  //         </span>
  //         <span>
  //           <label>Email</label>
  //           <input type="email" name="user_email" />
  //         </span>
  //         <span>
  //           <label>Message</label>
  //           <textarea name="message" />
  //         </span>
  //         <input type="submit" value="Send" />
  //       </form>
  //     </div>
  //   );
  return (
    <div id="contact-form">
      <div className="ping-title">Ping me</div>
      <FormControl>
        <TextField
          sx={style}
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="outlined-required"
          label="Name"
          // defaultValue="Name"
          variant="outlined"
          margin="dense"
        />
        <TextField
          sx={style}
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="outlined-required"
          label="Email"
          type="email"
          // defaultValue="Your Email"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          sx={style}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id="outlined-required"
          label="Message"
          multiline
          rows={5}
          // maxRows={5}

          margin="normal"
          fullWidth
          // variant="outline"
        />
        <button className="resume-button" onClick={sendEmail}>
          Send
        </button>
      </FormControl>
    </div>
  );
}
