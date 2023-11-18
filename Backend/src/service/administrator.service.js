const { Models } = require("../db.js");

const getRegisterAdministratorService = async (body) =>{
    try{
        const administrator = await Models.Administrator.create({
            name:body.name,
            lastName:body.lastName,
            email:body.email,
            password:body.password,
            identityDoc:body.identityDoc,
            photo:body.photo,
        });
        return student;
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
            attributes: ["name","lastName","email","password","identityDoc","photo"]
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
