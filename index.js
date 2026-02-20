const { exec } = require('child_process');

const sites = [
    "https://www.google.com",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Rick Roll
    "https://pt.wikipedia.org/wiki/Special:Random" // Página aleatória da Wiki
];

function abrirSite() {
    const site = sites[Math.floor(Math.random() * sites.length)];
    exec(`start ${site}`);
}

setInterval(abrirSite, 5000); // Abre um site a cada 20 segundos