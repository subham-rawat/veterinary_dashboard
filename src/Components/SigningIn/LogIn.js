import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstEye, setFirstEye] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Email and password are required');
      return;
    }

    try {
      const response = await axios.get('https://652ad5c54791d884f1fd6ab9.mockapi.io/login');
      const matchingUser = response.data.find(user => user.email === email && user.password === password);
      if (matchingUser) {
        toast.success('Login Successful', { autoClose: 2000 }); // Display for 2 seconds (2000 milliseconds)
        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
        console.log('Login Successful', matchingUser);
        navigate("/dashboard")
      }
      else {
        toast.error('Email or password is incorrect');
        console.log('User Invalid');
      }
    } catch (error) {
      toast.error('Login Failed');
      console.error('Login Failed', error);
    }
  };


  return (
    <>
      <div className="container rounded" style={{ color: 'white' }}>
  <div className="row mt-5 rounded">
    <div className="col-lg-6 col-md-12">
      <div className='mt-3 ms-md-5'>
        <h2 className='fw-bold'>WELCOME BACK</h2>
        <p className="mt-3 fst-italic">
          Hey, enter your details to sign in to your Account
        </p>

        <div className="mb-3 position-relative">
          <label className="form-label fw-bold">Your E-mail</label>
          <input
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Please enter your e-mail"
          />
          <div className="">We'll never share your email with anyone else.</div>
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

        <button
          type="submit"
          id="signin"
          className="btn btn-success w-100 mt-4"
          onClick={handleLogin}
        >
          Log In
        </button>
      </div>
      <h6 className="mt-3" id="already">
        Don't have an account? Click here to
        <Link className='text-decoration-none' to="/signup">
          <span className="text-info ms-2" type="button">
            Sign Up
          </span>
        </Link>
      </h6>
      <h5 className="fw-bold" id="follow">
        ------ Follow Us On -------
      </h5>

      <div className="d-flex justify-content-around mb-5 mt-5" id="social">
        <a href="https://linkedin.com" className="btn btn-primary btn-floating mx-1">
          <i className="fab fa-linkedin-in"></i>
          <span>LinkedIn</span>
        </a>
        <a href="https://twitter.com" className="btn btn-primary btn-floating mx-1">
          <i className="fab fa-twitter"></i> <span>Twitter</span>
        </a>
        <a href="https://www.facebook.com" className="btn btn-primary">
          <i className="fab fa-facebook-f me-1"></i>
          <span>Facebook</span>
        </a>
      </div>
    </div>

    <div className="col-lg-6 col-md-12">
    </div>
  </div>
</div>

      <ToastContainer />
    </>
  );
}

export default LogIn;
