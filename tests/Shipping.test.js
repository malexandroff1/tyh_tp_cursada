let Shipping = require("../models/Shipping");


let shipping;

beforeEach(() => {
    shipping = new Shipping();
})

test("Shouldn't return constructor parameters", () => {
    expect( () => { shipping.getShippingCost() } ).toThrow("It must be implemented.");
    expect( () => { shipping.getDeliveryDate() } ).toThrow("It must be implemented.");
})
