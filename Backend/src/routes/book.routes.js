const Router = requiere("express");

import 
{getAllBook,
getBookAtribute,
updateBookAtributes,
updateStatusBooking}
from  '../controllers/book.controllers.js'

const bookRouter = Router();

bookRouter.get(
    '/api/student/getAllBook',
    getAllBook
);
bookRouter.get(
    '/api/student/getBookAtribute',
    getBookAtribute
)
bookRouter.put(
    '/api/stufent/updateBookAtributes',
    updateBookAtributes
)
bookRouter.put(
    '/api/student/updateStatusBooking',
    updateStatusBooking
)

module.exports=bookRouter;