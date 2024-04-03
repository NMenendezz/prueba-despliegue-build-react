import express from 'express'

const app = express()

// Hacer que node sirva los archivos de nuestro app React
app.use(express.static(path.resolve(__dirname, './client/build')));

app.get("/api", (req, res) => {
  res.json({ message: "Hola desde el servidor!" });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
