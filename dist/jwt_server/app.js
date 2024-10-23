"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const tokenService_1 = require("./services/tokenService");
(0, tokenService_1.start)();
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
app.use(body_parser_1.default.json());
app.use('/api', authRoutes_1.default);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
