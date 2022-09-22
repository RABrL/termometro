const farenheit = document.querySelector('#farenheit')
const divGrados = document.querySelector('.grados')
const btnConvertir = document.querySelector('.convertir')
const barra = document.querySelector('#barra-color')
const btnReiniciar = document.querySelector('#reiniciar')

let grados

btnConvertir.addEventListener('click', ()=> {(farenheit.value)?convertirGrados():alert('Agrega un valor en farenheit')})
btnReiniciar.addEventListener('click', reiniciar)

function reiniciar(){
    location.reload()
}

function convertirGrados(){
    grados = Math.round((farenheit.value-32)*(5/9))
    farenheit.value=''
    divGrados.innerHTML= grados + ' °'
    colorearBarra() 
}

function colorearBarra(){
    let porcentaje
    if(grados<0) porcentaje = 0
    else if(grados>100) porcentaje = 100
    else porcentaje=grados
    barra.innerHTML = grados + '°'
    barra.style.height= `${porcentaje}%`
}