const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        //demand: true,
        alias: 'l',
        default: 10

    }
}

const argv = require('yargs').command(
        'listar', 'Imprime en consola la tabla de multiplicar', opts
    ).command(
        'crear', 'Crear un archivo con base a un base y un limite', opts
    )
    .help()
    .argv;

module.exports = {
    argv
}