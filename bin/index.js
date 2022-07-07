#!/usr/bin/env node
const Contenedor = require('../src/contenedor');
const args = process.argv;
const generateRandomRGB = (cantidad) => {
    const contenedor = new Contenedor(cantidad);
    const rgb = contenedor.getRGB();
    return rgb;
};
if (args) {
    const cantidad = args[2];
    const rgb = generateRandomRGB(cantidad);
} else console.log(new Error('No se ingreso ningun argumento'));

module.exports = {generateRandomRGB};