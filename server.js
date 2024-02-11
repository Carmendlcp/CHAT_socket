// Importamos la librería 'socket.io' y la inicializamos con un servidor en el puerto 3000
const io = require('socket.io')(3000,
    {//lo de cors no se si podríamos eliminarlo...
    cors: {
    // Permitimos solicitudes solo desde esta URL
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST"],
    credentials:true,
}});
// Evento que se activa cuando un cliente se conecta al servidor de Socket.IO
io.on('connection', (socket)=>{
    console.log('Usuario conectado');
    socket.emit('message', 'Bienvenido a nuestro CHAT');// Mensaje de bienvenida al cliente que se ha conectado (Supongo que podríamos eliminarlo). 
        
    socket.on('disconnect', ()=>{ 
        console.log('Usuario desconectado');
    });
    // Evento personalizado 'chatmsg' que se activa cuando un cliente envía un mensaje de chat
    socket.on('chatmsg', msg =>{
        io.emit('message', msg);
    })
});
