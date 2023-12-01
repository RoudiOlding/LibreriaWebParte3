const Router = require ("express")

const
{updateBooking,
getVisualizeBooking,
getLastBookings}
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
module.exports= bookingRouter;