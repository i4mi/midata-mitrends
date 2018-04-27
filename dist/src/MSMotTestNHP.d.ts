import { Observation } from "midata";
export declare class MSMotTestNHP extends Observation {
    constructor(date: any, handSide: string);
    addDominantHandRoundOne(s: number): void;
    addDominantHandRoundTwo(s: number): void;
    addNotDominantHandRoundOne(s: number): void;
    addNotDominantHandRoundTwo(s: number): void;
    private componentGenerator(time, code, u);
}
