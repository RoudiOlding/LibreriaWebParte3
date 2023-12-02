const { Models,Sequelize } = require("../db.js");

const createBookingService = async(body)=>{
    try {
        const newbooking = await Models.Booking.create(body);
        return newbooking
    } catch (error) {
        throw Error("Error while creating Booking"+ error);
    }
}

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
                id:body.id,
            },
        });
        await booking.update({
            startDate:body.startDate,
            endDate:body.endDate,
            StudentId:body.StudentId,
            BookId:body.BookId,
        });
    }catch(error){
        throw Error("Error while update Booking: " + error);
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
    } catch(error) {
        throw Error("Error while getting last Bookings: " + error);
    }
};

const getMostRequestedBooksService =async() =>{
    try {
        const mostRequestedBooks = await Models.Booking.findAll({
            attributes: ['bookId', [Models.Sequelize.fn('COUNT', 'bookId'), 'requestCount']],
            group: ['bookId'],
            order: [[Models.Sequelize.literal('requestCount'), 'DESC']],
            limit: 2
        });
        return mostRequestedBooks
    } catch(error) {
        throw Error("Error while getting most requested Bookings: " + error);
    }
};

module.exports ={
    getUpdateBookingService,
    getVisualizeBookingService,
    getLastBookingsService,
<<<<<<< HEAD
    getMostRequestedBooksService,
=======
    createBookingService
>>>>>>> 176a52039e5389f7995a4a30d18e029d8e0b31d7
}