const farenheit = document.querySelector('#farenheit')
const divGrados = document.querySelector('.grados')
const convertir = document.querySelector('.convertir')
const barra = document.querySelector('#barra-color')

let grados

convertir.addEventListener('click', ()=> {(farenheit.value)?convertirGrados():location.reload()})

function convertirGrados(){
    grados = Math.round((farenheit.value-32)*(5/9))
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