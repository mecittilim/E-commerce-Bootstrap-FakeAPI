document.getElementById("all").addEventListener("click",getAll)
document.getElementById("jewelery").addEventListener("click",getJewelery)
document.getElementById("men").addEventListener("click",getMen)

// Get All Products

function getAll(){

    var url = 'https://fakestoreapi.com/products'
    var xhr = new XMLHttpRequest()

    xhr.open("GET", url, true)
    xhr.onload = function (){

        if(this.status === 200){
            var posts = JSON.parse(this.responseText)

            var html = ""

            posts.forEach(post => {
    
            html += ` <div class="col-sm-4">
                             <div class="card mb-3" style="max-width: 540px;">
                             <div class="row g-0">
                                 <div class="col-md-4">
                                     <img src="${post.image}" class="img-fluid rounded-start p-4" alt="...">
                                 </div>
                                 <div class="col-md-8">
                                     <div class="card-body">
                                         <h5 class="card-title">${post.title}</h5>
                                         <p class="card-desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                         <p class="card-price"><small class="text-dark" style="font-size: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">adads</small></p>
                                         <a href="#" class="btn btn-primary my-2">Buy Now! </a>
                                     </div>
                                 </div>
                             </div>
                             </div>
                         </div>`

            });

            document.querySelector("#product").innerHTML = html
        }
    }
    xhr.send()
}

// Get Category of Jewelery

function getJewelery() {
    fetch("https://fakestoreapi.com/products/category/jewelery")
    .then(data => {
        return data.json()
    }).then(products => {

        var html =""
        products.forEach(user => { //user ı foreach le dönüp tek tek objeler şeklinde yaz
            html += `
            <div class="col-sm-4">
                             <div class="card mb-3" style="max-width: 540px;">
                             <div class="row g-0">
                                 <div class="col-md-4">
                                     <img src="${user.image}" class="img-fluid rounded-start p-4" alt="...">
                                 </div>
                                 <div class="col-md-8">
                                     <div class="card-body bg-light">
                                         <h5 class="card-title">${user.title}</h5>
                                         <p class="card-desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                         <p class="card-price"><small class="text-dark" style="font-size: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">adads</small></p>
                                         <a href="#" class="btn btn-primary my-2">Buy Now! </a>
                                     </div>
                                 </div>
                             </div>
                             </div>
                         </div>`
        });

        document.querySelector("#product").innerHTML = html

    }).catch(error => {
        console.log(error)
    })
}

// get Men

function getMen() {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
    .then(data => {
        return data.json()
    }).then(products => {

        var html =""
        products.forEach(user => { //user ı foreach le dönüp tek tek objeler şeklinde yaz
            html += `
            <div class="col-sm-4">
                             <div class="card mb-3" style="max-width: 540px;">
                             <div class="row g-0">
                                 <div class="col-md-4">
                                     <img src="${user.image}" class="img-fluid rounded-start p-4" alt="...">
                                 </div>
                                 <div class="col-md-8">
                                     <div class="card-body">
                                         <h5 class="card-title">${user.title}</h5>
                                         <p class="card-desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                         <p class="card-price"><small class="text-dark" style="font-size: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">adads</small></p>
                                         <a href="#" class="btn btn-primary my-2">Buy Now! </a>
                                     </div>
                                 </div>
                             </div>
                             </div>
                         </div>`
        });

        document.querySelector("#product").innerHTML = html

    }).catch(error => {
        console.log(error)
    })
}