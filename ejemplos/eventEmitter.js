'use strict';

const EventEmitter = require('events');  //es un creador de objetos 

//revisar en node.js.org la sección de events 

const emisor = new EventEmitter();

//nos suscribimos a el y cada vez que sale el evento ejecuta la funcion
emisor.on('Llamada de teléfono', function(quienLlama){
    if (quienLlama === 'madre') {
        return;
    }
    console.log('Ring Ring')
});

//si solo queremos que el lisener se ejecute una vez 
emisor.once('Llamada de teléfono', function(quienLlama){
    console.log('vibra vibra')
});

//emitimos el evento
emisor.emit('Llamada de teléfono', 'madre')
emisor.emit('Llamada de teléfono', 'madre')
emisor.emit('Llamada de teléfono', 'madre')