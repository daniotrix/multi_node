const {
    crearArchivo: tabla,
    listarTabla: listabla
} = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log('listar');
        listabla(argv.base, argv.limite);
        break;

    case 'crear':
        console.log('limite', argv.limite);
        tabla(argv.base, argv.limite).then(archivo => console.log(`Archivo creado`, colors.green(archivo))).catch(err => console.log(err));

        break;
    default:
        console.log('comando no reconocido');

}
// let base = 'asd';
// let argv2 = process.argv;