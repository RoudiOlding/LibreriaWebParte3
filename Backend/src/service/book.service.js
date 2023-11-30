const { Models } = require("../db.js");

const getBookAtributesService = async (BookID) =>{
    try {
        return await Models.Book.findOne({
            where:{BookID}
        })
        
    } catch (error) {
        console.error(error);
        return null;
    }
}

const getAllBookService = async() =>{
    try {
        return await Models.Book.findAll()
    } catch (error) {
        console.error(error);
        return null
    }
}

const updateBookAtributesService = async (libro) =>{
    const {id} = libro;
    try {
        const result = await Models.Book.update({where:{id}})
        if (result){
            result.set(libro);
            result.save();
        }

        return result;
    } catch (error) {
        console.error(error);
        return null;
    }
}
const updateBookingBookService = async (BookId) =>{
  try{
      const book = await Models.Book.findOne({
          where:{
              BookId:BookId,
              availability:false,
          },
      });
      await book.update({
          availability: true,
          cont: cont + 1,
      })
  }catch(e){
    throw Error("Error while update Booking book: " + e);  }  
};
module.exports ={
    getBookAtributesService,
    updateBookAtributesService,
    updateBookingBookService,
    getAllBookService
}