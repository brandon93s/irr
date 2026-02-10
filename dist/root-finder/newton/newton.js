"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewtonRootFinder = void 0;
const utils_1 = require("../../utils");
class NewtonRootFinder {
    constructor(options) {
        this.options = options;
    }
    autoEstimate(polynomial) {
        const coefficients = polynomial.getCoefficients();
        const { length } = coefficients;
        let positive = 0;
        let negative = 0;
        coefficients.forEach(coefficient => {
            if (coefficient > 0) {
                positive += coefficient;
            }
            else {
                negative -= coefficient;
            }
        });
        return (positive / negative - 1) / length + 1;
    }
    findRoot(polynomial) {
        const epsilon = this.options.epsilon;
        const { estimate } = this.options;
        const maxIterations = this.options.maxIterations;
        let iteration = 0;
        let root = estimate === 'auto' ? this.autoEstimate(polynomial) : estimate;
        while (iteration++ < maxIterations) {
            const tangent = polynomial.getTangentAt(root);
            const newRoot = tangent.findRoot().value;
            const delta = Math.abs(newRoot - root);
            root = newRoot;
            if (delta < epsilon) {
                return {
                    converged: true,
                    iterations: iteration,
                    value: root,
                };
            }
            if (!(0, utils_1.isValidRoot)(root)) {
                return {
                    converged: false,
                    iterations: iteration,
                    value: root,
                };
            }
        }
        return {
            converged: false,
            iterations: iteration - 1,
            value: root,
        };
    }
}
exports.NewtonRootFinder = NewtonRootFinder;
//# sourceMappingURL=newton.js.map