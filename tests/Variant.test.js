let Variant = require("../models/Variant");

test("Should return the default values or constructor parameters", () => {
    let variant = new Variant("XL", "Rojo", "Cuero", 10);
    expect(variant.getSize()).toBe("XL");
    expect(variant.getColor()).toBe("Rojo");
    expect(variant.getMaterial()).toBe("Cuero");
    expect(variant.getStock()).toBe(10);
    let empty = new Variant();
    expect(empty.getStock()).toBe(0);
})

test("Should either increase or decrease stock", () => {
    variant = new Variant("XL", "Rojo", "Cuero");
    expect(variant.hasStock()).toBe(false);
    variant.increaseStock(2);
    expect(variant.getStock()).toBe(2);
    expect(variant.hasStock()).toBe(true);
    variant.decreaseStock(1);
    expect(variant.getStock()).toBe(1);
    expect(variant.hasStock()).toBe(true);
    expect( () => { variant.decreaseStock(6) } ).toThrow("Cannot decrease stock");
    variant.decreaseStock(1);
    expect(variant.getStock()).toBe(0);
    expect(variant.hasStock()).toBe(false);
})