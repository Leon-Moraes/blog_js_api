const express = require('express');
const crud = express();
const db = require('./db');

const port = process.env.PORT || 3000;
crud.listen(port, () => console.log(`Listening on port ${port}...`));

crud.get('/get/pokemon/all', (request, response) => {
(async () => {
  
    console.log('SELECT * FROM pokemon');
    const pokemon = await db.selectPokemons();
    console.log(pokemon);

    //response.send(`Pokemon names: ${pokemon}`);

})();
});
crud.get('/get/pokemon/search', (req, res) => {

    (async () => {
        var name;
        var colum;
        const pokemon = await db.selectPokemonByColumn(colum,name);
        console.log(pokemon);
    })();
});

