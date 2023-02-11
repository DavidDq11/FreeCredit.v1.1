var inputs = document.getElementsByClassName('formulario_input');
for(var i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('input', function(){
        this.nextElementSibling.classList.toggle('fijar', this.value.length >=1);
    });
}

const formulario = document.querySelector('.formulario')
formulario.addEventListener('submit', handleSubmit)

async function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    });
    if(response.ok){
        this.reset()
        alert('Gracias por contactarnos, nos comunicaremos contigo pronto')
    }else{
        alert('Algo salió mal, por favor inténtalo de nuevo más tarde')
    }


 }