let query = location.search
let params = new URLSearchParams(query)
let id_query = params.get("id")

async function fetchApi() {
    try {
        let urlApi = 'https://mh.up.railway.app/api/amazing-events'
        let fetchResponse = await fetch(urlApi)
        const response = await fetchResponse.json()
        let evento = response.events.find(each => each.id === id_query)
        console.log(evento)
        defineDetails(evento)
    } catch(error) {
        console.log(error);
    }
}

function defineDetails(tarj) {
    let card =  `
    <div class="contene d-flex flex-row flex-wrap">
    <div class="card" style="width: 800px;">
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
    document.getElementById("detalle").innerHTML = card;
}
console.log(defineDetails)

fetchApi()

