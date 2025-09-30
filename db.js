import { Sequelize } from "sequelize";

class DBInstance {
	constructor () {
		const dbCfg = {
			user: 'postgres',
			host: 'localhost',
			database: 'test_node',
			password: '',
			port: 5432,
		};
		this.sequelize = new Sequelize(dbCfg.database, dbCfg.user, dbCfg.password, {
			host: dbCfg.host,
			dialect: 'postgres',
			logging: false,
		});
	}
}

export default new DBInstance().sequelize;
