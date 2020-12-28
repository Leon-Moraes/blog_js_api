
async function connect() {
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:@localhost:3306/pokedex")
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;

}

async function selectPokemons() {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM pokemon;');
    return rows;
}

async function selectPokemonByColumn(columName,value){
    const conn = await connect();
    const [rows] = await conn.query(`SELECT * FROM pokemon WHERE ${columName} = ${value} `);
    return rows;
}

async function insertPokemon(pokemon) {
    const conn = await connect();
    const sql = 'INSERT INTO pokemon(name, location, fk_type) VALUES (?, ?, ?);';
    const values = [pokemon.name, pokemon.location, pokemon.fk_type];
    await conn.query(sql, values);

}

module.exports = {selectPokemons, insertPokemon, selectPokemonByColumn};
