const color = document.querySelector('.color')
const h2 = document.querySelector('h2')
const color_code = document.querySelector('.color_code')
const generate = document.querySelector('.generate')
const copy = document.querySelector('.copy')
const body = document.body


let colorCode = getRandomHexColor()
body.style.background = colorCode
color.style.background = colorCode
h2.style.color = colorCode
color_code.textContent = colorCode

function getRandomHexColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


generate.addEventListener('click', () => {
    let colorCode = getRandomHexColor()
    body.style.background = colorCode
    color.style.background = colorCode
    h2.style.color = colorCode
    color_code.textContent = colorCode
})

copy.addEventListener('click', () => {
    const textArea = document.createElement('textarea');
    textArea.value = color_code.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
});