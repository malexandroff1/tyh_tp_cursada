let SaleStatus = require("../models/SaleStatus");

let status;

beforeEach(() => {
    status = new SaleStatus();
})

test("Should throw exception", () => {
    expect( () => { status.receive() } ).toThrow("It must be implemented.");
    expect( () => { status.accept() } ).toThrow("It must be implemented.");
    expect( () => { status.deliver() } ).toThrow("It must be implemented.");
    expect( () => { status.cancel() } ).toThrow("It must be implemented.");
})
