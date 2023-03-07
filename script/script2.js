console.log(data);
const eventos = data.events;
console.log(eventos)
let otroeven = []

let pastlist = []

for (let past of eventos) {
    if (data.currentDate > past.date) {
        pastlist.push(past)
    }
}

console.log(pastlist);

function printEvents() {
    for (let tarj of pastlist) {
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
        <a href="./details.html?_id=${tarj._id}" class="bote btn-outline-success">View Event >></a>
        </div>
        </div>
        </div> 
    `
        otroeven.push(listaev)
    }
}
function imprimir() {
    let listaeventos = document.getElementById('cardEvents')
    listaeventos.innerHTML = otroeven.join('')
}

console.log(otroeven)
printEvents();
imprimir();

let categos = []
console.log(pastlist.forEach(each => {
    if (!categos.includes(each.category)) {
        categos.push(each.category)
    }
}))

console.log(categos);

let prueba = []

function printca() {
    for (let cate of categos) {
        let listaca = `
            <input type="checkbox" onclick="captureData()" class="class_checks" id="${cate}" name="category" value="${cate}">
            <label class="qqq" for="${cate}">${cate}</label>
        `
        prueba.push(listaca)

    }
}

function imprimirca() {
    let listaca = document.getElementById('probando')
    listaca.innerHTML = prueba.join('')
}

console.log(prueba)
printca();
imprimirca();
