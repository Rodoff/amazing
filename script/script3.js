console.log(data);
const eventos = data.events;
console.log(eventos)
let otroeven = []

function printEvents() {
    for (let event of eventos) {
        if (event.estimate >= 1) {
            let listaev = `
        <div class="contene d-flex flex-row flex-wrap">
    <div class="card" style="width: 18rem;">
    <img src="${event.image}" class="card-img-top" alt="${event.name}">
    <div class="card-body">
        <h5 class="card-title">${event.name}</h5>
        <p class="card-text">${event.description}</p>
        <a href="./details.html" class="btn btn-primary">Details</a>
        </div>
        </div> 
        </div> 
    `
            otroeven.push(listaev)
        }
    }
}
function imprimir() {
    let listaeventos = document.getElementById('cardEvents')
    listaeventos.innerHTML = otroeven.join('')
}
console.log(otroeven)
printEvents();
imprimir();