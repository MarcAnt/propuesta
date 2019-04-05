document.addEventListener('DOMContentLoaded', function() {
    let counterClick = 0; 
     
    const titulos = document.getElementById('titulos');
    const imagen = document.getElementById('imagen');
    const comentario = document.getElementById('comentario');
    const indicaciones = document.getElementById('indicaciones');
    const contenedor = document.getElementById('content'); 
    const preguntas = document.getElementById('preguntas'); 
    const preguntasContent = document.getElementById('preguntas-content'); 

    const opc1 =  document.getElementById('opcion-1');
    const opc2 =  document.getElementById('opcion-2');
    const opc3 =  document.getElementById('opcion-3');
    const opc4 =  document.getElementById('opcion-4');
    

    document.addEventListener('keydown', e => {
        // console.log(e)
        
        //tecla flecha abajo o enter para cambiar la vista o avanzar
        if(e.keyCode === 40 || e.keyCode === 13) {
            counterClick ++; 

            if(counterClick === 1) {
                preguntas.style.display = 'none'
                preguntasContent.style.display = 'none'

                contenedor.style.backgroundColor = 'pink'    

                titulos.style.fontSize = '5em'
                titulos.textContent = 'Distancia'
                imagen.src = 'img/mapa.jpg'
                comentario.style.fontSize = '2em'
                comentario.textContent = 'Vivimos lejos pero no lo suficiente para habernos conocido y estar más cerca'
                indicaciones.textContent = ''

            }else if(counterClick === 2) {

                contenedor.style.backgroundColor = 'purple'    
                imagen.src = 'img/badoo2.png'
                titulos.textContent = 'El camino'
                comentario.textContent = 'Nos conocimos por medio de un algoritmo que nos unió mucho más pero no aun lo suficiente'

            }else if(counterClick === 3) {

                titulos.textContent = 'El encuentro'
                imagen.style.width = '250px'
                imagen.style.height = '300px'

                imagen.src = 'img/us1.jpg'
                contenedor.style.backgroundColor = 'orange'    
                comentario.textContent = 'Es para mi lo mejor que ha pasado hasta el momento, haberte conocido y llegar hasta este punto que ya marcó un hito en mi vida'

            }else if(counterClick === 4) {

                titulos.textContent = 'Un juego'

                contenedor.style.backgroundColor = 'olive'   
                imagen.style.width = '250px'
                imagen.style.height = '300px'
                imagen.src = 'img/snorlax.png'
                comentario.textContent = 'En tres preguntas sobre mi vida, tendrás el poder para desbloquearme. Suerte! ;) PD: Si respondes mal, se reinicia todo :('

            }else if(counterClick === 5) {
                preguntas.style.display = 'block'
                preguntasContent.style.display = 'flex'

                contenedor.style.backgroundColor = 'deepskyblue'  
                imagen.style.display = 'none'
                comentario.style.display = 'none'
                titulos.style.display = 'none'

                preguntas.textContent = '¿Cuál de estos es mi segundo apellido?'
                opc1.textContent = 'Barrios'
                opc2.textContent = 'Manzo'
                opc3.textContent = 'Gorrin'
                opc4.textContent = 'Fuenmayor'

                end = false
                preguntasContent.addEventListener('click', e => {
                    if(e.target.textContent == 'Barrios') {

                        Swal.fire({
                            type: 'success',
                            title: 'Correcto',
                            text: 'Vamos a la siguiente pregunta!',
                        })
                        setTimeout(() => {
                            
                            preguntas.textContent = '¿De que asignatura soy profesor?'
                            opc1.textContent = 'Ninguna'
                            opc2.textContent = 'Física'
                            opc3.textContent = 'Matemáticas'
                            opc4.textContent = 'Biología'
                        }, 1500);
        
                    }else if(e.target.textContent == 'Ninguna') {
                        Swal.fire({
                            type: 'success',
                            title: 'Correcto',
                            text: 'Vamos a la siguiente pregunta!'
                        })
                        setTimeout( ()=> {
                            
                            preguntas.textContent = '¿Cuál es mi super heroe favorito?'
                            opc1.textContent = 'Jesús Cristo'
                            opc2.textContent = 'Spider Man'
                            opc3.textContent = 'La hormiga atómica'
                            opc4.textContent = 'Don Ramon'
                        },1500)

                    }else if(e.target.textContent == 'Spider Man') {
                        Swal.fire({
                            type: 'success',
                            title: 'Correcto',
                            text: 'Lo has logrado!'
                        })
                            
                        end = true 
                      
                    }else {
                        counterClick = 0; 
                        Swal.fire({
                            type: 'error',
                            title: 'Incorrecto! :(',
                            text: 'Desde el principio'
                        })

                        setTimeout(() => {
                            document.location.reload(true)
                        }, 1500);
                    }
                    
                    
                    if(end) {
                    
                        imagen.style.display = 'block'
                        comentario.style.display = 'block'
                        titulos.style.display = 'block'
        
                        preguntas.style.display = 'none'
                        preguntasContent.style.display = 'none'
        
                        titulos.textContent = 'Respondiste a mis preguntas'
                        imagen.style.width = '300px'
                        imagen.style.height = '300px'
        
                        imagen.src = 'img/tuyyo.jpg'
                        contenedor.style.backgroundColor = 'green'    
                        comentario.textContent = 'Cuando más me hiciste falta, sin conocerte, en algún momento tenías que llegar y aquí estás.'
                    }
                
                })
            }else if(counterClick === 6) {

                imagen.style.width = '250px'
                imagen.style.height = '300px'
                
                imagen.src = 'img/us.jpg'
                titulos.style.color = 'red'
                titulos.textContent = 'Solo te pido que... 💓'
                comentario.textContent = 'A tu derecha, tienes un pequeño papel que quiero desdobles y leas'
                contenedor.style.backgroundColor = 'blueviolet'  
            }else {
                counterClick = 0
                document.location.reload(true)
            }


              
        }

    })

})