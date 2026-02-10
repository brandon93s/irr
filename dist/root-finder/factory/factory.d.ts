import { RootFinderMethod, IRootFinder, RootFinderOptions } from '../definition';
export interface IRootFinderConstructor {
    new (options: RootFinderOptions): IRootFinder;
}
export declare class RootFinderFactory {
    private readonly options;
    constructor(options: RootFinderOptions);
    make(method: RootFinderMethod): IRootFinder;
}
