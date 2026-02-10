"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Polynomial = void 0;
const root_finder_1 = require("../../root-finder");
const line_1 = require("../line");
class Polynomial {
    constructor(coefficients) {
        this.coefficients = coefficients;
        this.derivative = null;
    }
    getDegree() {
        return this.coefficients.length - 1;
    }
    calculate(x) {
        if (this.coefficients.length <= 1024) {
            const degree = this.getDegree();
            let accumulatedX = 1;
            let result = 0;
            for (let index = degree; index >= 0; index--) {
                result += accumulatedX * this.coefficients[index];
                accumulatedX *= x;
            }
            return result;
        }
        let result = 0;
        for (let index = 0; index < this.coefficients.length; index++) {
            result = result * x + this.coefficients[index];
        }
        return result;
    }
    differentiate() {
        if (this.derivative) {
            return this.derivative;
        }
        const degree = this.getDegree();
        const coefficients = [];
        this.coefficients.forEach((coefficient, index) => {
            if (index === degree) {
                return;
            }
            coefficients.push(coefficient * (degree - index));
        });
        return (this.derivative = new Polynomial(coefficients));
    }
    findRoot(options) {
        const factory = new root_finder_1.RootFinderFactory(options);
        const finder = factory.make(options.method);
        const root = finder.findRoot(this);
        if (options.fallbackMethod &&
            !root.converged &&
            options.method !== options.fallbackMethod) {
            const fallbackFinder = factory.make(options.fallbackMethod);
            return fallbackFinder.findRoot(this);
        }
        return root;
    }
    getCoefficients() {
        return this.coefficients;
    }
    getTangentAt(x) {
        const derivative = this.differentiate();
        const m = derivative.calculate(x);
        const k = this.calculate(x) - m * x;
        return new line_1.Line(m, k);
    }
}
exports.Polynomial = Polynomial;
//# sourceMappingURL=polynomial.js.map