var express = require('express');
var nunjucks = require('nunjucks');

var app = express();

// Setup nunjucks templating engine
nunjucks.configure(['views', 'views/subpages'], {
    autoescape: true,
    express: app,
    watch: true
});

app.set('port', process.env.PORT || 3000);

// Home page
app.get('/', function(req, res) {
    res.render('subpages/index.html', {
        title: 'Pagrindinis puslapis',
        port: app.get('port')
    });
});

// Other example
app.get('/example', function(req, res) {
    res.render('subpages/example.html', {
        title: 'Egzempur',
        page: 'example',
        name: 'lukas',
        port: app.get('port')
    });
});
app.get('/aboutus', function(req, res) {
    res.render('subpages/aboutus.html', {
        title: 'Apie mus',
        page: 'aboutus',
        port: app.get('port')
    });
});
app.get('/iNaujienos', function(req, res) {
    res.render('subpages/iNaujienos.html', {
        title: 'Naujienos',
        page: 'Naujienos',
        port: app.get('port')
    });
});
app.get('/products', function(req, res) {
    res.render('subpages/products.html', {
        title: 'Produktai',
        page: 'Produktai',
        port: app.get('port')
    });
});
app.get('/media', function(req, res) {
    res.render('subpages/media.html', {
        title: 'Medija ir kontaktai',
        page: 'Medija ir Kontaktai',
        port: app.get('port')
    });
});
// Kick start our server
app.listen(app.get('port'), function() {
    console.log('Server started on port', app.get('port'));
});

app.set('view engine', 'html')