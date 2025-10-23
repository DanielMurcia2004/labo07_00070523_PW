const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor en funcionamiento');
});

app.post('/', (req, res) => {
  console.log('Datos obtenidos del cliente:', req.body);
  res.send('POST recibido correctamente desde el backend');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
