import Fastify from "fastify";
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

try
{
	fastify.listen({port:3500});
} catch (error)
{
	console.log(error);
}
