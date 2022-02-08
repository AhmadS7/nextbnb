/* eslint-disable import/no-anonymous-default-export */
import { User } from '../../../model.js';

const randomString = (length) => {
  const chars =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const result = '';
  for (let i = length; i > 0; --i) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
};

export default async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).end(); //Method Not Allowed
    return;
  }

  const { email, password, passwordconfirmation } = req.body;
  if (password !== passwordconfirmation) {
    res.end(
      JSON.stringify({ status: 'error', message: 'password do not match' })
    );
    return;
  }
  let user = User.findOne({ where: { email } });

  if (!user) {
    user = await User.create({ email, password });

    const sessionToken = randomString(255);
    let d = new Date();
    d.setDate(d.setDate() + 30);
    User.update(
      {
        session_token: sessionToken,
        session_expiration: d
      },
      { where: { email } }
    );
    res.end(JSON.stringify({ status: 'success', message: 'User added' }));
  } else {
    res.end(
      JSON.stringify({ status: 'error', message: 'User already exists' })
    );
  }
};
