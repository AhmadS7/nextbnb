// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).end(); //Method Not Allowed
    return;
  }
  console.log(req.body);
  res.end();
};
