let Sale = require("../models/Sale");
let BranchWithdrawal = require("../models/BranchWithdrawal");
let Traditional = require("../models/Traditional");
let Inmediate = require("../models/Inmediate");
let Item = require("../models/Item");

jest.mock("../models/Item");

let sale;

beforeEach(() => {
    campera = new Item();
    campera.getTotal.mockReturnValue(2000);
    jean = new Item();
    jean.getTotal.mockReturnValue(1500);
    testItems = [campera, jean];

    saleDate = new Date(2021, 7, 22);
    branchWithdrawalShipping = new BranchWithdrawal(saleDate);
    traditionalShipping = new Traditional(saleDate);
    inmediateShipping = new Inmediate(saleDate);

    branchWithdrawalSale = new Sale("Charly Tevez", saleDate, testItems, branchWithdrawalShipping);
    traditionalSale = new Sale("Roberto Carlos", saleDate, [campera], traditionalShipping);
    inmediateSale = new Sale("Cris Ronaldo", saleDate, [jean], inmediateShipping);
})

test("Should return the default values or constructor parameters", () => {
    expect(branchWithdrawalSale.getClient()).toBe("Charly Tevez");
    expect(branchWithdrawalSale.getDate()).toBe(saleDate);
    expect(branchWithdrawalSale.getItems()).toEqual(testItems);
    expect(branchWithdrawalSale.getStatus()).toBe("Received");
    expect(branchWithdrawalSale.getPaymentDate()).toBeNull();
})

test("Should return shipping information", () => {
    expect(branchWithdrawalSale.getShippingCost()).toBe(0);
    expect(branchWithdrawalSale.getDeliveryDate()).toBeNull();

    expect(traditionalSale.getShippingCost()).toBe(450);
    expect(traditionalSale.getDeliveryDate()).toEqual(traditionalShipping.getDeliveryDate());

    expect(inmediateSale.getShippingCost()).toBe(700);
    expect(inmediateSale.getDeliveryDate()).toEqual(inmediateShipping.getDeliveryDate());
})

test("Should return total items information", () => {
    expect(branchWithdrawalSale.getTotalItems()).toBe(3500);
    expect(traditionalSale.getTotalItems()).toBe(2000);
    expect(inmediateSale.getTotalItems()).toBe(1500);
})

test("Should return total information", () => {
    expect(branchWithdrawalSale.getTotal()).toBe(3500);
    expect(traditionalSale.getTotal()).toBe(2450);
    expect(inmediateSale.getTotal()).toBe(2200);
})

test("Should accept sale", () => {
    branchWithdrawalSale.accept();
    expect(branchWithdrawalSale.getStatus()).toBe("Accepted");
    expect(branchWithdrawalSale.getPaymentDate()).not.toBeNull();
})

test("Should cancel sale", () => {
    branchWithdrawalSale.cancel();
    expect(branchWithdrawalSale.getStatus()).toBe("Cancelled");
    expect(branchWithdrawalSale.getPaymentDate()).toBeNull();
})

test("Should deliver sale", () => {
    branchWithdrawalSale.accept();
    expect(branchWithdrawalSale.getStatus()).toBe("Accepted");
    expect(branchWithdrawalSale.getPaymentDate()).not.toBeNull();

    branchWithdrawalSale.deliver();
    expect(branchWithdrawalSale.getStatus()).toBe("Delivered");
    expect(branchWithdrawalSale.getDeliveryDate()).not.toBeNull();
})

test("Should receive sale", () => {
    branchWithdrawalSale.accept();
    expect(branchWithdrawalSale.getStatus()).toBe("Accepted");
    expect(branchWithdrawalSale.getPaymentDate()).not.toBeNull();

    branchWithdrawalSale.receive();
    expect(branchWithdrawalSale.getStatus()).toBe("Received");
})

test("Should do nothing", () => {
    branchWithdrawalSale.deliver();
    expect(branchWithdrawalSale.getStatus()).toBe("Received");

    branchWithdrawalSale.accept();
    expect(branchWithdrawalSale.getStatus()).toBe("Accepted");
    expect(branchWithdrawalSale.getPaymentDate()).not.toBeNull();

    branchWithdrawalSale.cancel()
    expect(branchWithdrawalSale.getStatus()).toBe("Accepted");

    branchWithdrawalSale.deliver();
    expect(branchWithdrawalSale.getStatus()).toBe("Delivered");
    expect(branchWithdrawalSale.getDeliveryDate()).not.toBeNull();

    branchWithdrawalSale.cancel();
    expect(branchWithdrawalSale.getStatus()).toBe("Delivered");
    branchWithdrawalSale.accept();
    expect(branchWithdrawalSale.getStatus()).toBe("Delivered");
    branchWithdrawalSale.receive();
    expect(branchWithdrawalSale.getStatus()).toBe("Delivered");

    traditionalSale.cancel();
    expect(traditionalSale.getStatus()).toBe("Cancelled");

    traditionalSale.deliver();
    expect(traditionalSale.getStatus()).toBe("Cancelled");
    traditionalSale.accept();
    expect(traditionalSale.getStatus()).toBe("Cancelled");
    traditionalSale.receive();
    expect(traditionalSale.getStatus()).toBe("Cancelled");
})