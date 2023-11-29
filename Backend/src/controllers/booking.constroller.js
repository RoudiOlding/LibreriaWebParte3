const {getVisualizeBookingService,getUpdateBookingService} 
= require("../service/booking.service.js")

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

module.exports = {updateBooking,getVisualizeBooking}