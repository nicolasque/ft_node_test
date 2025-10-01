// import StoreModel from "../models/Stores.js";
// import UserModel from "../models/Users.js";

// class StoreControler {
// 	cosntructor() {
// 	}

// 	async create(req, res) {
// 		try {
// 			const storeModel = await StoreModel.create(req.body);
// 			if (storeModel)
// 				res.status(200).send({ status: true, id: storeModel.id });
// 		}
// 		catch (error) {
// 			res.status(500).send({ error: error });
// 		}
// 	}

// 	async getAll(req, res) {
// 		try {
// 			const where = { ...req.query };
// 			const lista = await StoreModel.findAll({ where });
// 			res.status(200).send(lista);
// 		} catch (error) {
// 			res.status(500).send({ error: error });
// 		}
// 	}

// 	async getOne(req, res) {
// 		try {
// 			const { id } = req.params;
// 			const storeModel = await StoreModel.findByPk(id);

// 			if (storeModel)
// 				res.status(200).send(storeModel);
// 			else
// 				res.status(404).send({ message: 'Registro no encontrado', });
// 		} catch (error) {
// 			res.status(500).send({ error: error });
// 		}
// 	}

// 	async update(req, res) {
// 		try {
// 			const { id } = req.params;
// 			const data = { ...req.body };

// 			delete data.id;

// 			const storeModel = await StoreModel.update(data, { where: { id } });
// 			if (typeof (storeModel[0]) !== 'undefined' && storeModel[0] === 1) {
// 				res.status(200).send({ status: true });
// 			}
// 			else {
// 				res.status(404).send({ message: 'Registro no encontrado', });
// 			}
// 		} catch (error) {
// 			res.status(500).send({ error: error });
// 		}
// 	}

// 	async delete(req, res) {
// 		try {
// 			const { id } = req.params;
// 			const storeModel = await StoreModel.destroy({ where: { id } });
// 			if (storeModel)
// 				res.status(200).send({ status: true });
// 			else
// 				res.status(404).send({ message: "Registro no encontrado" });
// 		} catch {
// 			res.status(500).send({ error: error });
// 		}
// 	}
// }

// export default new StoreControler();