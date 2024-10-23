"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_SECRET = void 0;
/*
  Essa key é usada para gerar o token JWT.
  Obviamente não deve ser exposta no código, porém como se trata de um MVP e esse token não é valido em produção,
  será utilizado dessa forma.
*/
exports.JWT_SECRET = process.env.JWT_SECRET || '6b4e03423667dbb73b6e15454f0eb1abd4597f9a1b078e3f5b5a6bc7';
