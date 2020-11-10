
class Product {
    constructor(){
        this.products = products;
    }

    get getProduct(){
        return this.products;
    }

    saveProduct(product){
        const id = this.products.length + 1;
        this.products.push({id: id, ...product})
        this.products = this.products;
    }
}

module.exports = new Product();


const products = [

];