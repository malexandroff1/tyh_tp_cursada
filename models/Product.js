class Product{
    constructor(name, price, variants=[]){
        this.name = name;
        this.price = price;
        this.variants = variants;
    }
    getName(){
        return this.name;
    }
    getPrice(){
        return this.price;
    }
    getVariants(){
        return this.variants;
    }
    addVariant(variant){
        this.variants.push(variant)
    }
    removeVariant(variant){
        this.variants = this.variants.filter(currentVariant => currentVariant != variant)
    }
}

module.exports = Product;