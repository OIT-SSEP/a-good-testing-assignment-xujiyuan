import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 8080; // default port to listen

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
}
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// define a route handler for the default home page
app.get('/', async (req, res) => {
  const result = [
    {
      id: 1,
      first_name: 'Jerry',
      last_name: 'Videler',
      email: 'jerry@example.com',
      gender: 'Female',
      ip_address: '29.18.136.0',
    },
    {
      id: 6,
      first_name: 'Ann-marie',
      last_name: 'Perris',
      email: 'aperris2@yellowpages.com',
      gender: 'Female',
      ip_address: '120.188.60.205',
    },
  ];
  res.status(200).json(result);
});

// app.put('/', async (req, res) => {});

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});

export default app;
