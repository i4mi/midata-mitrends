import { Observation } from "midata";
export declare type handSide = "left" | "right";
export declare type methodLineTest = "Pen" | "Finger";
export declare class MSMotTestLine extends Observation {
    constructor(handSide: handSide, methodLineTest: methodLineTest);
    addDTWAvgDist(dTWAvgDist: number): void;
    addLxDuration(lxDuration: number, lValue: number): void;
    addLxAvgDist(lxAvgDist: number, lValue: number): void;
    addVisibleLine(isVisible: boolean): void;
    addLxStdDevDist(lxStdDevDist: number, lValue: number): void;
}
