"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BisectionRootFinder = void 0;
const utils_1 = require("../../utils");
class BisectionRootFinder {
    constructor(options) {
        this.options = options;
    }
    findUpperLimit(polynomial) {
        const maxIterations = this.options.maxIterations;
        let iteration = 0;
        let result = 1;
        while (iteration++ < maxIterations) {
            const calculated = polynomial.calculate(result);
            if (calculated < 0) {
                return result;
            }
            result *= 2;
        }
        return NaN;
    }
    findRoot(polynomial) {
        const upperLimit = this.findUpperLimit(polynomial);
        if (!(0, utils_1.isValidRoot)(upperLimit)) {
            return {
                converged: false,
                iterations: 0,
                value: NaN,
            };
        }
        const limits = [0, upperLimit];
        const epsilon = this.options.epsilon;
        const maxIterations = this.options.maxIterations;
        let iteration = 0;
        let result = 0;
        while (iteration++ < maxIterations) {
            const delta = Math.abs(limits[0] - limits[1]);
            result = (limits[0] + limits[1]) / 2;
            if (delta < epsilon) {
                return {
                    converged: true,
                    iterations: iteration,
                    value: result,
                };
            }
            const calculated = polynomial.calculate(result);
            if (calculated < 0) {
                limits[1] = result;
            }
            else {
                limits[0] = result;
            }
        }
        return {
            converged: false,
            iterations: iteration - 1,
            value: result,
        };
    }
}
exports.BisectionRootFinder = BisectionRootFinder;
//# sourceMappingURL=bisection.js.map