import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()

app.use(express.static(path.resolve(__dirname, './client/dist')));

app.get("/api", (req, res) => {
  res.json({ message: "Hola desde el servidor!" });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/dist', 'index.html'));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
