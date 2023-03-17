async function printabla1() {
    try {
        let urlApi = "https://mh.up.railway.app/api/amazing-events?time=past";
        let fetchResponse = await fetch(urlApi);
        let response = await fetchResponse.json();
        let eventos = response.events;
        
        for (let evento of eventos) {
                   evento.porcentaje = evento.assistance / evento.capacity * 100;
                   evento.porcentaje = evento.porcentaje.toFixed(2);
              }
 
        
        eventos = eventos.sort((a, b) => a.porcentaje - b.porcentaje)
        document.getElementById("max").innerHTML = eventos[eventos.length - 1].name;
        document.getElementById("maxasis").innerHTML = eventos[eventos.length - 1].porcentaje;
        document.getElementById("min").innerHTML = eventos[0].name;
        document.getElementById("minasis").innerHTML = eventos[0].porcentaje;


        eventos = eventos.sort((a, b) => a.capacity - b.capacity)
        document.getElementById("maxcapa").innerHTML = eventos[eventos.length - 1].name;
        document.getElementById("maxcapas").innerHTML = eventos[eventos.length - 1].capacity;
    } catch (error) {
        console.log(error);
    }
}

printabla1();

async function printabla2() {
    try {
        let urlApi = "https://mh.up.railway.app/api/amazing-events?time=upcoming";
        let fetchResponse = await fetch(urlApi);
        let response = await fetchResponse.json();
        let eventos = response.events;

        let categories = []
        console.log(eventos.forEach(each => {
            if (!categories.includes(each.category)) {
                categories.push(each.category)
            }
        }))
        // console.log(categories);

        for (let evento of eventos) {
            evento.ganancia = evento.estimate * evento.price;
            // console.log(eventos.ganancia)
        }

        let acu1 = []
        for (let category of categories) {
            let ganancia = 0;
            let assistotal = 0;
            let capatotal = 0;

            eventoscategories = eventos.filter(evento => evento.category === category)
            eventoscategories.forEach(evento => {
                ganancia += evento.ganancia;
                assistotal += evento.estimate;
                capatotal += evento.capacity;
            })
            // console.log(category + " => Ganancia:" + ganancia + ", Asistencia:" + assistotal + ", Capacidad:" + capatotal);
            let porcentaje = assistotal / capatotal * 100;
            porcentaje = porcentaje.toFixed(2);
            //console.log(porcentaje);

            let card = `<tr class="t-body">
                 <td class="celda1" colspan="2">${category}</td>
                 <td class="celda2" colspan="2">$${ganancia}</td>
                 <td class="celda3" colspan="2">${porcentaje}%</td>
                 </tr>`;
                 acu1.push(card)
        }
        document.getElementById("tabla2").innerHTML += acu1.join("");

    } catch (error) {
        console.log(error);
    }
}

printabla2() 

async function printabla3() {
    try {
        let urlApi = "https://mh.up.railway.app/api/amazing-events?time=past";
        let fetchResponse = await fetch(urlApi);
        let response = await fetchResponse.json();
        let eventos = response.events;

        let categories = []
        console.log(eventos.forEach(each => {
            if (!categories.includes(each.category)) {
                categories.push(each.category)
            }
        }))
        // console.log(categories);

        for (let evento of eventos) {
            evento.ganancia = evento.assistance * evento.price;
            // console.log(eventos.ganancia)
        }

        let acu2 = []
        for (let category of categories) {
            let ganancia = 0;
            let assistotal = 0;
            let capatotal = 0;

            eventoscategories = eventos.filter(evento => evento.category === category)
            eventoscategories.forEach(evento => {
                ganancia += evento.ganancia;
                assistotal += evento.assistance;
                capatotal += evento.capacity;
            })
            // console.log(category + " => Ganancia:" + ganancia + ", Asistencia:" + assistotal + ", Capacidad:" + capatotal);
            let porcentaje = assistotal / capatotal * 100;
            porcentaje = porcentaje.toFixed(2);
            //console.log(porcentaje);

            let card = `<tr class="t-body">
                 <td class="celda1" colspan="2">${category}</td>
                 <td class="celda2" colspan="2">$${ganancia}</td>
                 <td class="celda3" colspan="2">${porcentaje}%</td>
                 </tr>`;
                 acu2.push(card)
        }
        document.getElementById("tabla3").innerHTML += acu2.join("");

    } catch (error) {
        console.log(error);
    }
}

printabla3()