"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTokenRevoked = exports.revokeToken = void 0;
exports.start = start;
const redis_1 = require("redis");
let redisClient = null;
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        redisClient = yield (0, redis_1.createClient)();
    });
}
const revokeToken = (token) => {
    redisClient.set(token, 'revoked');
    redisClient.expire(token, 3600); // Expira após 1 hora
    redisClient.disconnect(); // Expira imediatamente, muito top
};
exports.revokeToken = revokeToken;
const isTokenRevoked = (token, callback) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield redisClient.get(token)
        .catch((err) => {
        callback(err, false);
    });
    const revoked = data === 'revoked';
    callback(null, revoked);
});
exports.isTokenRevoked = isTokenRevoked;
