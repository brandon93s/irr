"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const factory_1 = require("../factory");
const definition_1 = require("../definition");
const polynomial_1 = require("../../polynomial");
const utils_1 = require("../../utils");
const __1 = require("..");
const createRootFinder = (options) => {
    const factory = new factory_1.RootFinderFactory((0, __1.getRootFinderOptionsWithDefaults)(options));
    const instance = factory.make(definition_1.RootFinderMethod.Bisection);
    return instance;
};
describe('BisectionRootFinder', () => {
    describe('#findRoot', () => {
        const cases = [
            [
                [-10, -10, 21],
                {
                    epsilon: 1e-8,
                    maxIterations: 1000,
                },
                {
                    converged: true,
                    iterations: 29,
                    value: 1.0329709686338902,
                },
            ],
            [
                [-10, -10, 15],
                {
                    epsilon: 1e-15,
                    maxIterations: 1000,
                },
                {
                    converged: true,
                    iterations: 51,
                    value: 0.8228756555322954,
                },
            ],
            [
                [-10, -10, 15],
                {
                    epsilon: 1e-15,
                    maxIterations: 50,
                },
                {
                    converged: false,
                    iterations: 50,
                    value: 0.8228756555322958,
                },
            ],
            [
                [-1, 1, -1, 1, -1, 1, -1, 1, 1],
                {
                    epsilon: 1e-8,
                    maxIterations: 1000,
                },
                {
                    converged: true,
                    iterations: 29,
                    value: 1.141179632395506,
                },
            ],
            [
                [-10, ...(0, utils_1.zeros)(29), 5, ...(0, utils_1.zeros)(28), 0.1],
                {
                    epsilon: 1e-8,
                    maxIterations: 1000,
                },
                {
                    converged: true,
                    iterations: 28,
                    value: 0.9783664830029011,
                },
            ],
        ];
        cases.forEach(([coefficients, options, expected], index) => {
            test(`passes case #${index + 1}`, () => {
                const finder = createRootFinder(options);
                const polynomial = new polynomial_1.Polynomial(coefficients);
                const root = finder.findRoot(polynomial);
                expect(root).toStrictEqual(expected);
            });
        });
    });
});
//# sourceMappingURL=bisection.test.js.map