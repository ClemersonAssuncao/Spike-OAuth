import { Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/jwt_token';
import { redisClient } from '../app';
import { users } from '../user/userService';

function login (req: Request, res: Response): void {

  console.log(req);
  const { username, password } = req.body;

  if (!username) {
    res.status(400).send('Username is required');
    return;
  }

  const user = users.find(u => u.username === username);
  if (!user) {
    res.status(400).send('Usuário ou senha inválidos');
    return;
  }

  if (password !== user?.password) {
    res.status(400).send('Usuário ou senha inválidos');
    return;
  }

  const token = jwt.sign({ userId: user?.id }, JWT_SECRET, { expiresIn: '1h' });

  res.cookie('token', token, { httpOnly: true });
  res.send(`
    <html>
      <body>
        <script>
          // Envia o token para a janela pai
          window.parent.postMessage({
            token: '${token}',
            status: 'success'
          }, '*');
        </script>
        <p>Login bem-sucedido! Você pode fechar esta janela.</p>
      </body>
    </html>
  `);
};

function authenticateToken(req: Request, res: any, next: any) {
  const token = req.cookies.token;

  if (!token) {
    return res.redirect('/api/login/'); // Redireciona para a página de login
  }

  jwt.verify(token, JWT_SECRET, (err: any, decoded: any) => {
    if (err) {
      return res.redirect('/api/login/'); // Redireciona para a página de login
    }
    next();
  });
}

export {
  login,
  authenticateToken
}

// logger no Tasy
// autenticação Webpage com duas chaves, uma para refresh token e outra para autenticação temporaria
// autenticação com o apitoken em caso de falta de tempo
// cadastro de url no Tasy
