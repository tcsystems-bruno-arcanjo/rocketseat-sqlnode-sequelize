const { Model, DataTypes } = require('sequelize');

class Address extends Model {
  static init(connection) {
    super.init({
      zipCode: DataTypes.STRING,
      street: DataTypes.STRING,
      number: DataTypes.INTEGER,
    }, {
      sequelize: connection
    })
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'owner' });
  }
}

module.exports = Address;