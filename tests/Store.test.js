let ByPercentage = require("../models/ByPercentage");
let BySalesQuantity = require("../models/BySalesQuantity");
let Product = require("../models/Product");
let Sale = require("../models/Sale");
let Store = require("../models/Store");

jest.mock("../models/ByPercentage");
jest.mock("../models/BySalesQuantity");
jest.mock("../models/Product");
jest.mock("../models/Sale");

let storeByPercentage, storeBySalesQuantity, camperaSale, jeanSale, campera, jean, byPercentage, bySalesQuantity;

beforeEach(() => {
    camperaSale = new Sale();
    jeanSale = new Sale();

    campera = new Product();
    jean = new Product();

    byPercentage = new ByPercentage();
    byPercentage.getAmount.mockReturnValue(100);
    bySalesQuantity = new BySalesQuantity();
    bySalesQuantity.getAmount.mockReturnValue(500);

    storeByPercentage = new Store("test store by percentage", byPercentage, [campera], [camperaSale]);
    storeBySalesQuantity = new Store("test store by sales quantity", bySalesQuantity, [jean], [jeanSale]);
})

test("Should return constructor parameters", () => {
    expect(storeByPercentage.name).toBe("test store by percentage");
    expect(storeByPercentage.getProducts()).toEqual([campera]);
    expect(storeByPercentage.getSales()).toEqual([camperaSale]);
    expect(storeByPercentage.subscription).toEqual(byPercentage);

    expect(storeBySalesQuantity.name).toBe("test store by sales quantity");
    expect(storeBySalesQuantity.getProducts()).toEqual([jean]);
    expect(storeBySalesQuantity.getSales()).toEqual([jeanSale]);
    expect(storeBySalesQuantity.subscription).toEqual(bySalesQuantity);
})

test("Should add or remove products", () => {
    storeByPercentage.addProduct(jean);
    expect(storeByPercentage.getProducts()).toEqual([campera, jean]);
    storeByPercentage.removeProduct(campera);
    expect(storeByPercentage.getProducts()).toEqual([jean]);
    storeByPercentage.removeProduct(jean);
    expect(storeByPercentage.getProducts()).toEqual([]);
})

test("Should add or remove sales", () => {
    storeByPercentage.addSale(jeanSale);
    expect(storeByPercentage.getSales()).toEqual([camperaSale, jeanSale]);
    storeByPercentage.removeSale(camperaSale);
    expect(storeByPercentage.getSales()).toEqual([jeanSale]);
    storeByPercentage.removeSale(jeanSale);
    expect(storeByPercentage.getSales()).toEqual([]);
})

test("Should return subscription amount", () => {
    expect(storeByPercentage.subscriptionAmount()).toBe(100);
    expect(storeBySalesQuantity.subscriptionAmount()).toBe(500);
})