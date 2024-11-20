const jogadorModel = require('../models/jogadoresModels.js');

const jogadorService = {
    createService: async (jogador) => {
        const createJogador = await jogadorModel.createModel(jogador);
        return {createJogador};
    },

    getByIdService: async (jogador) => {
        const getJogador = await jogadorModel.getById(jogador);
        return {getJogador};
    },

    getAllService: async () => {
        const getAllJogadores = await jogadorModel.getAllModel();
        return {getAllJogadores};
    },

    deleteService: async (jogador) => {
        const createJogador = await jogadorModel.deleteModel(jogador);
        return { createJogador };
      }
    };

module.exports = jogadorService;