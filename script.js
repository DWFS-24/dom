console.log('holi')


const button = document.getElementById('btn')
const buttonColor = document.getElementById('btn-color')
const buttonSize = document.getElementById('btn-size')

button.addEventListener('click', () => cambiarTexto())
buttonColor.addEventListener('click', () => cambiarColor())
buttonSize.addEventListener('click', () => cambiarSize())

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