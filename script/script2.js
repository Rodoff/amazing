console.log(data);
const eventos = data.events;
console.log(eventos)
let otroeven = []

function printEvents() {
    for (let tarj of eventos) {
        if (tarj.assistance) {
            let listaev = `
            <div class="contene d-flex flex-row flex-wrap">
    <div class="card" style="width: 18rem;">
    <img src="${tarj.image}" class="card-img-top" alt="${tarj.name}">
    <div class="card-body">
        <h5 class="card-title">${tarj.name}</h5>
        <p class="card-text">${tarj.description}</p>
        </div>
        <div class="card-footer d-flex justify-content-between">
        <p>Price: ${tarj.price}</p>
    <a href="./details.html" class="bote btn-outline-success">View Event >></a>
        </div>
        </div>
        </div> 
    `
            otroeven.push(listaev)
        }
    }
}
function imprimir() {
    let listaeventos = document.getElementById('cardpastEvents')
    listaeventos.innerHTML = otroeven.join('')
}
console.log(otroeven)
printEvents();
imprimir();
