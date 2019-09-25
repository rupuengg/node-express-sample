'use strict';
module.exports = (sequelize, DataTypes) => {
  const auth = sequelize.define('auth', {
    token: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  auth.associate = function (models) {
    // associations can be defined here
  };
  return auth;
};