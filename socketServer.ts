// import { Server as SocketIOServer } from "socket.io";

// import http from "http";

// export const initSocketServer = (server: http.Server) => {
//   const io = new SocketIOServer(server);

//   io.on("connection", (socket:any) => {
//     console.log('Connect Socket IO  ...');

//     socket.on("notification", (data:any) => {
//       io.emit("newNotification", data);
//     });

//     socket.on("newMessage", (dataM:any) => {
//       io.emit("newChat", dataM); 
//     });

//     socket.on("disconnect", () => {
//       console.log('Disconnect Socket IO ...');
//     });
//   });
// };
