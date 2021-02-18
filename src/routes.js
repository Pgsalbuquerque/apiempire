const { Router } = require('express');

const routes = new Router();

routes.get("/", (req, res) => {
    return res.send({"Configuração": "Sucesso"})
});

module.exports = routes;