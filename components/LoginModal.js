/* eslint-disable react/no-unescaped-entities */
import axios from 'axios';
import React, { useState } from 'react';

export default function LoginModal(props) {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const submit = async () => {
    const response = await axios.post('/api/auth/login', {
      email,
      password
    });
    console.log(response);
    if (response.data.status === 'error') {
      alert(response.data.message);
    }
  };

  return (
    <>
      <h2>Login Modal</h2>
      <div>
        <form
          act
          onSubmit={(e) => {
            submit();
            e.preventDefault();
          }}
        >
          <input id="email" type="email" placeholder="Type Your Email" />
          <input
            id="password"
            type="password"
            placeholder="Type Your Password"
          />
          <button>Log in</button>
        </form>
      </div>
      <p>
        Dont't have an account yet?{' '}
        <a
          style={{
            color: 'steelblue',
            padding: '0rem .5rem',
            fontWeight: 'bold'
          }}
          href="#"
          onClick={() => props.showSignup()}
        >
          Sign Up
        </a>
      </p>
    </>
  );
}
