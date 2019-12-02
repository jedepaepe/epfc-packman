// charge le framewokr express
const express = require('express');

// charge la librairie path
const path = require('path');

// assigne le numéro de port sur lequel node va écouter
//      à partir de la variable d'environnement PORT
//      ou 5000
const PORT = process.env.PORT || 5000;

express()
    // démarre le framework express.static : sert les fichiers statiques
    .use(express.static(path.join(__dirname, 'public')))
    
    // écoute les requêtes HTTP sur le port (5000 ou autre)
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));