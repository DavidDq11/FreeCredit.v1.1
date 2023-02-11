const imagenes = document.querySelectorAll('.projects_img')
const imagenes_light = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
const hamburguer1 = document.querySelector('.hamburguer')

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
        
    })
})

contenedorLight.addEventListener('click', (e)=>{
    if(e.target !== imagenes_light){
        contenedorLight.classList.toggle('show')
        imagenes_light.classList.toggle('showImage')
        hamburguer1.style.opacity = '1'
    }
})

const aparecerImagen = (imagen)=>{
    imagenes_light.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenes_light.classList.toggle('showImage')
    hamburguer1.style.opacity = '0'
}