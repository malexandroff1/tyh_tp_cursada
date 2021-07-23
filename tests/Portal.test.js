let Portal = require("../models/Portal");
let Store = require("../models/Store");

jest.mock("../models/Store");

let emptyPortal, portal, crisStore, charlyStore;

beforeEach(() => {
    crisStore = new Store();
    charlyStore = new Store();
    emptyPortal = new Portal("empty portal");
    portal = new Portal("test portal", [crisStore]);
})

test("Should return constructor parameters", () => {
    expect(emptyPortal.name).toBe("empty portal");
    expect(emptyPortal.getStores()).toEqual([]);


    expect(portal.name).toBe("test portal");
    expect(portal.getStores()).toEqual([crisStore]);

})

test("Should add or remove stores", () => {
    portal.addStore(charlyStore);
    expect(portal.getStores()).toEqual([crisStore, charlyStore]);
    portal.removeStore(crisStore);
    expect(portal.getStores()).toEqual([charlyStore]);
    portal.removeStore(charlyStore);
    expect(portal.getStores()).toEqual([]);
})