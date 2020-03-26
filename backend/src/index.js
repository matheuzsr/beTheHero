const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors(
  //origin : 'http://meuapp.com' onde o front esta hospedado
));
app.use(express.json());
app.use(routes)

app.listen(3333);

/**
* Rota / Recurso
*/

/** 
*  Metodo HTTP:
*
* GET: Buscar/Listar info backend
* POST: Criar info backend
* PUT: Alterar info backend
* DELETE: Deletar info backend
*/

/**
 * Tipos params
 * Query params: Param nomeados env na rota após "?" (Filtros, paginação)
 * Route params: Param utilizados para ident. recursos /:id /users/1 
 * Request Body: Corpo da requisição criar e alterar users
 * 
 * */
/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users).select.where()
 */



