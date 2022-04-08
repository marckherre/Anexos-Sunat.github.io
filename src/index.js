import app from "./app";
import { Server as websocketServer } from "socket.io";
import http from "http";
import sockets from "./sockets";
import { connectDB } from "./db";
import {PORT}  from './config'

connectDB();

const server = http.createServer(app);
const httpServer = server.listen(PORT);
console.log(`Connect on port ${PORT}`);

const io = new websocketServer(httpServer);
sockets(io);
