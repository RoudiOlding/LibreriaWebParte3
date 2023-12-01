const Router = require ("express")

const{ 
    updateBooking,
getVisualizeBooking,
} = require ('../controllers/booking.controllers.js')

const bookingRouter = Router()

bookingRouter.get(
    "api/student/getVisualizeBooking/:id",
    getVisualizeBooking
)

bookingRouter.post(
    "api/student/updateBooking/:id",
    updateBooking
)

module.exports= bookingRouter;