import sequelize from "../config/db.sequelize.js";
import { DataTypes, Model } from "sequelize";

class CountryModel extends Model {}

CountryModel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'country',
  freezeTableName: true,
  underscored: true
});

export default CountryModel;