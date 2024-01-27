import sequelize from "../config/db.sequelize.js";
import { DataTypes, Model } from "sequelize";

class ProductModel extends Model {}

ProductModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    item_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Untitled",
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Coming soon",
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    taste_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    brand_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },    
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    sequelize, 
    modelName: "products",
    freezeTableName: true,
    underscored: true,
  }
);

export default ProductModel;