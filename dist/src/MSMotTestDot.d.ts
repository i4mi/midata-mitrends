import { Observation } from "midata";
export declare type handSide = "left" | "right";
export declare class MSMotTestDot extends Observation {
    constructor(handSide: handSide);
    addDuration(duration: number): void;
    addPoints(pointsAmount: number): void;
}
