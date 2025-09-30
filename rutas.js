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
		handler: UserControler.getAll,
	},
	{
		method: "GET",
		url: "/usuarios/:id",
		handler: UserControler.getOne,
	},
	{
		method: "PUT",
		url: "/usuarios/:id",
		handler: UserControler.update,
	},
	{
		method: "DELETE",
		url: "/usuarios/:id",
		handler: UserControler.delete,
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