import { Server } from "@hocuspocus/server";

const server = Server.configure({
  port: 1234,
});

server.listen();
