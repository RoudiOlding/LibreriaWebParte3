module.exports = (sequelize, Sequelize) => {
    const Booking = sequelize.define("Booking", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      StudentId:{

      },
      startDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      endDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  
    return Booking;
  };