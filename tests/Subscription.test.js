let Subscription = require("../models/Subscription");

let subscription;

beforeEach(() => {
    subscription = new Subscription();
})

test("Shouldn't return constructor parameters", () => {
    expect( () => { subscription.getAmount() } ).toThrow("It must be implemented.");
})