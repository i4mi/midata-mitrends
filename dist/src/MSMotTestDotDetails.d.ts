import { Observation } from "midata";
export declare type handSide = "left" | "right";
export declare class MSMotTestDotDetails extends Observation {
    private componentTemplate;
    constructor(handSide: handSide);
    getComponent(code: String, display: String, dimensions: Number, data: any): any;
    addPointCoords(code: String, display: String, data: any): void;
    iterateData(data: any): String;
    iterationHelper(a: any): String;
    locked(data: any): void;
    snap(data: any): void;
    dpIterator(data: any): string;
    dpHelper(data: any): string;
}
