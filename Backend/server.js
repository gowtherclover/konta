import express from "express";
import { getConnection } from "./db.js";

const app = express();
const PORT = 3000;

// Middleware para que Express entienda JSON
app.use(express.json());

// Ruta de prueba (ver si el server anda)
app.get("/", (req, res) => {
  res.send("Servidor Express funcionando 🚀");
});

// Ruta para obtener contactos desde la BD
app.get("/api/contactos", async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM Contactos");
    res.json(result.recordset);
  } catch (err) {
    console.error("Error al traer contactos:", err);// 👈 muestra el error completo en consola
    res.status(500).json({ error: err.message });// 👈 muestra el mensaje real en el navegador
  }
});


app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});
