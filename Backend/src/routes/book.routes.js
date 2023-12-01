const Router = require("express");

const
{getRegisterBook,
getAllBook,
getBookAtribute,
updateBookAtributes,
updateStatusBooking}
= require  ('../controllers/book.controllers.js')

const bookRouter = Router();
bookRouter.post(
    '/api/student/getRegisterBook',
    getRegisterBook
);
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