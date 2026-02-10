"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xirr = void 0;
const irr_1 = require("../irr");
const transform_1 = require("../transform");
const utils_1 = require("../../utils");
function xirr(inputs, options = {}) {
    const transformedInputs = (0, transform_1.transform)(inputs);
    const days = transformedInputs.map(input => input.day);
    const firstDay = Math.min(...days);
    const lastDay = Math.max(...days);
    const totalDays = lastDay - firstDay + 1;
    const coefficients = (0, utils_1.zeros)(totalDays);
    transformedInputs.forEach(({ amount, day }) => (coefficients[day] += amount));
    return {
        days: totalDays,
        rate: (0, irr_1.irr)(coefficients, options),
    };
}
exports.xirr = xirr;
//# sourceMappingURL=xirr.js.map