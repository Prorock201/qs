module.exports = function(sequelize, DataTypes) {
  let data = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    }
  };

  for (let i=1; i<=41; i++) {
    data[`q${i}`] = { type: DataTypes.STRING }
  }

  let User = sequelize.define("User", data);

  return User;
};