const btn = document.getElementById('changeClr')
const bg_color = document.getElementById('wrapper')
const bg_name = document.getElementById('bg-name')

// const colors = ['red', 'green', 'yellow', 'purple', 'pink', 'blue', 'black', 'orange']

const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E']
const getHexColor = () => {
    return hex[Math.floor(Math.random() * hex.length)];
}


// hex = #123456
const getRandomColor = () => {
    let index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

btn.onclick = () => {
    const newbgcolor = `#${getHexColor()}${getHexColor()}${getHexColor()}${getHexColor()}${getHexColor()}${getHexColor()}`
    document.body.style.backgroundColor = `${newbgcolor}`
    const newbgcolor2 = `#${getHexColor()}${getHexColor()}${getHexColor()}${getHexColor()}${getHexColor()}${getHexColor()}`
    bg_color.style.backgroundColor = `${newbgcolor2}`
    // console.log(newbgcolor)
    bg_name.innerText = `Background Color: ${newbgcolor}`

}
