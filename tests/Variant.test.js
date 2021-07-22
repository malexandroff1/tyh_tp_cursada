let Variant = require("../models/Variant");


let variant, emptyVariant;

beforeEach(() => {
    variant = new Variant("XL", "Rojo", "Cuero", 10);
    emptyVariant = new Variant();
})

test("Should return the default values or constructor parameters", () => {
    expect(variant.getSize()).toBe("XL");
    expect(variant.getColor()).toBe("Rojo");
    expect(variant.getMaterial()).toBe("Cuero");
    expect(variant.getStock()).toBe(10);
    expect(emptyVariant.getStock()).toBe(0);
})

test("Should either increase or decrease stock", () => {
    expect(variant.hasStock()).toBe(true);
    variant.increaseStock(2);
    expect(variant.getStock()).toBe(12);
    expect(variant.hasStock()).toBe(true);
    variant.decreaseStock(1);
    expect(variant.getStock()).toBe(11);
    expect(variant.hasStock()).toBe(true);
    expect( () => { variant.decreaseStock(12) } ).toThrow("Cannot decrease stock");
    variant.decreaseStock(11);
    expect(variant.getStock()).toBe(0);
    expect(variant.hasStock()).toBe(false);
})