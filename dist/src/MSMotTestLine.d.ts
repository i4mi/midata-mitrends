import { Observation } from "midata";
import * as md from 'midata';
export declare type handSide = "left" | "right";
export declare type methodLineTest = "Pen" | "Finger";
export declare class MSMotTestLine extends Observation {
    constructor(date: md.DateTime, handSide: handSide, methodLineTest: methodLineTest);
    addDTWAvgDist(dTWAvgDist: number): void;
    addLxDuration(lxDuration: number, lValue: number): void;
    addLxAvgDist(lxAvgDist: number, lValue: number): void;
    addLxStdDevDist(lxStdDevDist: number, lValue: number): void;
}
