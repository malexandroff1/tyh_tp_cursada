let BranchWithdrawal = require("../models/BranchWithdrawal");


let shipping;

beforeEach(() => {
    shipping = new BranchWithdrawal();
})

test("Should return constructor parameters", () => {
    expect(shipping.getShippingCost()).toBe(0);
    expect(shipping.getDeliveryDate()).toBeNull();
})
