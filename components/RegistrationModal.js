import React from 'react';

export default function RegistrationModal(props) {
  return (
    <>
      <h2>Sign up </h2>
      <div>
        <form
          onSubmit={(e) => {
            alert('Log in');
            e.preventDefault();
          }}
        >
          <input
            type="email"
            placeholder="Type Your Email Address"
            id="email"
          />
          <input
            type="password"
            placeholder="Type Your Password"
            id="password"
          />
          <input
            type="password"
            id="passwordconfirmation"
            placeholder="Enter Password Again"
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
          href="javascript:;"
          onClick={() => props.showLogin()}
        >
          Log in
        </a>
      </p>
    </>
  );
}
