const connection = require('../connection.js');

exports.renderHomePage = (req, res) => {
    res.render('index')

}
exports.getAllPokemon = (req, res) => {

        console.log('SELECT * FROM pokemon');
        connection.query('SELECT * FROM pokemon', (error, rows, fields) => {
            if(!error) {
                res.send(rows)
            } else {
                console.log(error);
            }
        });
        //response.send(`Pokemon names: ${pokemon}`);
    
};
exports.searchPokemon = (req, res) => {
        const pokemon = db.selectPokemonByColumn(req);
        console.log(pokemon);
        res.send(pokemon);
};