"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRootFinderOptionsWithDefaults = exports.DEFAULT_ROOT_FINDER_OPTIONS = exports.RootFinderMethod = void 0;
var RootFinderMethod;
(function (RootFinderMethod) {
    RootFinderMethod["Bisection"] = "bisection";
    RootFinderMethod["Newton"] = "newton";
})(RootFinderMethod = exports.RootFinderMethod || (exports.RootFinderMethod = {}));
exports.DEFAULT_ROOT_FINDER_OPTIONS = {
    estimate: 'auto',
    epsilon: 1e-8,
    fallbackMethod: RootFinderMethod.Bisection,
    maxIterations: 100,
    method: RootFinderMethod.Newton,
};
function getRootFinderOptionsWithDefaults(options) {
    return Object.assign({}, exports.DEFAULT_ROOT_FINDER_OPTIONS, options);
}
exports.getRootFinderOptionsWithDefaults = getRootFinderOptionsWithDefaults;
//# sourceMappingURL=definition.js.map