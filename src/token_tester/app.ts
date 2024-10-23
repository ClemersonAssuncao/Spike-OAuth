import express from 'express';
import path from 'path';

const app = express();
const PORT = 3002;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Token tester running on port ${PORT}`);
});
