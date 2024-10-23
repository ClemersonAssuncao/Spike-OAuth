"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.revokeToken = exports.login = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwt_token_1 = require("../config/jwt_token");
const tokenService = __importStar(require("../services/tokenService"));
const login = (req, res) => {
    const user = {
        id: 1,
        username: 'exampleuser',
    };
    const token = jsonwebtoken_1.default.sign(user, jwt_token_1.JWT_SECRET, { expiresIn: '1h' });
    res.json({
        message: 'Login successful',
        token,
    });
};
exports.login = login;
const revokeToken = (req, res) => {
    const { token } = req.body;
    if (!token) {
        return res.status(400).json({ message: 'Token is required' });
    }
    tokenService.revokeToken(token);
    res.json({ message: 'Token revoked successfully' });
};
exports.revokeToken = revokeToken;
