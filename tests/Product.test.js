let Product = require("../models/Product");
let Variant = require("../models/Variant");

jest.mock("../models/Variant");

let campera, camperaDeCueroNegra, camperaDeCueroRoja, camperaDeJeanAzul, emptyProduct;

beforeEach(()=>{
    camperaDeCueroNegra = new Variant();
    camperaDeCueroRoja = new Variant();
    camperaDeJeanAzul = new Variant();
    campera = new Product("Campera", 10000, [camperaDeCueroNegra, camperaDeCueroRoja]);
    emptyProduct = new Product();
})

test("Should return the default values or constructor parameters", () => {
    expect(campera.getName()).toBe("Campera");
    expect(campera.getPrice()).toBe(10000);
    expect(campera.getVariants().length).toBe(2)
    expect(campera.getVariants()).toEqual([camperaDeCueroNegra, camperaDeCueroRoja])
    expect(emptyProduct.getVariants().length).toBe(0);
})

test("Should either add or remove variants", () => {
    campera.removeVariant(camperaDeCueroNegra)
    expect(campera.getVariants().length).toBe(1)
    expect(campera.getVariants()).toEqual([camperaDeCueroRoja])
    campera.removeVariant(camperaDeCueroRoja)
    expect(campera.getVariants().length).toBe(0)
    expect(campera.getVariants()).toEqual([])

    campera.addVariant(camperaDeCueroNegra)
    expect(campera.getVariants().length).toBe(1)
    expect(campera.getVariants()).toEqual([camperaDeCueroNegra])
    campera.addVariant(camperaDeCueroRoja)
    expect(campera.getVariants().length).toBe(2)
    expect(campera.getVariants()).toEqual([camperaDeCueroNegra, camperaDeCueroRoja])

})