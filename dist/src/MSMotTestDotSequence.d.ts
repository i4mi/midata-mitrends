import { Observation } from "midata";
export declare type handSide = "left" | "right";
export declare class MSMotTestDotSequence extends Observation {
    private componentTemplate;
    constructor(handSide: handSide);
    getComponent(code: String, display: String, dimensions: Number, data: any): any;
    addDotCoords(code: String, display: String, data: any): void;
    iterateData(data: any): String;
    locked(data: any): void;
    snap(data: any): void;
}
