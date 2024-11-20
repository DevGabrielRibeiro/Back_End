const db = require('../config/database.js');

const jogadorModel = {
    getAllModel: async () => {
        const [rows] = await db.query('SELECT * FROM atletas');
        return rows;
    },

    getByIdModel: async(id) => {
        const [rows] = await db.query('SELECT * FROM atletas WHERE ID_ATLETA = ?', [id]);
    },

    createModel: async (jogador) => {
        const {NOME, IDADE, NACIONALIDADE, NUM_CAMISA} = jogador;
        const [result] = await db.query('INSERT INTO atletas (NOME, IDADE, NACIONALIDADE, NUM_CAMISA) VALUES (?,?,?,?)', [NOME, IDADE, NACIONALIDADE, NUM_CAMISA]);
        return {id: result.insertId, NOME, IDADE, NACIONALIDADE, NUM_CAMISA};
    },

    deleteModel: async (id) => {
        const [rows] = await db.query('DELETE FROM atletas WHERE ID_ATLETAS = ?', [id.id]);
        return rows[0];
      },
      
    };

module.exports = jogadorModel;