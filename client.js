const mensajes = document.getElementById('mensajes');
const msgForm = document.getElementById('msgForm');

const socket = io('http://localhost:3000');

// socket.on('connect', ()=>{
//     console.log('Cliente conectado al servidor');
// }
// );
// Evento que se activa cuando el cliente recibe un mensaje del servidor
socket.on('message', data =>{
    // console.log(data);
    // Agregamos el mensaje recibido a la lista de mensajes en la interfaz de usuario
    agregarMensaje(data);
});

// Evento que se activa cuando se envía el formulario de mensaje
msgForm.addEventListener('submit', e=>{
    e.preventDefault();
    // Enviamos el mensaje al servidor a través del socket con el evento 'chatmsg'
    socket.emit('chatmsg', msgForm.msg.value);
    // Limpiamos el campo de texto del formulario
    msgForm.msg.value = '';
})
// Función para agregar un mensaje a la lista de mensajes en la interfaz de usuario
function agregarMensaje(mensaje){
    // Creamos un HTML con el mensaje recibido y lo agregamos al elemento HTML 'mensajes'
    const html = `<div>${mensaje} </div>`;
    mensajes.innerHTML += html;
}