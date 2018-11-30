const fs = require('fs');
const colors = require('colors');
let listarTabla = (base, limite) => {
    console.log('=================='.red);
    console.log(`Tabla del: ${base}`.red);
    console.log('=================='.red);
    for (let i = 0; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`);
    }
}
let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`
                El parametro $ { base }
                que se introdujo, no es un numero `)
            return;
        } else {
            let contenido = '';
            for (let i = 0; i <= limite; i++) {
                contenido += `${ base } * ${ i } = ${ base * i }\n `;

            }
            fs.writeFile(`./tablas/tabla-${ base } al ${ limite }.txt`, contenido, (err) => {
                if (err)
                    reject(err)
                else
                    resolve(`tabla - ${ base } al ${ limite }.txt `);
            });
        }

    });
}
module.exports = {
    crearArchivo,
    listarTabla
}