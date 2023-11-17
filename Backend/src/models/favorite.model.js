module.exports = (sequelize, Sequelize) => {
    const Favorite = sequelize.define("Favorite", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      state: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      tipo:{
        type: Sequelize.String,
      }
  
    });
    return Favorite;
  };
