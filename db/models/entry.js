const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Entry extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'id_user' });
    }
  }
  Entry.init(
    {
      title: DataTypes.STRING,
      body: DataTypes.TEXT,
      id_user: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Entry',
    }
  );
  return Entry;
};
