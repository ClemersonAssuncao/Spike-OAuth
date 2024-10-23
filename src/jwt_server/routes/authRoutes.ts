import express from 'express';
import { authenticateToken, login } from '../controllers/authController';
import path from 'path';

const router = express.Router();

router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.post('/login', login);

router.get('/protected', authenticateToken, ( req, res) => {
  res.sendFile(path.join(__dirname, '../public/protected.html'));
});

export default router;