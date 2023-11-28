const { Connection } = require("pg");
const { Models } = require("../db.js");

const createFavoriteService = async(librofav)=>{
    try {
        const newFavorite = await Models.Favorite.create({
            id: librofav.name,
            state: true,
            tipo: librofav.tipo,
            StudentId: librofav.StudentId,
            BookId: librofav.BookId
        });
        return newFavorite;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const getFavoriteList= async(StudentId)=>{
    try {
        const ListaFavoritos = await Models.Favorite.findAll({
            where:{
                StudentId: StudentId
            }
        })
        return ListaFavoritos
    } catch (error) {
        console.error(error);
        return null
    }
}   

const removeLibroFavorito = async (librofav)=>{
    try {
        const removerFav = await Models.Favorite.remove({
            where:{
                StudentId:librofav.StudentId,
                BookId: librofav.BookId
            }
        })
        return removerFav;
    } catch (error) {
        console.error(error);
        return null
    }
}

const service = {getFavoriteList,createFavoriteService,removeLibroFavorito}

export default service
//Todo lo que hace lo favorito

/*
    Acciones & Atributos:
        1. Agregar un libro a favorito
            a. Cambia el estado del favorito, de "True" a "False" su estado
            b. Se selecciona a que lista de favorito irá
        2.  Crear una lista de favorito
            a. Se crea una nueva lista de favoritos
            b. Tiene: TipoFavorito y libros asociados  
*/