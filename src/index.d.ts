import { Common } from './jumio.common';
declare class Jumio extends Common {
    constructor(params: Record<string, any>);
    init(params: Record<string, any>): void;
}

export {
    Jumio
};
