'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserCard = sequelize.define('UserCard', {
    UserId: DataTypes.INTEGER,
    CardId: DataTypes.INTEGER
  });
  return UserCard;
};
