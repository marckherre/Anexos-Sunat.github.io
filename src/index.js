import app from "./app";
import { Server as websocketServer } from "socket.io";
import http from "http";

import { connectDB } from "./db.js";

connectDB();

const server = http.createServer(app);
const httpServer = server.listen(3000);
const io = new websocketServer(httpServer);

console.log("Connect on port 3000");