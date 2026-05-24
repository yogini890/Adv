require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config');
const seedAdmin = require('./seedAdmin');

if (!process.env.JWT_SECRET) {
  console.error('JWT_SECRET is missing. Copy api/.env.example to api/.env and set a value.');
  process.exit(1);
}

const app = express();

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/blogs', require('./routes/blogs'));

app.get('/', (req, res) => res.json({ message: 'AMS Legal API running' }));

const PORT = process.env.PORT || 5000;

const start = async () => {
  await connectDB();
  await seedAdmin();
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

start().catch((err) => {
  console.error('Failed to start server:', err.message);
  process.exit(1);
});
