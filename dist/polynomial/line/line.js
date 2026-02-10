"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Line = void 0;
class Line {
    constructor(m, k) {
        this.m = m;
        this.k = k;
    }
    calculate(x) {
        return this.m * x + this.k;
    }
    findRoot() {
        return {
            converged: true,
            iterations: 0,
            value: -this.k / this.m,
        };
    }
    getK() {
        return this.k;
    }
    getM() {
        return this.m;
    }
}
exports.Line = Line;
//# sourceMappingURL=line.js.map