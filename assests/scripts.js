const input = document.querySelector('.input')
const icon = document.querySelector('.icon')

icon.addEventListener('click', () => {
    input.classList.remove('hide')
})

input.addEventListener('keypress', (enter) => {
    if (enter.key === 'Enter'){
        input.classList.add('hide')
    }
})