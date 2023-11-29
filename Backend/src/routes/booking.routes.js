const Router = require ("express")

const
{updateBooking,
getVisualizeBooking}
= require ('../controllers/booking.constroller.js')

const bookingRouter = Router()

bookingRouter.get(
    "api/student/getVisualizeBooking",
    getVisualizeBooking
)

bookingRouter.post(
    "api/student/updateBooking",
    updateBooking
)

module.exports= bookingRouter;