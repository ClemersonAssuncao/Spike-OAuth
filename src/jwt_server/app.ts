import express from 'express';
import authRoutes from './routes/authRoutes';
import cookieParser from 'cookie-parser';
import RedisClient from './services/redis';

const app = express();
const PORT = 3001;

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', authRoutes);

app.get('/', (req, res) => {
  res.send('Auth server is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export const redisClient = RedisClient.start();