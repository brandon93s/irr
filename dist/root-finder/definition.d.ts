import { Polynomial } from '../polynomial';
export declare enum RootFinderMethod {
    Bisection = "bisection",
    Newton = "newton"
}
export type RootFinderOptions = {
    epsilon: number;
    estimate: number | 'auto';
    fallbackMethod: RootFinderMethod | null;
    maxIterations: number;
    method: RootFinderMethod;
};
export type Root = {
    converged: boolean;
    iterations: number;
    value: number;
};
export interface IRootFinder {
    findRoot(polynomial: Polynomial): Root;
}
export declare const DEFAULT_ROOT_FINDER_OPTIONS: RootFinderOptions;
export declare function getRootFinderOptionsWithDefaults(options: Partial<RootFinderOptions>): RootFinderOptions;
