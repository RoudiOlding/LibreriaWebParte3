const { Models } = require("../db.js");

//Todo lo que hace el alumno

/*
    Acciones & Atributos:
        1. Buscar libros
            a. INgresas palabras clave o filtrados, para obtener resultados
        2. Reservar libros:
            a. Selecciona el libro que tiene prestado
            b. Clickea en devolver y el libro cambia su atributo "prestado: true" a "prestado: false"
        3. Crear lista de libros favoritos:
            a. Puede agregar libros a la lista
            b. Puede crear nuevas listas (con nombre personalizado)
        4. Modificar su cuenta:
            a. Nombres, Tipo de documento, apellido, nro de documento, correo, contraseña
        5. Resgirar cuenta
            a. Nombres, Apellidos, Tipo de documento, nro de documento, tipo de documento, correo, contraseña
        
*/