import { User } from '../../../model.js';
// eslint-disable-next-line import/no-anonymous-default-export
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

  const user = await User.create({ email, password });
  res.end(JSON.stringify({ status: 'success', message: 'User added' }));
};
