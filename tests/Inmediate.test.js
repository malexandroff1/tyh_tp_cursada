let Inmediate = require("../models/Inmediate");


let shipping, saleDate;

beforeEach(() => {
    saleDate = new Date(2021, 7, 22)
    shipping = new Inmediate(saleDate);
})

test("Should return constructor parameters", () => {
    expect(shipping.getShippingCost()).toBe(700);
    expect(shipping.getDeliveryDate()).toEqual(saleDate.setDate(1));
})
