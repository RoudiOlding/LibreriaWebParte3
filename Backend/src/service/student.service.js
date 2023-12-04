const { Models } = require("../db.js");

<<<<<<< HEAD
const getRegisterStudentService = async (body) =>{
    try{
        const student = await Models.Student.create({
            name:body.name,
            lastName:body.lastName,
            email:body.email,
            password:body.password,
            identityDoc:body.identityDoc,
            photo:body.photo,
        });
        return student;
    }catch(e){
        throw Error("Error while creating Student: " + e);
    }
}
const getUpdateStudentService = async (body) =>{
    try{
        const student = await Models.Student.findOne({
            where:{
                id: StudentId,
            },
        });
        await patiend.update({
            name:body.name,
            lastName:body.lastName,
            email:body.email,
            password:body.password,
            identityDoc:body.identityDoc,
            photo:body.photo
        });
       return student;
    }catch(e){
        throw Error("Error while update Student: " + e);
    }
}
const getVisualiseStudentService = async (StudentId) =>{
    try{
        const student = await Models.Student.findOne({
            attributes: ["name","lastName","email","password","identityDoc","photo"],
            where:{
                id:StudentId,
            },
        });
      return student;
    }catch(e){
        throw Error("Error while visualise Student: " + e);
    }
};
module.exports ={
    getRegisterStudentService,
    getUpdateStudentService,
    getVisualiseStudentService,
};
=======
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
>>>>>>> c586d38d4dc142745bbc6feca14bbe92acf72131
