import axios from 'axios';
import React, { useState } from 'react';

export default function RegistrationModal(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordconfirmation, setPasswordconfirmation] = useState('');

  // submit function
  const submit = async () => {
    const response = await axios.post('/api/auth/register', {
      email,
      password,
      passwordconfirmation
    });
    console.log(response);
  };

  return (
    <>
      <h2>Sign up </h2>
      <div>
        <form onSubmit={submit}>
          <input
            type="email"
            placeholder="Type Your Email Address"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Type Your Password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            id="passwordconfirmation"
            placeholder="Enter Password Again"
            onChange={(e) => setPasswordconfirmation(e.target.value)}
          />
          <button>Sign up</button>
        </form>
      </div>
      <p>
        Already have an account?{' '}
        <a
          style={{
            color: 'cornflowerblue',
            padding: '0rem .5rem',
            fontWeight: 'bold'
          }}
          href="#"
          onClick={() => props.showLogin()}
        >
          Log in
        </a>
      </p>
    </>
  );
}
