"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zeros_1 = require("./zeros");
describe('zeros', () => {
    describe('creates arrays with given length', () => {
        const cases = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        cases.forEach(length => {
            test(`length = ${length}`, () => {
                const expected = new Array(length).fill(0);
                expect((0, zeros_1.zeros)(length)).toStrictEqual(expected);
            });
        });
    });
});
//# sourceMappingURL=zeros.test.js.map