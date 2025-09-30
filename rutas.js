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
	{
		method: "GET",
		url: "/tiendas",
		handler: StoreControler.getAll,
	},
	{
		method: "GET",
		url: "/tiendas/:id",
		handler: StoreControler.getOne,
	},
	{
		method: "PUT",
		url: "/tiendas/:id",
		handler: StoreControler.update,
	},
	{
		method: "DELETE",
		url: "/tiendas/:id",
		handler: StoreControler.delete,
	},


	//Ruta de tikets
	{
		method: "POST",
		url: "/tickets",
		handler: TiketControler.create,
	},
	{
		method: "GET",
		url: "/tickets",
		handler: TiketControler.getAll,
	},
	{
		method: "GET",
		url: "/tickets/:id",
		handler: TiketControler.getOne,
	},
	{
		method: "PUT",
		url: "/tickets/:id",
		handler: TiketControler.update,
	},
	{
		method: "DELETE",
		url: "/tickets/:id",
		handler: TiketControler.delete,
	},
]

export default rutas;