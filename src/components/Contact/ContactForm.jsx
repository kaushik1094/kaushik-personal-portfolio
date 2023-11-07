import { useRef } from "react";
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
  const form = useRef();
  // eslint-disable-next-line no-unused-vars
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
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
          id="outlined-required"
          label="Name"
          // defaultValue="Name"
          variant="outlined"
          margin="dense"
        />
        <TextField
          sx={style}
          required
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
