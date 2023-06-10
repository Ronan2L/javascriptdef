const Papa = require('papaparse');
const fs = require('fs');
const _ = require('lodash');

// Lire le fichier CSV
const csvFile = fs.readFileSync('input.csv', 'utf8');

// Parser le CSV
const results = Papa.parse(csvFile, { header: true }).data;

// Trier les résultats par âge
const sortedResults = _.sortBy(results, ['age']);

// Convertir les résultats triés en CSV
const sortedCsv = Papa.unparse(sortedResults);

// Écrire les résultats triés dans un nouveau fichier CSV
fs.writeFileSync('output.csv', sortedCsv);

