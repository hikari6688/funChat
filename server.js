const httpServer = require("http").createServer((req,res)=>{
});
const io = require("socket.io")(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
      }
    // ...
  });
  
  io.on("connection", (socket) => {
      console.log('链接建立成功')
      socket.on("talk", (arg) => {
        // 推送用户会话
        socket.broadcast.emit("cast", arg);
      });
    // ...
  });
httpServer.listen(3000);