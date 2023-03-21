async function printabla1() {
    try {
        let urlApi = "https://mh.up.railway.app/api/amazing-events?time=past";
        let fetchResponse = await fetch(urlApi);
        let response = await fetchResponse.json();
        let eventos = response.events;

        let stats = eventos.map(each => {
            let prueba = { 
                name : [each.name],
                percent : 100 * (each.assistance / each.capacity).toFixed(4) }
                
return prueba
        }).sort((e1, e2)=>e1.percent -e2.percent)
        capa = eventos.sort((e1, e2)=>e1.capacity -e2.capacity)

        document.getElementById("tabla1").innerHTML=template(stats[stats.length -1], stats[0], capa[capa.length -1] )

        
        // for (let evento of eventos) {
        //            evento.porcentaje = evento.assistance / evento.capacity * 100;
        //            evento.porcentaje = evento.porcentaje.toFixed(2);
        //       }
 
        
        // eventos = eventos.sort((a, b) => a.porcentaje - b.porcentaje)
        // document.getElementById("max").innerHTML = eventos[eventos.length - 1].name;
        // document.getElementById("maxasis").innerHTML = eventos[eventos.length - 1].porcentaje + "%";
        // document.getElementById("min").innerHTML = eventos[0].name;
        // document.getElementById("minasis").innerHTML = eventos[0].porcentaje  + "%";


        // eventos = eventos.sort((a, b) => a.capacity - b.capacity)
        // document.getElementById("maxcapa").innerHTML = eventos[eventos.length - 1].name;
        // document.getElementById("maxcapas").innerHTML = eventos[eventos.length - 1].capacity;
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

            let card = `<tr class="t-bod">
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

            let card = `<tr class="t-bod">
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

function template(max, min, capa) {
    return `
    <tr class="t-bod">
    <td class="celda1" colspan="2">${max.name}</td>
    <td class="celda2" colspan="2">${min.name}</td>
    <td class="celda3" colspan="2">${capa.name}</td>
</tr>
<tr class="t-bod">
    <td class="celda1" colspan="2">${max.percent}%</td>
    <td class="celda2" colspan="2">${min.percent}%</td>
    <td class="celda3" colspan="2">${capa.capacity}</td>
</tr>`

}