var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    result = require('./modules/result.json');

app.use(bodyParser());

var port = process.env.PORT || 8080;

//rotas da API
var router = express.Router();

router.get('/', function(req, res){
    res.json(result);
});

// registrando as rotas
app.use('/api', router);

//iniciando servidor
app.listen(port, function(){
    console.log('Servidor rodando na porta: ' + port);
});