import  sequelize  from "sequelize";
import db from '../db.js';

const StoreModel = db.define('stores' , {
	id: {
		type: sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false,
	},

	store_name: {
		type: sequelize.STRING,
		allowNull: false,
	},

	category_store: {
		type: sequelize.STRING,
		allowNull: false,
	},
});

export default StoreModel;
