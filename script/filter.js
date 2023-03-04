function captureData() {
    let texto = document.getElementById('id_search').value
    let checks = Array.from(document.querySelectorAll('.class_checks:checked')).map(each => each.value)
    let filtro = eventos.filter(each => {
        return (each.nombre.includes(texto)) && (checks.length === 0 || checks.includes(each.tipo))
    })
    console.log(filtro)
    if (filtro.length>0) {
        printTemplates('#cardEvent',filtro)
    } else {
        notFound('#cardEvent')
    }
}