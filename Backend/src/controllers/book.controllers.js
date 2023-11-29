const
{ getBookAtributesService,
updateBookAtributesService,
updateBookingBookService,
getAllBookService } = require("../service/book.service.js")

const getAllBook =async (req,res)=>{
    const libros = await getAllBookService()
    return res.status(200).json(libros)
}



const getBookAtribute = async (req, res)=>{
    const id = req.params.id;
    const result = await getBookAtributesService(id);
    if (result)
        return res.status(200).json(result)
    else
        return res.status(500).json({message:"No encontrado"}) 
}

const updateBookAtributes = async (req,res)=>{
    const result = await updateBookAtributesService(req.body);
    if (result)
        return res.status(200).json(result)
    else
        return res.status(500).json({message:"No encontrado"})
}

const updateStatusBooking = async(req,res)=>{
    const id = req.params.id;
    const result = await getBookAtributeService(id);
    if (result){
        await updateBookingBookService(id);
        return res.status(500).json ({message:"Libro devuelto"})
    } else 
        return res.status(500).json ({message:"No encontrado"})
}

module.exports= {getAllBook,getBookAtribute,updateBookAtributes,updateStatusBooking};