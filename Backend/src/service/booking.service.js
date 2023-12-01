const { Models } = require("../db.js");

const getVisualizeBookingService = async(StudentId) =>{
    try{
        const booking = await Models.Booking.findAll({
            attributes:['BookId','StudentId'],
            where:{
                StudentId:StudentId
            },
        });
        return booking; 
    }catch(e){
        throw Error("Error while visualize Student Booking: " + e);
    }
};
const getUpdateBookingService = async(body) =>{
    try{
        const booking = await Models.Booking.findOne({
            
            where:{
                id:BookingId,
            },
        });
        await booking.update({
            startDate:body.startDate,
            endDate:body.endDate,
            StudentId:body.StudentId,
            BookId:body.BookId,
        });
    }catch(e){
        throw Error("Error while update Booking: " + e);
    }
};

module.exports ={
    getUpdateBookingService,
    getVisualizeBookingService,
}