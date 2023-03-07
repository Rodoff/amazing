const eventos = data.events;
let query = location.search
console.log(query)
let params = new URLSearchParams(query)

let id_query = params.get("_id")
console.log(id_query)
function defineDetails(tarj) {
    return `
    <div class="contene d-flex flex-row flex-wrap">
    <div class="card" style="width: 1000px;">
    <img src="${tarj.image}" class="card-img-tope" alt="${tarj.name}">
    <div class="card-body">
    <h5 class="card-title">${tarj.name}</h5>
    <p class="card-text">${tarj.description}</p>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Category: ${tarj.category}</li>
        <li class="list-group-item">Date: ${tarj.date}</li>
        <li class="list-group-item">Place: ${tarj.place}</li>
    </ul>
   </div>
   <div class="card-footer d-flex justify-content-between">
    <p>Price: ${tarj.price}</p>
<a href="./index.html" class="bote btn-outline-success"> &lt;&lt; Back </a>
    </div>
</div>
</div>
    `
}
console.log(defineDetails)

function printTemplates(detalle, query) {
    let container = document.querySelector(detalle)
    card = eventos.find(each => each._id == query)
    console.log(card)
    let details = defineDetails(card)
    container.innerHTML = details
}

printTemplates(`#detalle`, id_query)




