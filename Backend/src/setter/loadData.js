const { registerBookService } = require("../service/book.service");
const {createBooking} = require("../service/booking.service")
const {createFavoriteService} = require("../service/favorite.service");
const favoritos = require("./favoriteData");
async function seedBook() {
    try {
      const books = require("./bookData");
  
      books.map((book, id) => {
        const body = {
          id:id,
          qualification:book.formato,
          author:book.autor,
          editorial:book.editorial,
          category:book.categoria,
          anio:book.anio,
          language:book.idioma,
          nropages:book.nPaginas,
          binding:book.encuadernacion,
          isbn13:book.ISBN13,
          photobook:book.FotoLibro,
          title:book.titulo,
          cont: book.pedidos,
          ReturnDate: book.FechaDevolucion,
        };
        registerBookService(body)
          .then((result) => {
            console.log("Data inserted:", result);
          })
          .catch((error) => {});
      });
      console.log("Libros agregadas con éxito.");
    } catch (error) {
      console.log("error on seedBook");
    }
  }
async function seedBooking(){
    try {
      const booking = require ("./bookigData")

      booking.map((Booking,id)=>{
        const body ={
          id:id,
          StudentId: Booking.StudentId,
          BookingId: Booking.BookingId,
          startDate: Booking.startDate,
          endDate: Booking.endDate
        };
        createBooking(body).then((result)=>{
          console.log("Data insertada:",result);
        }).catch((error)=>{});
      });
      console.log("Prestamos agregados exitosamente")
    } catch (error) {
      console.log(error)
    }
  }
  async function seedFavorites(){
    try {
      const favorite =require("./favoriteData")

      favorite.map((favoritos,id)=>{
        const body ={
          id:id,
          StudentId : favoritos.StudentId,
          BookingId: favoritos.StudentId,
        };
        createFavoriteService(body).then((result)=>{
          console.log("Data insertada",result);
        }).catch((error)=>{});
      });
    } catch (error) {
      console.log(error)
    }
  }
  const loadData = async () => {
    const seeders = [
        seedBook,
        seedBooking,
        seedFavorites
    ];
  
    for (let seed of seeders) {
      await seed();
    }
  };
  
  module.exports = loadData;
