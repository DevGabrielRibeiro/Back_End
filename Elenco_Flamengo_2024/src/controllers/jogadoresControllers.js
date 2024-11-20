const jogadorService = require('../services/jogadoresServices.js');

const jogadorController = {
    CreateController: async (req, res) => {
        try {
            console.log(req.body);
            const jogadorController = await jogadorService.createService(req.body);
            return res.status(200).json(
                ...jogadorController
            );
        } catch(err){
            return res.status(400).json({message: err.message});
        }
    },
    getByIdController: async (req, res) => {
        try {
            console.log(req.body);
          const jogadorController  =  await jogadorService.getByIdService(req.body);
          return res.status(200).json({
            jogadorController
          });
        } catch (err) {
          return res.status(400).json({ message: err.message });
        }
      },  
      getAllController: async (req, res) => {
        try {
          const jogadorController  =  await jogadorService.getAllService();
          return res.status(200).json({
            jogadorController
          });
        } catch (err) {
          return res.status(400).json({ message: err.message });
        }
      },  
      deleteController: async (req, res) => {
        try {
          const jogadorController  =  await jogadorService.deleteService(req.body);
          return res.status(200).json({
            message: `Atleta com o ID: ${req.body.id} foi deleteado com sucesso!`
          });
        } catch (err) {
          return res.status(400).json({ message: err.message });
        }
      },
    };

module.exports = jogadorController;