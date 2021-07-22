let Product = require("../models/Product");
let Variant = require("../models/Variant");
let Item = require("../models/Item");

jest.mock("../models/Product");
jest.mock("../models/Variant");

let camperaItem, campera, camperaDeCueroNegra;

beforeEach(()=>{
    camperaDeCueroNegra = new Variant();
    campera = new Product();
    campera.getPrice.mockReturnValue(10000);
    camperaDeCueroNegra.hasStock.mockReturnValue(true);
    camperaItem = new Item(campera, camperaDeCueroNegra, 2);
})

test("Should return constructor parameters or cannot be created", () => {
    expect(camperaItem.getProduct()).toEqual(campera);
    expect(camperaItem.getVariant()).toEqual(camperaDeCueroNegra);
    expect(camperaItem.getQuantity()).toBe(2);

    camperaDeCueroNegra.hasStock.mockReturnValue(false);
    expect( () => { new Item(campera, camperaDeCueroNegra, 10) } ).toThrow("Cannot create Item. There is not enough product in stock.");
})

test("Should update total", () => {
    expect(camperaItem.getTotal()).toBe(20000);
    camperaDeCueroNegra.hasStock.mockReturnValue(false);
    expect( () => { camperaItem.setQuantity(10) } ).toThrow("Cannot create Item. There is not enough product in stock.");

    camperaDeCueroNegra.hasStock.mockReturnValue(true);
    camperaItem.setQuantity(10);
    expect(camperaItem.getTotal()).toBe(100000);
    camperaItem.setQuantity(0);
    expect(camperaItem.getTotal()).toBe(0);
})

test("Should neither decrease nor increase stock", () => {
    camperaItem.increaseStock();
    expect( () => { camperaItem.increaseStock() } ).toThrow("Stock has been already increased");
    camperaItem.decreaseStock();
    expect( () => { camperaItem.decreaseStock() } ).toThrow("Stock has been already decreased");
    camperaItem.increaseStock();
    camperaItem.decreaseStock();
})