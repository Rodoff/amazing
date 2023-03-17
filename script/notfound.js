function notFound(id_etiqueta) {
    let container = document.querySelector(id_etiqueta)
    container.innerHTML = `
 <div class="contene d-flex flex-row flex-wrap">
<div class="card" style="width: 20  rem;">
<img src="https://i.postimg.cc/Hk5FZZ1D/Png-Item-5616833.png" class="card-img-top" alt="imagen not found"">
<div class="card-body">
<h5 class="card-title">Event</h5>
<p class="card-text">Not Found</p>
    </div>
    </div> 
    </div> 
    `
}

