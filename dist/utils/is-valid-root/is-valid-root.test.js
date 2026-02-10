"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_valid_root_1 = require("./is-valid-root");
describe('isValidRoot', () => {
    const cases = [
        [5, true],
        [0.01, true],
        [NaN, false],
        [Infinity, false],
        [-Infinity, false],
        [-0.01, false],
        [-5, false],
    ];
    cases.forEach(([input, expected]) => {
        test(`${input} -> ${expected}`, () => {
            expect((0, is_valid_root_1.isValidRoot)(input)).toBe(expected);
        });
    });
});
//# sourceMappingURL=is-valid-root.test.js.map