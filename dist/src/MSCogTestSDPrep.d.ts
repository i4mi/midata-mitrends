import { Observation } from "midata";
export declare class MSCogTestSDPrep extends Observation {
    constructor();
    addNbCorrect(correctAssignmentAmount: number): void;
    addNbIncorrect(incorrectAssignmentAmount: number): void;
    addDuration(duration: number): void;
    addClickFrequency(clickFreq: number): void;
    addResultsPerClick(rawData: any[]): void;
    private _processClickResult(data);
}
