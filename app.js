let moduloUsuarios = require('./usuarios');
let process = require('process');
let comando = process.argv[2];

switch (comando) {

    case 'registro':
        let nombre = process.argv[3];
        let mail = process.argv[4];
        let password = process.argv[5];
        if (nombre == undefined || mail == undefined || password == undefined) {
            console.log('______________________________________________________________.');
            console.log('_____  Debe ingresar: nombre, mail y contraseña  ______________');
            console.log('_______________________________________________________________');
            break;
        }
        moduloUsuarios.registro(nombre, mail, password);
        console.log('______________________________________________________________.');
        console.log('___ Usuario creado correctamente. Ya puede iniciar sesión  ____');
        console.log('_______________________________________________________________');
        break;

    case 'login':
        let mailLogin = process.argv[3];
        let passwordLogin = process.argv[4];
        if (mailLogin == undefined || passwordLogin == undefined) {
            console.log('______________________________________________________________.');
            console.log('_______  Debe escribir su mail y su contraseña   ______________');
            console.log('_______________________________________________________________');
            break;
        }
        let usuarioLogin = moduloUsuarios.login(mailLogin, passwordLogin);
        if (usuarioLogin == undefined) {
            console.log('______________________________________________________________.');
            console.log('___ No encontramos un usuario con estas credenciales __________');
            console.log('_______________________________________________________________');
        } else {
            console.log('______________________________________________________________.');
            console.log(`__  Sesion iniciada, ¡Bienvenidx ${usuarioLogin.nombre}!  _____`);
            console.log('_______________________________________________________________');
        }
        break;

    case 'eliminar':
        let mailEliminar = process.argv[3];
        let passwordEliminar = process.argv[4];
        let resultado = moduloUsuarios.eliminar(process.argv[3], process.argv[4])
        if (resultado) {
            console.log('______________________________________________________________.');
            console.log('_____________  Usuario eliminado correctamente  _______________');
            console.log('_______________________________________________________________');

        } else {
            console.log('______________________________________________________________.');
            console.log('_____  No encontramos un usuario con estas credenciales _______');
            console.log('_______________________________________________________________');
        }
        break;
}



