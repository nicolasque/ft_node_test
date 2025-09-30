import UserControler from "./controllers/Users.js";
import StoreControler from "./controllers/Stores.js";
import TiketControler from "./controllers/Tickets.js";

const rutas = [
	{
		method: "POST",
		url: "/usuarios",
		handler: UserControler.create,
	},
	{
		method: "GET",
		url: "/usuarios",
		handler: async (req, res) => {
			res.status(200).send({status: "OK - GET"});
		}
	},
	{
		method: "PUT",
		url: "/usuarios",
		handler: async (req, res) => {
			res.status(200).send({status: "OK - PUT"});
		}
	},
	{
		method: "DELETE",
		url: "/usuarios",
		handler: async (req, res) => {
			res.status(200).send({status: "OK - DELETE"});
		}
	},

	//Rutas de tiendas
	{
		method: "POST",
		url: "/tiendas",
		handler: StoreControler.create,
	},

	//Ruta de tikets
		{
		method: "POST",
		url: "/ticket",
		handler: TiketControler.create,
	},
]

export default rutas;