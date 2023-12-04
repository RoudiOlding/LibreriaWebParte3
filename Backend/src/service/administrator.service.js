const { Models } = require("../db.js");

<<<<<<< HEAD
const getRegisterAdministratorService = async (body) =>{
    try{
        const administrator = await Models.Administrator.create({
            name:body.name,
            lastName:body.lastName,
            email:body.email,
            password:body.password,
            identityDoc:body.identityDoc,
            photo:body.photo,
            language:body.language,
            prefix:body.prefix,
            colorfavorite:body.colorfavorite,
        });
        return administrator;
    }catch(e){
        throw Error("Error while creating Administrator: " + e);
    }
}
const getUpdateAdministratorService = async (body) =>{
    try{
        const administrator = await Models.Administrator.findOne({
            where:{
                id: AdministratorId,
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
       return administrator;
    }catch(e){
        throw Error("Error while update Administrator: " + e);
    }
}
const getVisualiseAdministratorService = async (AdministratorId) =>{
    try{
        const administrator = await Models.Administrator.findOne({
            attributes: ["name","lastName","email","password","identityDoc","photo"],
            where:{
                id:AdministratorId,
            },
        });
      return administrator;
    }catch(e){
        throw Error("Error while visualise Administrator: " + e);
    }
};
module.exports ={
    getRegisterAdministratorService,
    getUpdateAdministratorService,
    getVisualiseAdministratorService,
};
=======
//Todo lo que hace el administrador

/*
    Acciones & Atributos:
        1. Agregar libros
            a. Todos los atributos de un libro puede agregar
        2. Buscar libros:
            a. Por nombre unicamente
        3. Modificar su cuenta:
            a. Nombres, Tipo de documento, apellido, nro de documento, correo, contraseña, idioma, prefijo, color
*/
>>>>>>> c586d38d4dc142745bbc6feca14bbe92acf72131

