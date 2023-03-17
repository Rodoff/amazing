async function fetchApi() {
    try {
        let urlApi = 'https://mh.up.railway.app/api/amazing-events?time=past'
        let fetchResponse = await fetch(urlApi)
        const response = await fetchResponse.json()
        imprimir("cardEvents", response.events);
    } catch (error) {
        console.log(error);
    }
}
fetchApi()


function printEvents(array) {
    let templates = []
    for (let tarj of array) {
        let card = `
        <div class="contene d-flex flex-row flex-wrap">
    <div class="card" style="width: 18rem;">
    <img src="${tarj.image}" class="card-img-top" alt="${tarj.name}">
    <div class="card-body">
        <h5 class="card-title">${tarj.name}</h5>
        <p class="card-text">${tarj.description}</p>
        </div>
        <div class="card-footer d-flex justify-content-between">
        <p>Price: ${tarj.price}</p>
    <a href="./details.html?id=${tarj.id}" class="bote btn-outline-success">View Event >></a>
        </div>
        </div>
        </div> 
    `
        templates.push(card)
    }
    return templates
}

function imprimir(id, array) {
    let templates = printEvents(array)
    let listaeventos = document.getElementById(id)
    listaeventos.innerHTML = templates.join('')
}

async function checkApi() {
    try {
        let urlApi1 = "https://api-amazingevents.onrender.com/api/amazing-events?time=past"
        let fetchResponse = await fetch(urlApi1)
        const response = await fetchResponse.json()
        let evento = response.events;
        let categos = []
        console.log(evento.forEach(each => {
            if (!categos.includes(each.category)) {
                categos.push(each.category)
            }
        }))
        let checks = []
        for (let cate of categos) {
            let card = `
          <input onclick="captureData()" class="class_checks" type="checkbox" id="${cate}" name="category" value="${cate}">
          <label class="qqq" for="${cate}">${cate}</label>
      `
            checks.push(card)
        }
        document.getElementById("probando").innerHTML = checks.join("");
    }
    catch (error) {
        console.log(error)
    }
}
checkApi()

async function captureData() {
    try {
        let urlApi = 'https://mh.up.railway.app/api/amazing-events?time=past'
        let fetchResponse = await fetch(urlApi)
        const response = await fetchResponse.json()
        let evento = response.events;

        let texto = document.getElementById('id_search').value
        let checks = Array.from(document.querySelectorAll('.class_checks:checked')).map(each => each.value)
        let filtro = evento.filter(each => {
            return (each.name.toLowerCase().includes(texto)) && (checks.length === 0 || checks.includes(each.category))
        })
        if (filtro.length > 0) {
            imprimir('cardEvents', filtro)
            console.log(filtro);
        }
        else {
            notFound('#cardEvents')
        }

    } catch (error) {
        console.log(error);
    }
}
captureData()