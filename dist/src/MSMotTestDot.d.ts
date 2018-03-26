import { Observation } from "midata";
import * as md from 'midata';
export declare type handSide = "left" | "right";
export declare class MSMotTestDot extends Observation {
    constructor(date: md.DateTime, handSide: handSide);
    addDuration(duration: number): void;
    addPoints(pointsAmount: number): void;
}
