async function printabla1() {
    try {
        let urlApi = "https://mh.up.railway.app/api/amazing-events?time=past";
        let fetchResponse = await fetch(urlApi);
        let response = await fetchResponse.json();
        let eventos = response.events;

        let stats = eventos.map(each => {
            let prueba = {
                name: [each.name],
                percent: 100 * (each.assistance / each.capacity).toFixed(3)
            }
            return prueba
        }).sort((a, b) => a.percent - b.percent)
        capa = eventos.sort((a, b) => a.capacity - b.capacity)
        document.getElementById("tabla1").innerHTML = template(stats[stats.length - 1], stats[0], capa[capa.length - 1])
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

        let categories = eventos.map(each => each.category)
        categories = new Set(categories)
        categories = [...categories]
        let categos = categories.map(each => eventos.filter(cada => cada.category === each))
        categos = categos.map(each => {
            return each.reduce((acu1, valor) => {
                let calculo1 = {
                    assistotal: acu1.assistotal + valor.estimate,
                    capatotal: acu1.capatotal + valor.capacity,
                    ganancia: acu1.ganancia + (valor.estimate * valor.price),
                    porcentaje: 100 * (acu1.assistotal / acu1.capatotal).toFixed(3),
                    category: valor.category,
                }
                return calculo1
            },
                {
                    ganancia: 0,
                    assistotal: 0,
                    capatotal: 0,
                    porcentaje: 0,
                    category: '',
                }
            )
        }
        )
        document.getElementById("tabla2").innerHTML = categos.map(each => template2(each.category, each.ganancia, each.porcentaje)).join("");
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

        let categories = eventos.map(each => each.category)
        categories = new Set(categories)
        categories = [...categories]
        let categos = categories.map(each => eventos.filter(cada => cada.category === each))
        categos = categos.map(each => {
            return each.reduce((acu1, valor) => {
                let calculo1 = {
                    assistotal: acu1.assistotal + valor.assistance,
                    capatotal: acu1.capatotal + valor.capacity,
                    ganancia: acu1.ganancia + (valor.assistance * valor.price),
                    porcentaje: 100 * (acu1.assistotal / acu1.capatotal).toFixed(3),
                    category: valor.category,
                }
                return calculo1
            },
                {
                    ganancia: 0,
                    assistotal: 0,
                    capatotal: 0,
                    porcentaje: 0,
                    category: '',
                }
            )
        }
        )
        document.getElementById("tabla3").innerHTML = categos.map(each => template2(each.category, each.ganancia, each.porcentaje)).join("");
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
    <td class="celda1" colspan="2">${max.percent.toLocaleString("es-US")}%</td>
    <td class="celda2" colspan="2">${min.percent.toLocaleString("en-US")}%</td>
    <td class="celda3" colspan="2">${capa.capacity.toLocaleString("en-US")}</td>
</tr>`

}

function template2(category, ganancia, porcentaje) {
    return `
    <tr class="t-bod">
    <td class="celda1" colspan="2">${category}</td>
    <td class="celda2" colspan="2">$${ganancia.toLocaleString("es-US")}</td>
    <td class="celda3" colspan="2">${porcentaje.toLocaleString("es-US")}%</td>
</tr>`
}

