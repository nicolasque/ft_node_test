import UserModel from "../models/Users.js";

class UserControler {
	cosntructor() {
	}

	async create(req, res) {
		try {
			const userModel = await UserModel.create(req.body);
			if (userModel)
				res.status(200).send({ status: true, id: userModel.id });
		}
		catch (error)
		{
			res.status(500).send({error: error});
		}
	}
}

export default new UserControler();