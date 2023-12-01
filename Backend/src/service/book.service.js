const { Models } = require("../db.js");

const getRegisterBookService = async (body) =>{
    try{
        const book = await Models.Book.create({
            qualification:body.qualification,
            author:body.author,
            editorial:body.editorial,
            category:body.category,
            anio:body.anio,
            language:body.language,
            nropages:body.nropages,
            binding:body.binding,
            isbn13:body.isbn13,
            photobook:body.photobook,
            availability:body.availability,
        });
        return book;
    }catch(e){
        throw Error("Error while creating Student: " + e);
    }
}
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
    getRegisterBookService,
    getBookAtributesService,
    updateBookAtributesService,
    updateBookingBookService,
    getAllBookService
}