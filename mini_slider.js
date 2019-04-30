
document.addEventListener('DOMContentLoaded', ()=> {

const content = document.getElementById('content'); 
let elements = null; 
let counter = 0; 
let endSlide = false; 
let colors = ['red','pink', 'purple', 'orange', '#6BB12D', 'deepskyblue','#A7383E','blueviolet'].reverse()


for(let i = 1; i  <= colors.length; i++) {

    elements = document.createElement('div')
    elements.classList.add('elements')

    imgs = document.createElement('img')
    titulo = document.createElement('h1')
    comentario = document.createElement('p')
    
    content.insertAdjacentElement('afterbegin', elements)

    elements.insertAdjacentElement('afterbegin', titulo)
    elements.insertAdjacentElement('beforeend', imgs)
    elements.insertAdjacentElement('beforeend', comentario)
    

    content.firstChild.style.backgroundColor = colors[i-1]

    if( i === 8) {
        titulo.style.fontSize = '3em'
        titulo.textContent = 'Hola, Karla'
        comentario.textContent = '(Usa la tecla de flecha para abajo o enter para continuar)'
        imgs.style.display = 'none'
    
    }else if(i === 7) {

        titulo.textContent = 'Distancia'
        comentario.textContent = 'Vivimos lejos pero no lo suficiente para habernos conocido y estar más cerca'
        imgs.src = 'img/mapa.jpg'

    }else if(i === 6) {

        titulo.textContent = 'El camino'
        comentario.textContent = 'Nos conocimos por medio de un algoritmo que nos unió mucho más pero no aun lo suficiente'
        imgs.src = 'img/badoo2.png'

        imgs.style.height = '100px'; 
        imgs.style.width = '500px'; 

    }else if(i === 5) {
        
        titulo.textContent = 'El encuentro'
        comentario.textContent = 'Es para mi lo mejor que ha pasado hasta el momento, haberte conocido y llegar hasta este punto que ya marcó un hito en mi vida'

        imgs.style.width = '250px'
        imgs.style.height = '300px'
        imgs.src = 'img/us1.jpg'

    }else if(i === 4) {
        
        titulo.textContent = 'Un juego'
        comentario.textContent = 'En tres preguntas sobre mi vida, tendrás el poder para desbloquearme. Suerte! ;) PD: Si respondes mal, se reinicia todo :('

        imgs.style.width = '250px'
        imgs.style.height = '300px'
        imgs.src = 'img/snorlax.png'

    }else if( i === 3) {

        titulo.style.display = 'none'
        comentario.style.display = 'none'
        imgs.style.display = 'none'

        preguntasContent = document.createElement('div')
      
        preguntasContent.classList.add('preguntas')
        elements.insertAdjacentElement('afterbegin', preguntasContent)

        pregunta = document.createElement('p')
        pregunta.classList.add('pregunta')
        
        opcionesContent = document.createElement('div')
        opcionesContent.classList.add('opciones-content')
        preguntasContent.insertAdjacentElement('beforeend', opcionesContent)

        for(let j = 0; j < 4; j++) {
            opciones = document.createElement('p')
            opciones.setAttribute('id', 'opcion-'+j)
            opciones.setAttribute('class', 'opciones')
            opcionesContent.insertAdjacentElement('afterbegin', opciones)
        }
        preguntasContent.insertAdjacentElement('afterbegin', pregunta)
        
        //preguntasContent.insertAdjacentText('afterbegin', '¿Cuál de estos es mi segundo apellido?')
        pregunta.textContent = '¿Cuál de estos es mi segundo apellido?'
        document.getElementById('opcion-0').textContent = 'Barrios'
        document.getElementById('opcion-1').textContent = 'Fuenmayor'
        document.getElementById('opcion-2').textContent = 'Manzo'
        document.getElementById('opcion-3').textContent = 'Gorrín'

        
        preguntasContent.addEventListener('click', e => {
            
            if(e.target.textContent == 'Barrios') {

                Swal.fire({
                    type: 'success',
                    title: 'Correcto',
                    text: 'Vamos a la siguiente pregunta!',
                })
                setTimeout(() => {
                    
                   // preguntasContent.insertAdjacentText('afterbegin', '¿De que asignatura soy profesor?')
                    //preguntasContent.insertAdjacentText('afterbegin', '¿De qué asignatura soy profesor?')

                    pregunta.textContent = '¿De qué asignatura soy profesor?'
                    document.getElementById('opcion-0').textContent = 'Ninguna'
                    document.getElementById('opcion-1').textContent = 'Física'
                    document.getElementById('opcion-2').textContent = 'Matemáticas'
                    document.getElementById('opcion-3').textContent = 'Biología'
                }, 1500);

  

            }else if(e.target.textContent == 'Ninguna') {
                
                Swal.fire({
                    type: 'success',
                    title: 'Correcto',
                    text: 'Vamos a la siguiente pregunta!'
                })
                setTimeout( ()=> {
                    pregunta.textContent = '¿Cuál es mi superhéroe favorito?'
                    
                    document.getElementById('opcion-0').textContent = 'Jesús Cristo'
                    document.getElementById('opcion-1').textContent = 'Spider Man'
                    document.getElementById('opcion-2').textContent = 'La hormiga atómica'
                    document.getElementById('opcion-3').textContent = 'Don Ramón'
                },1500)

              

            }else if(e.target.textContent == 'Spider Man') {
                
                const heart = document.createElement('div')
                heart.classList.add('heart')
                heart.setAttribute('id', 'heart')

                content.firstChild.insertAdjacentElement('afterbegin', heart)

               //Continuar el slider si ya solo se está en este punto
                document.addEventListener('keydown', slides)

                Swal.fire({
                    type: 'success',
                    title: 'Correcto',
                    text: 'Lo has logrado!'
                })

                preguntasContent.firstChild.textContent = 'Lo lograste! Por eso confio tanto en ti! (Pulsa enter para continuar)'
                opcionesContent.style.display = 'none'

            }else {
                
                Swal.fire({
                    type: 'error',
                    title: 'Incorrecto! :(',
                    text: 'Desde el principio'
                })

                setTimeout(() => {
                    document.location.reload(true)
                }, 1500);
            }
            
            
        })
        
    }else if( i === 2 ) {
        //preguntasContent.style.display = 'none'
        
        imgs.style.display = 'block'
        comentario.style.display = 'block'
        titulo.style.display = 'block'
                        
        titulo.textContent = 'Respondiste a mis preguntas'
        imgs.style.width = '300px'
        imgs.style.height = '300px'
        
        imgs.src = 'img/tuyyo.jpg'
                    
        comentario.textContent = 'Cuando más me hiciste falta, sin conocerte, en algún momento tenías que llegar y aquí estás.'
    }else if(i === 1) {
        
        imgs.style.width = '250px'
        imgs.style.height = '300px'
        
        imgs.src = 'img/us.jpg'
        titulo.style.color = 'red'
        titulo.textContent = 'Solo te pido que... 💓'
        comentario.textContent = 'A tu derecha, tienes un pequeño papel que quiero desdobles y leas' 
    }

}


 let slides = e => {

     if(e.keyCode === 13 || e.keyCode === 40) {
        counter++
        setTimeout(() => {
                  
            element =  content.removeChild(content.firstChild)
            content.appendChild(element)
            
            content.lastElementChild.classList.remove('ocultar')
        }, 1000);
              
        for(let c = 1; c <= colors.length; c++) {
            content.firstChild.classList.add('ocultar')
        }
  
    }

        if(counter === 5) {
            document.removeEventListener('keydown', slides)
        }

    }
    
    document.addEventListener('keydown', slides)
     
}) 
    
