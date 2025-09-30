import Fastify from "fastify";
import db from "./db.js";
import rutas from "./rutas.js";
import cors from '@fastify/cors';

const fastify = Fastify({logger:true});
await fastify.register(cors, {

});

fastify.get("/", async function name(req, res) {
	return ({hello : " world"})
});

rutas.forEach((ruta) => {
	fastify.route(ruta);
});

async function database() {
	try {
		db.sync();
		console.log("Conectado a la base de datos");
	} catch (error)
	{
		console.log(error);
	}
}

try
{
	fastify.listen({port:3500});
	database();
} catch (error)
{
	console.log(error);
}
