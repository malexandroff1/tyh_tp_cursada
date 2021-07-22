let Traditional = require("../models/Traditional");


let shipping, saleDate;

beforeEach(() => {
    saleDate = new Date(2021, 7, 22)
    shipping = new Traditional(saleDate);
})

test("Should return constructor parameters", () => {
    expect(shipping.getShippingCost()).toBe(450);
    expect(shipping.getDeliveryDate()).toEqual(saleDate.setDate(4));
})
