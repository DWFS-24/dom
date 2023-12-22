console.log('holi')


const button = document.getElementById('btn')
const buttonColor = document.getElementById('btn-color')
const buttonSize = document.getElementById('btn-size')
const buttonNuevo = document.getElementById('btn-nuevo')

button.addEventListener('click', () => cambiarTexto())
buttonColor.addEventListener('click', () => cambiarColor())
buttonSize.addEventListener('click', () => cambiarSize())
buttonNuevo.addEventListener('click', () => crearElemento())

console.log(button)

const cambiarTexto = () => {
    console.log('click')
    const body = document.getElementById('container')
    const text = document.querySelector('.titulo')
    text.innerHTML = '¡Texto cambiado!'
    console.log(body)
}
const cambiarColor = () => {
    console.log('click')
    const body = document.getElementById('container')
    const text = document.querySelector('.titulo')
    text.style.color = 'red'
    console.log(body)
}
const cambiarSize = () => {
    console.log('click')
    const body = document.getElementById('container')
    const text = document.querySelector('.titulo')
    text.style.fontSize = '100px'
    console.log(body)
}

const crearElemento = () => {
    const body = document.getElementById('container')
    const paragraph = document.createElement('p')
    paragraph.innerHTML = 'Nuevo elemento'
    body.appendChild(paragraph)
}