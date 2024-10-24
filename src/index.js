import express from "express";
import path from "path";
const app = express();
const PORT = 3000;

// Ruta raíz
app.get("/", (req, res) => {
  res.send("¡Hola, mundo desde Node.js!");
});

// Ruta para servir archivos estáticos desde la carpeta public
app.use(express.static(path.join(process.cwd(), "public")));

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
