GET /addprod.html

const productsContainer = $("#productContainer")

$.get("http://localhost:5500/products")
    .then(function(response) {
        return response
    })
    .then(function(data){
        const categories = []
        const products = data

        products.forEach(product => {
            if(categories.indexOf(product.categorie) === -1){
                categories.push(product.categorie);
            }
        });

        products.forEach(product => {
            let divCategorie = $("#"+product.categorie.replaceAll(" ", ""))
            let cardDiv = $("<div></div>").addClass("card small").appendTo(divCategorie);
            let cardImgDiv = $("<div></div>").addClass("card-image").appendTo(cardDiv);
            let cardImg = $("<img>").attr("src", product.img).appendTo(cardImgDiv);
            let cardTitle = $("<span></span>").addClass("card-title brown-text text-darken-4").text(product.name).appendTo(cardImgDiv);
            let cardContent = $("<div></div>").addClass("card-content").appendTo(cardDiv);
            let quantityText = $("<p></p>").text("Quantité : " + product.quantity).appendTo(cardContent);
            let prixText = $("<p></p>").text("Prix : " + product.prix + "€").appendTo(cardContent);
        });
    })