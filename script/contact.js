function capalert() {
    let nombrecont = document.getElementById("nombre").value
    emailcont = document.getElementById("email").value
    mensajecont = document.getElementById("message").value

    if (nombrecont == "") {
        document.getElementById("nombre").focus();
    } else {
        (emailcont == "")
        document.getElementById("email").focus();
    }
    Swal.fire({
        type: `info`,
        html: `<h1>${nombrecont}</h1>
        <a href="#">${emailcont}</a>
        <p>${mensajecont}</p>
               
        `,
        confirmButtonColor: `#D90368`,
        
    });
}
