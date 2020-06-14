var express = require('express'),
    ejs = require('ejs');

var app = express();


//Hay que indicarle a node que view engine se va a usar
app.set('view engine', 'ejs');

//Hay que indicarle a node donde estarán los acrhivos públicos
app.use(express.static('public'));


/*  probando un template con EJS
 res.type indica el tipo de la respuesta, si no se pone el navegador lo
 averigua por si mismo, si se pone se ahorra tiempo en tener que buscarlo.
 res.render procesa la vista que le indiquemos, le pasa los parametros
 que haya en el objeto como segundo argumento. Como tercer argumento tiene una
 función callback.
 Si usa el callback hay que poner explicitamente que envíe la vista procesada
 con res.send()
 */
app.get('/', function(req, res){
    res.type('text/html');
    res.render('index', {
        pagina:1
    }, function(err, html){
        if(err) throw err;
        res.send(html);
    });
});

app.get('/Acerca', function(req, res){
    res.type('text/html');
    res.render('index', {
        pagina:2
    }, function(err, html){
        if(err) throw err;
        res.send(html);
    });
});

app.get('/Destino', function(req, res){
    res.type('text/html');
    res.render('index', {
        pagina:3
    }, function(err, html){
        if(err) throw err;
        res.send(html);
    });
});

app.get('/Listado', function(req, res){
    res.type('text/html');
    res.render('index', {
        pagina:4
    }, function(err, html){
        if(err) throw err;
        res.send(html);
    });
});

app.get('/Contactenos', function(req, res){
    res.type('text/html');
    res.render('index', {
        pagina:5
    }, function(err, html){
        if(err) throw err;
        res.send(html);
    });
});


//Error 404
app.use(function(req, res){
    res.type('text/html');
    res.status(404);
    res.render('index', {
        pagina:6
    }, function(err, html){
        if(err) throw err;
        res.send(html);
    });

});

// Pagina de error 500
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function(){
    console.log( 'Servidor iniciado en http://localhost:' +
    app.get('port') + '; presiona Ctrl-C para terminar.' );
});