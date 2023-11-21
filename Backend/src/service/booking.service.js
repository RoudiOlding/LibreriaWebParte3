const { Models } = require("../db.js");

const getBookingService = async(body) =>{
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
//Todo lo que hace la reserva

/*
    Acciones & Atributos:
        1. Reservar un libro
            a. Cambia el estado del libre, de "True" a "False" su estado
            b. Incrementa el "Prestado" en 1
*/
