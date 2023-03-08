function captureData() {
    let texto = document.getElementById('id_search').value
    let checks = Array.from(document.querySelectorAll('.class_checks:checked')).map(each => each.value)
    let filtro = eventos.filter(each => {
        return (each.name.toLowerCase().includes(texto)) && (checks.length === 0 || checks.includes(each.category))
    })
        if (filtro.length > 0) {
            imprimir('cardEvents',filtro)
            console.log(filtro);
    }
     else {
         notFound('#cardEvents')
     }
}


