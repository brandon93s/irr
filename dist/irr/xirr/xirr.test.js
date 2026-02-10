"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const polynomial_1 = require("../../polynomial");
const __1 = require("../..");
const root_finder_1 = require("../../root-finder");
const UNIQUE_ROOT = {
    converged: true,
    iterations: 0,
    value: Math.PI,
};
const UNIQUE_XIRR_RESULT = {
    days: 60,
    rate: Math.PI - 1,
};
const UNIQUE_DATA = [
    { amount: -10, date: '20180101' },
    { amount: 10, date: '20180201' },
    { amount: 0.05, date: '20180301' },
];
const UNIQUE_OPTIONS = {
    estimate: 'auto',
    epsilon: 1e-8,
    fallbackMethod: root_finder_1.RootFinderMethod.Bisection,
    maxIterations: 100,
    method: root_finder_1.RootFinderMethod.Newton,
};
const LONG_SEQUENCE_DATA = [
    { amount: -62577.1631095185, date: '20201231' },
    { amount: 42006.41221373999, date: '20211231' },
    { amount: 87791.69808381375, date: '20221231' },
    { amount: -202389.12795217926, date: '20231231' },
    { amount: -15880.959303411251, date: '20241231' },
    { amount: -35875.15906160025, date: '20251231' },
    { amount: -260428.00788954477, date: '20261231' },
    { amount: -78500, date: '20271231' },
    { amount: 292002.444987776, date: '20281231' },
    { amount: 450752.444987776, date: '20291231' },
    { amount: 273750, date: '20301231' },
    { amount: 216250, date: '20311231' },
    { amount: 115000, date: '20321231' },
    { amount: 105000, date: '20331231' },
    { amount: 150000, date: '20341231' },
    { amount: 150000, date: '20351231' },
    { amount: 100000, date: '20361231' },
    { amount: 50000, date: '20371231' },
    { amount: 37500, date: '20381231' },
];
describe('xirr', () => {
    test('uses Polynomial.prototype.findRoot() for the calculation', () => {
        const stub = jest
            .spyOn(polynomial_1.Polynomial.prototype, 'findRoot')
            .mockReturnValue(UNIQUE_ROOT);
        const result = (0, __1.xirr)(UNIQUE_DATA, UNIQUE_OPTIONS);
        expect(result).toStrictEqual(UNIQUE_XIRR_RESULT);
        expect(stub).toHaveBeenCalledTimes(1);
        jest.restoreAllMocks();
    });
    test('groups amounts from the same date', () => {
        const result = (0, __1.xirr)([
            { amount: -10, date: '20180101' },
            { amount: 5, date: '20180201' },
            { amount: 5, date: '20180201' },
            { amount: 0.05, date: '20180301' },
        ], UNIQUE_OPTIONS);
        expect(result).toStrictEqual({ days: 60, rate: 0.0001601831164046441 });
    });
    test('calculates xirr for a long yearly cash-flow sequence', () => {
        const result = (0, __1.xirr)(LONG_SEQUENCE_DATA);
        expect(result.days).toBe(6575);
        expect(result.rate).toBeCloseTo(0.0006331317126750946, 12);
    });
});
//# sourceMappingURL=xirr.test.js.map