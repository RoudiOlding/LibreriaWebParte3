const { Models } = require("../db.js");

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

