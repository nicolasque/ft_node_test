import StoreModel from "../models/Stores.js";

class StoreControler {
	cosntructor() {
	}

	async create(req, res) {
		try {
			const storeModel = await StoreModel.create(req.body);
			if (storeModel)
				res.status(200).send({ status: true, id: storeModel.id });
		}
		catch (error)
		{
			res.status(500).send({error: error});
		}
	}
}

export default new StoreControler();