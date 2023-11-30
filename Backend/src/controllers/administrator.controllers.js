const{
    getRegisterAdministratorService,
    getUpdateAdministratorService,
    getVisualiseAdministratorService,
  } = require("../service/student.service.js");
  const getRegisterAdministrator = async (req,res) =>{
    try{
      const result = await getRegisterAdministratorService(req.body);
      return res.status(200).json({
        status: 200,
        result: result,
        message: "Succesfully Administrator Register",
      });
    } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
    }
  };
  const getUpdateAdministrator = async (req,res) =>{
    try{
      const result = await getUpdateAdministratorService(req.body);
      return res.status(200).json({
        status: 200,
        result: result,
        message: "Succesfully Administrator Update",
      });
    } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
    }
  };
  const getVisualiseAdministrator = async (req, res) => {
    try {
      const result = await getVisualiseAdministratorService(req.id) || [];
  
      return res.status(200).json({
        status: 200,
        result: result,
        message: "Succesfully Administrator Returned",
      });
    } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
    }
  };
  module.exports ={
    getRegisterAdministrator,
    getUpdateAdministrator,
    getVisualiseAdministrator,
  };