const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jogadoresRoutes = require('./src/routes/jogadoresRoutes');

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use('/api/jogadores', jogadoresRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`O servidor está rodando na porta: ${PORT}`);
});