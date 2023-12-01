const { Models } = require("../db.js");

const getVisualizeBookingService = async(StudentId) =>{
    try{
        const booking = await Models.Booking.findAll({
            where:{
                StudentId:StudentId
            },
        });
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

const getLastBookingsService =async() =>{
    try {
        const lastBookings = await Models.Booking.findAll({
            order:[
                ['createdAt', 'DESC'],
            ],
            limit: 2
        });
        return lastBookings
    } catch (error) {
        throw Error("Error while getting last Bookings: " + e);
    }
}

module.exports ={
    getUpdateBookingService,
    getVisualizeBookingService,
    getLastBookingsService,
}