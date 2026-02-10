"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const polynomial_1 = require("../../polynomial");
const irr_1 = require("./irr");
const root_finder_1 = require("../../root-finder");
const UNIQUE_ROOT = {
    converged: true,
    iterations: 0,
    value: Math.PI,
};
const UNIQUE_COEFFICIENTS = [2, 7, 0, 9];
const UNIQUE_OPTIONS = {
    estimate: 'auto',
    epsilon: 1e-8,
    fallbackMethod: root_finder_1.RootFinderMethod.Bisection,
    maxIterations: 100,
    method: root_finder_1.RootFinderMethod.Newton,
};
describe('irr', () => {
    test('uses Polynomial.prototype.findRoot() for the calculation', () => {
        const stub = jest
            .spyOn(polynomial_1.Polynomial.prototype, 'findRoot')
            .mockReturnValue(UNIQUE_ROOT);
        const result = (0, irr_1.irr)(UNIQUE_COEFFICIENTS, UNIQUE_OPTIONS);
        expect(result).toBe(UNIQUE_ROOT.value - 1);
        expect(stub).toHaveBeenCalledTimes(1);
    });
});
//# sourceMappingURL=irr.test.js.map