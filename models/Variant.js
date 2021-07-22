class Variant{
    constructor(size, color, material, stock=0){
        this.size = size;
        this.color = color;
        this.material = material;
        this.stock = stock;
    }
    getSize(){
        return this.size;
    }
    getColor(){
        return this.color;
    }
    getMaterial(){
        return this.material;
    }
    getStock(){
        return this.stock;
    }
    increaseStock(quantity){
        this.stock = this.stock + quantity;
    }
    decreaseStock(quantity){
        if (this.stock - quantity < 0)
            throw("Cannot decrease stock");
        this.stock = this.stock - quantity;
    }
    hasStock(quantity=0){
        return (this.stock - quantity) > 0;
    }
}

module.exports = Variant;