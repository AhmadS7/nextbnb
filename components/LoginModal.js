import React from 'react';

export default function LoginModal(props) {
  return (
    <div>
      <h2>Login Modal</h2>
      <div>
        <form action="">
          <input id="email" type="email" placeholder="Type Your Email" />
          <input
            id="password"
            type="password"
            placeholder="Type Your Password"
          />
        </form>
        <button>Log In</button>
      </div>
    </div>
  );
}
