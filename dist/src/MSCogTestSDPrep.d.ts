import { Observation } from "midata";
import * as md from "midata";
export declare class MSCogTestSDPrep extends Observation {
    constructor(date: md.DateTime);
    addNbCorrect(correctAssignmentAmount: number): void;
    addNbIncorrect(incorrectAssignmentAmount: number): void;
    addDuration(duration: number): void;
    addClickFrequency(clickFreq: number): void;
}
