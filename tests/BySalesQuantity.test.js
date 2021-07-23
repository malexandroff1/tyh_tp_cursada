let BySalesQuantity = require("../models/BySalesQuantity");
let Sale = require = require("../models/Sale");

jest.mock("../models/Sale")

let bySalesQuantity, camperaSale, jeanSale;

beforeEach(() => {
    bySalesQuantity = new BySalesQuantity(100, 1, 50);
    camperaSale = new Sale();
    camperaSale.getTotal.mockReturnValue(5000);
    jeanSale = new Sale();
    jeanSale.getTotal.mockReturnValue(2000);
})

test("Should return constructor parameters", () => {
    expect(bySalesQuantity.baseAmount).toBe(100);
    expect(bySalesQuantity.salesLimit).toBe(1);
    expect(bySalesQuantity.additionalAmount).toBe(50);
})

test("Should return total", () => {
    expect(bySalesQuantity.getAmount([camperaSale, jeanSale])).toBe(150);
    testSubscription = new BySalesQuantity(100, 1, 50);
    expect(testSubscription.getAmount([])).toBe(100);
    testSubscription = new BySalesQuantity(100, 10, 50);
    expect(testSubscription.getAmount([camperaSale, jeanSale])).toBe(100);
})