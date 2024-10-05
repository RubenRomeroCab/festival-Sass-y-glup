document.addEventListener("DOMContentLoaded",function(){
    crearGaleria();
})

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes')

    for(let i = 1; i<=16; i++){
        const imagen = document.createElement('IMG');
        imagen.src= `src/img/gallery/full/${i}.jpg`;

        imagen.onclick = function(){
            mostrarImagen(i)
        }

        galeria.appendChild(imagen);
    }
}

function mostrarImagen(i){
    const modal = document.createElement('DIV')
    modal.classList.add('modal')
    modal.onclick(modal)

    const body = document.querySelector('body')
    body.appendChild(modal)
}