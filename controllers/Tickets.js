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
		catch (error) {
			res.status(500).send({ error: error });
		}
	}

	async getAll(req, res) {
		try {
			const where = { ...req.query };
			const lista = await TicketModel.findAll({ where });
			res.status(200).send(lista);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	async getOne(req, res) {
		try {

			const { id } = req.params;
			const ticketModel = await TicketModel.findByPk(id);

			if (ticketModel)
				res.status(200).send(ticketModel);
			else
				res.status(404).send({ message: "Registro no encontrado" });
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	async update(req, res) {
		try {
			const { id } = req.params;
			const data = { ...req.body };

			delete data.id;

			const ticketModel = await TicketModel.update(data, { where: { id } });
			if (typeof (ticketModel[0]) !== 'undefined' && ticketModel[0] === 1) {
				res.status(200).send({ status: true });
			}
			else {
				res.status(404).send({ message: 'Registro no encontrado', });
			}
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

		async delete(req, res) {
		try {
			const { id } = req.params;
			const ticketModel = await TicketModel.destroy({ where: { id } });
			if (ticketModel)
				res.status(200).send({ status: true });
			else
				res.status(404).send({ message: "Registro no encontrado" });
		} catch {
			res.status(500).send({ error: error });
		}
	}
}

export default new TicketControler();