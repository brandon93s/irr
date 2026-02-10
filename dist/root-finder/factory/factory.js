"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootFinderFactory = void 0;
const definition_1 = require("../definition");
const bisection_1 = require("../bisection");
const newton_1 = require("../newton");
class RootFinderFactory {
    constructor(options) {
        this.options = options;
    }
    make(method) {
        switch (method) {
            case definition_1.RootFinderMethod.Bisection:
                return new bisection_1.BisectionRootFinder(this.options);
            case definition_1.RootFinderMethod.Newton:
                return new newton_1.NewtonRootFinder(this.options);
            default:
                throw new Error(`RootFinderFactory ${method} not implemented.`);
        }
    }
}
exports.RootFinderFactory = RootFinderFactory;
//# sourceMappingURL=factory.js.map