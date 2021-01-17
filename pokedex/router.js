const express = require("express");

const router = express.Router();
const controller = require('./controllers/controller.js')

router.get('/', controller.renderHomePage);

router.get('/pokemon/all', controller.getAllPokemon);

router.get('/pokemon/colum:/name:', controller.searchPokemon);

module.exports = router;