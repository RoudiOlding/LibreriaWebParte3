const Router = require ("express")

const
{updateBooking,
getVisualizeBooking,
getLastBookings,
getMostRequestedBooks}
= require ('../controllers/booking.controllers.js')

const bookingRouter = Router()

bookingRouter.get(
    "/api/student/getVisualizeBooking/:id",
    getVisualizeBooking
)

bookingRouter.post(
    "/api/student/updateBooking/:id",
    updateBooking
)

bookingRouter.get(
    "/api/student/getLastBookings",
    getLastBookings
)

bookingRouter.get(
    "/api/student/getMostRequestedBooks",
    getMostRequestedBooks
)

module.exports= bookingRouter;