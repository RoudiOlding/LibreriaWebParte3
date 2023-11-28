const Router = require("express");

import control from "../controllers/favorite.controllers";

const favoriteRouter = Router();

favoriteRouter.get(
    "api/student/getFavoriteList",
    control.getFavoriteList
)


favoriteRouter.delete(
    "api/student/removeLibro",
    control.removeLibro
)

favoriteRouter.post(
    "api/student/createFavorite",
    control.createFavorite
)

module.exports = favoriteRouter;