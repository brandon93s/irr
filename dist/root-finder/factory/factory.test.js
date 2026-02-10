"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const factory_1 = require("./factory");
const definition_1 = require("../definition");
const bisection_1 = require("../bisection");
const newton_1 = require("../newton");
const __1 = require("..");
describe('RootFinderFactory', () => {
    const factory = new factory_1.RootFinderFactory((0, __1.getRootFinderOptionsWithDefaults)({}));
    describe('#make', () => {
        const cases = [
            [definition_1.RootFinderMethod.Bisection, bisection_1.BisectionRootFinder],
            [definition_1.RootFinderMethod.Newton, newton_1.NewtonRootFinder],
        ];
        cases.forEach(([method, Class]) => {
            test(`RootFinderMethod.${method} -> ${Class.name}`, () => {
                const instance = factory.make(method);
                expect(instance).toBeInstanceOf(Class);
            });
        });
        test('throw error for invalid values', () => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            expect(() => factory.make(null)).toThrow();
        });
    });
});
//# sourceMappingURL=factory.test.js.map