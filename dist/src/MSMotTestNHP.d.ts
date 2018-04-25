import { Observation } from "midata";
export declare class MSMotTestNHP extends Observation {
    constructor(date: any);
    addDominantHandRoundOne(s: number, ms?: number): void;
    addDominantHandRoundTwo(s: number, ms?: number): void;
    addNotDominantHandRoundOne(s: number, ms?: number): void;
    addNotDominantHandRoundTwo(s: number, ms?: number): void;
    private componentGenerator(time, code, u);
}
