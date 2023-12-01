const Router = require("express");

const
{getAllBook,
getBookAtribute,
updateBookAtributes,
updateStatusBooking}
= require  ('../controllers/book.controllers.js')

const bookRouter = Router();

bookRouter.get(
    '/api/student/getAllBook',
    getAllBook
);
bookRouter.get(
    '/api/student/getBookAtribute/:id',
    getBookAtribute
)
bookRouter.put(
    '/api/stufent/updateBookAtributes',
    updateBookAtributes
)
bookRouter.put(
    '/api/student/updateStatusBooking/:id',
    updateStatusBooking
)

module.exports=bookRouter;