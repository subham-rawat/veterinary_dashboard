import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios


function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstEye, setFirstEye] = useState(false);

  const navigate =useNavigate();


  const handleSignUp = async (e) => {
    
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (name === "" || password === "" || email === "") {
      toast.warning("Any field should not be empty");
      return;
    }

    if (!/^[a-zA-Z]+$/.test(name)) {
      toast.warning("Name should contain only alphabetic characters");
      return;
    }
    if (name.length < 3) {
      toast.warning("Password should be at least 3 characters long");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.warning("Invalid email format");
      return;
    }
    if (password.length < 6) {
      toast.warning("Password should be at least 6 characters long");
      return;
    }


    try {
      
      const response = await axios.post('https://652ad5c54791d884f1fd6ab9.mockapi.io/login', {
        name,
        email,
        password,
      });

      if (response.status === 201) {
        toast.success("Sign up successful");
        navigate('/'); 
      } else {
        toast.error("Sign up failed");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      toast.error("An error occurred while signing up");
    }
  };


  return (
    <>
      <div class="container rounded" style={{ color: "white" }}>
  <div class="row mt-5 rounded">
    <div class="col-lg-6 col-md-12">
      <form class="ms-5 mt-3" onSubmit={handleSignUp}>
        <h3 class="fw-bold">START WITH US</h3>
        <p class="mt-3 fst-italic">Hey, please provide your details to register with us.</p>
        <div class="mb-3 position-relative">
          <label class="form-label fw-bold">First Name</label>
          <input class="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Please enter your Name" />
        </div>
        <div class="mb-3 position-relative">
          <label class="form-label fw-bold">Your E-mail</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control" placeholder="Please enter your e-mail" />
          <div class="small">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3 position-relative">
          <label class="form-label fw-bold">Password</label>
          <div class="input-group">
            <input type={firstEye ? "text" : "password"} class="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Please enter your Password" />
            <span class="input-group-text eye-btn" onClick={() => setFirstEye(!firstEye)}>
              <i class={`fas ${firstEye ? "fa-eye-slash" : "fa-eye"}`}></i>
            </span>
          </div>
        </div>
        <div class="mb-3 position-relative">
          <label class="form-label fw-bold">Confirm Password</label>
          <div class="input-group">
            <input type={firstEye ? "text" : "password"} class="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Please enter your Password" />
            <span class="input-group-text eye-btn" onClick={() => setFirstEye(!firstEye)}>
              <i class={`fas ${firstEye ? "fa-eye-slash" : "fa-eye"}`}></i>
            </span>
          </div>
        </div>
        <button type="submit" id="signin" class="btn btn-success w-100 mt-4">Sign Up</button>
      </form>
      <h6 class="mt-2" id="already">Already have an account? Click here to
        <Link class="text-decoration-none" to="/">
          <span class="text-info ms-2 text-decoration-none" type="button">Log In</span>
        </Link>
      </h6>
      <h5 class="fw-bold" id="follow">------ Follow Us On -------</h5>
      <div class="d-flex justify-content-around w-100 mb-5 mt-5" id="social">
        <button type="button" class="btn btn-primary btn-floating">
          <a class="text-white" href="https://linkedin.com">
            <i class="fab fa-linkedin-in"></i></a><span> LinkedIn </span>
        </button>
        <button type="button" class="btn btn-primary btn-floating">
          <a class="text-white" href="https://twitter.com">
            <i class="fab fa-twitter"></i></a> <span>Twitter</span>
        </button>
        <button type="button" class="btn btn-primary btn-floating">
          <a class="text-white" href="https://www.facebook.com">
            <i class="fab fa-facebook-f"></i></a><span class="ms-2">Facebook</span>
        </button>
      </div>
    </div>
    <div class="col-lg-6 col-md-12">
    </div>
  </div>
</div>

      <ToastContainer />
    </>
  );
}

export default SignUp;
