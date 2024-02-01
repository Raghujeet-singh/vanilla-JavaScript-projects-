const result = document.getElementById('result')

const incBtn = document.getElementById('inc')
const resBtn = document.getElementById('res')
const decBtn = document.getElementById('dec')

incBtn.onclick = () => {
    result.innerText = Number(result.innerText) + 1
    result.style.color = 'green'
}
resBtn.onclick = () => {
    result.innerText = 0
    result.style.color = 'black'
}
decBtn.onclick = () => {
    result.innerText = Number(result.innerText) - 1
    result.style.color = 'red'
}
