class Portal{
    constructor(name, stores=null){
        this.name = name;
        this.stores = stores || [];

    }
    getStores(){
        return this.stores;
    }
    addStore(store){
        this.stores.push(store);
    }
    removeStore(store){
        this.stores = this.stores.filter(currentStore => currentStore != store);
    }
}

module.exports = Portal;