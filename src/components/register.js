import { useState, useEffect } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [registeredMessage, setRegisteredMessage] = useState("");
  const [registered, setRegistered] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  useEffect(() => {
    const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordValidator = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const phoneValidator = /^\d{9}$/;

    if (email === "") {
      setEmailError("");
    } else if (!emailValidator.test(email)) {
      setEmailError("Please enter a valid email address!");
    } else {
      setEmailError("");
    }

    if (password === "") {
      setPasswordError("");
    } else if (
      !/^[0-9]+$/.test(password) &&
      !passwordValidator.test(password)
    ) {
      setPasswordError("Please enter mininum 8 characters and secure!");
    } else {
      setPasswordError("");
    }

    if (phone === "") {
      setPhoneError("");
    } else if (!phoneValidator.test(phone)) {
      setPhoneError("Please enter a valid phone number! (9 digits)");
    } else {
      setPhoneError("");
    }
  }, [email, emailError, password, passwordError, phone, phoneError]);

  function register() {
    if (
      email !== "" &&
      password !== "" &&
      phone !== "" &&
      emailError === "" &&
      passwordError === "" &&
      phoneError === ""
    ) {
      setRegistered(true);

      setRegisteredMessage("Registering");
      setTimeout(() => setRegisteredMessage("Registering."), 1000);
      setTimeout(() => setRegisteredMessage("Registering.."), 2000);
      setTimeout(() => setRegisteredMessage("Registering..."), 3000);
      setTimeout(
        () => setRegisteredMessage("You have successfully registered!"),
        4000
      );
    }
  }

  return registered ? (
    <h1>{registeredMessage}</h1>
  ) : (
    <form style={{ maxWidth: "720px", margin: "auto", textAlign: "justify" }}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          onChange={(event) => setEmail(event.target.value)}
        />
        {emailError !== "" && (
          <small id="emailHelp" className="form-text text-danger">
            {emailError}
          </small>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        {passwordError !== "" && (
          <small id="passwordHelp" className="form-text text-danger">
            {passwordError}
          </small>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPhone1">Phone</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPhone1"
          placeholder="Phone"
          onChange={(event) => setPhone(event.target.value)}
        />
        {phoneError !== "" && (
          <small id="phoneHelp" className="form-text text-danger">
            {phoneError}
          </small>
        )}
      </div>
      <button
        type="submit"
        className="btn btn-primary btn-submit"
        onClick={(event) => {
          event.preventDefault();

          register();
        }}
        onSubmit={(event) => event.preventDefault()}
      >
        Submit
      </button>
    </form>
  );
}

export default Register;
