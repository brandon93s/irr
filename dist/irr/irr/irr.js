"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.irr = void 0;
const polynomial_1 = require("../../polynomial");
const root_finder_1 = require("../../root-finder");
function irr(values, options = {}) {
    const polynomial = new polynomial_1.Polynomial(values);
    const root = polynomial.findRoot((0, root_finder_1.getRootFinderOptionsWithDefaults)(options));
    if (!root.converged) {
        return NaN;
    }
    return root.value - 1;
}
exports.irr = irr;
//# sourceMappingURL=irr.js.map