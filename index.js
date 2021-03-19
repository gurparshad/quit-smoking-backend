const app = require("./src/app");
const http = require("http");
const { sequelize } = require("./models");
const socket = require("socket.io");
const server = http.createServer(app);
const io = socket(server);

io.on("connection", (socket) => {
  socket.emit("your id", socket.id);
  socket.on("send message", (body) => {
    io.emit("message", body);
  });
});

server.listen(3002, async () => {
  console.log("app is running");
  await sequelize.authenticate();
  console.log("database connected");
});
