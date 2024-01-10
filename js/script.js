//Recupero gli elementi dal file html
const form = document.querySelector('form')
const grid = document.querySelector('.grid')

//Dati iniziali 
const rows = 10;
const cols = 10;
const numberOfCells = rows * cols;

//FUNZIONI
const createCell = () => {
    const cellGenerator = `<div class="cell"></div>`
    return cellGenerator


}
//Svolgimento programma
for (let i = 1; i <= numberOfCells; i++) {
    const cell = createCell()
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        grid.innerHTML += cell
    })

}