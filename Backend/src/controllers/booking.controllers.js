<<<<<<< HEAD
const {getVisualizeBookingService,getUpdateBookingService,getLastBookingsService, getMostRequestedBooksService} 
=======
const {getVisualizeBookingService,getUpdateBookingService, getLastBookingsService,createBookingService} 
>>>>>>> 176a52039e5389f7995a4a30d18e029d8e0b31d7
= require("../service/booking.service.js")

const createBooking = async(req,res)=>{
    const result = await createBookingService(req.body)
    if (result)
        return res.status(200).json(result)
    else 
        return res.status(500).json ({message:"No se pudo crear"})
}

const getVisualizeBooking = async (req,res)=>{
    const id = req.params.id
    const result = await getVisualizeBookingService(id)

    if (result)
        return res.status(200).json(result)
    else
        return res.status(500).json ({message:"No encontrado"})
}

const updateBooking = async (req,res) =>{
    const result = await getUpdateBookingService(req.body)

    if (result)
        return res.status(200).json(result)
    else
        return res.status(500).json({message:"No encontrado"})
}

const getLastBookings = async (req,res) =>{
    const result = await getLastBookingsService()

    if (result)
        return res.status(200).json(result)
    else
        return res.status(500).json({message:"No encontrado"})
}

<<<<<<< HEAD
const getMostRequestedBooks = async (req,res) =>{
    const result = await getMostRequestedBooksService()

    if (result)
        return res.status(200).json(result)
    else
        return res.status(500).json({message:"No encontrado"})
}

module.exports = {updateBooking,getVisualizeBooking,getLastBookings,getMostRequestedBooks}
=======
module.exports = {updateBooking,getVisualizeBooking,getLastBookings,createBooking}
>>>>>>> 176a52039e5389f7995a4a30d18e029d8e0b31d7
