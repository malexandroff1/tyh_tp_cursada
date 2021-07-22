class Item{
    constructor(product, variant, quantity){
        this.product = product;
        if  (!variant.hasStock(quantity))
            throw("Cannot create Item. There is not enough product in stock.")

        this.variant = variant;
        this.quantity = quantity;
        this.stockDecreased = false;
        this.stockIncreased = false;
    }
    getProduct(){
        return this.product;
    }
    getVariant(){
        return this.variant;
    }
    getQuantity(){
        return this.quantity;
    }
    setQuantity(quantity){
        if  (!this.variant.hasStock(quantity))
            throw("Cannot create Item. There is not enough product in stock.");
        this.quantity = quantity;
    }
    getTotal(){
        return this.product.getPrice()*this.quantity;
    }
    increaseStock(){
        if (this.stockIncreased)
            throw("Stock has been already increased");

        this.variant.increaseStock(this.quantity);
        this.stockDecreased = false;
        this.stockIncreased = true;
    }
    decreaseStock(){        
        if (this.stockDecreased)
            throw("Stock has been already decreased");

        this.stockDecreased = true;
        this.stockIncreased = false;
    }
}

module.exports = Item;