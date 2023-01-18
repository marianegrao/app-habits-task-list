import Fastify from "fastify";

const app = Fastify();

app.get("/", () => {
  return "Hello Word";
});

app.listen({
  port: 3333,
});
