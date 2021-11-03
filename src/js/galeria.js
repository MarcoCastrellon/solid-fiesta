document.addEventListener("DOMContentLoaded", function(){
    crearGaleria()
})

function crearGaleria(){
    const galeria = document.querySelector(".galeria-imagenes");

    for (let i = 1; i <= 12; i++) {
        const imagen = document.createElement("IMG")
        imagen.src = `build/img/thumb/${i}.webp`;
        imagen.dataset.imagenId = i;
        // Añadir La Funcion De Mostrar Imagen
        imagen.onclick = mostrarImagen;

        const lista = document.createElement("LI")
       lista.appendChild(imagen)

        galeria.appendChild(lista)
    }
}

function mostrarImagen (e) {

    const id = parseInt(e.target.dataset.imagenId);

    const imagen = document.createElement("IMG")
    imagen.src = `build/img/grande/${id}.webp`; 

    const overlay = document.createElement("DIV");
    overlay.appendChild(imagen);
    overlay.classList.add("overlay");
    // Cuando se da click cerrar la imagen
    overlay.onclick = function(){
        overlay.remove();
        body.classList.remove("fijar-body");
    }

    // Boton para cerrar Imagen

    const cerrarImagen = document.createElement("P")
    cerrarImagen.textContent = "X"
    cerrarImagen.classList.add("btn-cerrar")
    overlay.appendChild(cerrarImagen);

    // Al presionar se cierra la imagen
    cerrarImagen.onclick = function() {
        overlay.remove();
        body.classList.remove("fijar-body");
    }

    // Mostrarlo en HTML
    const body = document.querySelector("body");
    body.appendChild(overlay);
    body.classList.add("fijar-body");
}