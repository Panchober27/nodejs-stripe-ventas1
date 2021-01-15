const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();


// SETTINGS.
// Configuracion de directorio de vistas.
app.set('views', path.join(__dirname, 'views'));
// Configuracion de puerto del servidor.
app.set('port', process.env.PORT || 3000);
// Configuracion de plantillas del servidor.
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
// Utilizando el motor de plantillas configurado previamente.
app.set('view engine', '.hbs');


// MIDDLEWARE.
// Cuando el usuario acepte el pago (Stripe enviara datos al servidor.)
app.use(express.urlencoded({extended: false}));
// Configuracion para que el servidor soporte formatos JSON.
app.use(express.json());


// ROUTES
// Rutas del servidor.
app.use(require('./routes/index'));


// Static files
app.use(express.static(path.join(__dirname, 'public')));


// Start server
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});
