// import sequelize from "sequelize";
// import db from '../db.js';
// import UserModel from "./Users.js";
// import StoreModel from "./Stores.js";

// const TicketModel = db.define('tickets', {
// 	id: {
// 		type: sequelize.INTEGER,
// 		autoIncrement: true,
// 		primaryKey: true,
// 		allowNull: false,
// 	},
// 	date_time: {
// 		type: 'TIMESTAMP',
// 		allowNull: false,
// 	},
// 	status: {
// 		type: sequelize.ENUM(['Creado', 'Confirmado', 'Atendido', 'Cancelado', 'En progreso']),
// 		allowNull: false,
// 	},
// 	observation: {
// 		type: sequelize.TEXT,
// 		allowNull: false
// 	},
// 	end_date_time: {
// 		type: 'TIMESTAMP',
// 		allowNull: false,
// 	}
// });

// UserModel.hasMany(TicketModel, {
// 	foreignKey: {
// 		name: 'user_id',
// 		type: sequelize.STRING,
// 		allowNull: false,
// 	},
// });

// StoreModel.hasMany(TicketModel, {
// 	foreignKey: {
// 		name: 'store_id',
// 		type: sequelize.INTEGER,
// 		allowNull: false,
// 	},
// })

// export default TicketModel;
