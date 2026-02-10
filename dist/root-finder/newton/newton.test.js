"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const factory_1 = require("../factory");
const definition_1 = require("../definition");
const polynomial_1 = require("../../polynomial");
const utils_1 = require("../../utils");
const __1 = require("..");
const createRootFinder = (options) => {
    const factory = new factory_1.RootFinderFactory((0, __1.getRootFinderOptionsWithDefaults)(options));
    const instance = factory.make(definition_1.RootFinderMethod.Newton);
    return instance;
};
describe('NewtonRootFinder', () => {
    describe('#findRoot', () => {
        const cases = [
            [
                [-10, -10, 21],
                {
                    epsilon: 1e-8,
                    estimate: 'auto',
                    maxIterations: 1000,
                },
                {
                    converged: true,
                    iterations: 3,
                    value: 1.0329709716755893,
                },
            ],
            [
                [-10, -10, 15],
                {
                    epsilon: 1e-100,
                    estimate: 'auto',
                    maxIterations: 1000,
                },
                {
                    converged: true,
                    iterations: 5,
                    value: 0.8228756555322954,
                },
            ],
            [
                [-10, -10, 15],
                {
                    epsilon: 1e-100,
                    estimate: 'auto',
                    maxIterations: 4,
                },
                {
                    converged: false,
                    iterations: 4,
                    value: 0.8228756555322954,
                },
            ],
            [
                [-1, 1, -1, 1, -1, 1, -1, 1, 1],
                {
                    epsilon: 1e-8,
                    estimate: 'auto',
                    maxIterations: 1000,
                },
                {
                    converged: true,
                    iterations: 6,
                    value: 1.1411796348542165,
                },
            ],
            [
                [-10, ...(0, utils_1.zeros)(29), 5, ...(0, utils_1.zeros)(28), 0.1],
                {
                    epsilon: 1e-8,
                    estimate: 'auto',
                    maxIterations: 1000,
                },
                {
                    converged: true,
                    iterations: 6,
                    value: 0.9783664859233557,
                },
            ],
            [
                [-10, ...(0, utils_1.zeros)(29), 5, ...(0, utils_1.zeros)(28), 0.1],
                {
                    epsilon: 1e-8,
                    estimate: 0.5,
                    maxIterations: 1000,
                },
                {
                    converged: false,
                    iterations: 1,
                    value: -185127.41863258032,
                },
            ],
        ];
        cases.forEach(([coefficients, options, expected], index) => {
            test(`passes case #${index + 1}`, () => {
                const epsilon = options.epsilon;
                const finder = createRootFinder(options);
                const polynomial = new polynomial_1.Polynomial(coefficients);
                const root = finder.findRoot(polynomial);
                expect(root).toStrictEqual(expected);
                if (root.converged) {
                    const calculated = polynomial.calculate(root.value);
                    expect(calculated <= epsilon).toBe(true);
                }
            });
        });
    });
});
//# sourceMappingURL=newton.test.js.map