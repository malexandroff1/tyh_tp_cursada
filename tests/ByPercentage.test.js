let ByPercentage = require("../models/ByPercentage");
let Sale = require = require("../models/Sale");

jest.mock("../models/Sale")

let byPercentage, camperaSale, jeanSale;

beforeEach(() => {
    byPercentage = new ByPercentage(10);
    camperaSale = new Sale();
    camperaSale.getTotal.mockReturnValue(5000);
    jeanSale = new Sale();
    jeanSale.getTotal.mockReturnValue(2000);
})

test("Should return constructor parameters", () => {
    expect(byPercentage.percentage).toBe(10);
})

test("Should return total", () => {
    expect(byPercentage.getAmount([camperaSale, jeanSale])).toBe(700);
    expect(byPercentage.getAmount([])).toBe(0);
    testSubscription = new ByPercentage(0);
    expect(testSubscription.getAmount([camperaSale, jeanSale])).toBe(0);
})