const Router = require ("express")

const
{updateBooking,
getVisualizeBooking,
getLastBookings,
<<<<<<< HEAD
getMostRequestedBooks}
=======
createBooking}
>>>>>>> 176a52039e5389f7995a4a30d18e029d8e0b31d7
= require ('../controllers/booking.controllers.js')

const bookingRouter = Router()

bookingRouter.get(
    "/api/student/getVisualizeBooking/:id",
    getVisualizeBooking
)

bookingRouter.put(
    "/api/student/updateBooking/:id",
    updateBooking
)

bookingRouter.get(
    "/api/student/getLastBookings",
    getLastBookings
)

<<<<<<< HEAD
bookingRouter.get(
    "/api/student/getMostRequestedBooks",
    getMostRequestedBooks
)

=======
bookingRouter.post(
    "/api/student/createBooking",
    createBooking
)
>>>>>>> 176a52039e5389f7995a4a30d18e029d8e0b31d7
module.exports= bookingRouter;