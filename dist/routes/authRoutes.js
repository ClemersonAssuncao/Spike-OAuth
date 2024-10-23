"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controllers/authController");
const checkToken_1 = require("../middlewares/checkToken");
const router = express_1.default.Router();
router.post('/login', authController_1.login);
router.post('/revoke', authController_1.revokeToken);
router.get('/protected', checkToken_1.checkToken, (req, res) => {
    res.json({ message: 'Protected route accessed' });
});
exports.default = router;
