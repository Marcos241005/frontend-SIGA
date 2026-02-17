const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/stats", (req, res) => {
    res.json({
        totalEstudiantes: 1250,
        totalDocentes: 75,
        notificaciones: 5,
    });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor del SIGA activo en http://localhost:${PORT}`);
});
