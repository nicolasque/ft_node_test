import TicketModel from "../models/Tickets.js";

class TicketControler {
	cosntructor() {
	}

	async create(req, res) {
		try {
			const tiketModel = await TicketModel.create(req.body);
			if (tiketModel)
				res.status(200).send({ status: true, id: tiketModel.id });
		}
		catch (error)
		{
			res.status(500).send({error: error});
		}
	}
}

export default new TicketControler();