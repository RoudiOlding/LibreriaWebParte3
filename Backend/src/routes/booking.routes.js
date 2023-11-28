const Router = require ("express")

import
{updateBooking,
getVisualizeBooking}
from '../controllers/booking.constroller.js'

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