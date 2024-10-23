"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const tokenRoutes_1 = __importDefault(require("./routes/tokenRoutes"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3002;
app.use(body_parser_1.default.json());
// Servir arquivos estáticos da pasta "public"
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// Rotas da API
app.use('/api', tokenRoutes_1.default);
app.listen(port, () => {
    console.log(`Token tester running on port ${port}`);
});
