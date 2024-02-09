import { ValidationError, useForm } from "@formspree/react";
import "./Contact.css";
import Lottie from "lottie-react";
// import doneAnimation from "../../Animations/done.json";
import doneAnimation from "../../Animations/done.json";
import messageAnimation from "../../Animations/contact.json";
const Contact = () => {
  const [state, handleSubmit] = useForm("xgegevjn");

  return (
    <section className="contact-us" id="contact">
      <h1 className="title">
        <span className="icon-envelope"></span>Contact us
      </h1>
      {/* <p className="sub-title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sed
        ipsam culpa nam quam, maiores aspernatur atque enim consequatur veniam
      </p> */}
      <div style={{justifyContent:"space-between"}} className="flex">
        <form onSubmit={handleSubmit} action="">
          <div className="flex">
            <label htmlFor="email">Email Address</label>
            <input
              autoComplete="off"
              required
              placeholder="enter your email"
              type="email"
              name="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message</label>
            <textarea
              required
              name="message"
              placeholder="enter your message"
              id="message"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button className="submit" type="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting..." : "Submit"}
          </button>
          {state.succeeded && (
            <p
              className="flex"
              style={{ fontSize: "18px", marginTop: "1.7rem" }}
            >
              <Lottie
                loop={false}
                style={{ height: 37 }}
                animationData={doneAnimation}
              />
              Your message has been sent successfully
            </p>
          )}
        </form>
        <div className="animation" style={{marginBottom:"100px"}}>
          <Lottie
            className="contact-animation"
            style={{ height: 400 }}
            animationData={messageAnimation}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
