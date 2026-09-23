import Fastify from "fastify";

const app = Fastify({
    logger: true,
});

app.get("/", async () => {
    return {
        message: "Finora API",
    };
});

app.listen({ port: 3333 }).catch((error) => {
    app.log.error(error);
    process.exit(1);
});