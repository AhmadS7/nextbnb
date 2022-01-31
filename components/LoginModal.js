/* eslint-disable react/no-unescaped-entities */
import React from 'react';

export default function LoginModal(props) {
  return (
    <>
      <h2>Login Modal</h2>
      <div>
        <form
          act
          onSubmit={(e) => {
            alert('Sign up!');
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
