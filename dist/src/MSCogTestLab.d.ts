import { Observation } from "midata";
export declare class MSCogTestLab extends Observation {
    constructor(tryAmount: number);
    addNbLabWay(numberLab: number): void;
    addNbClicks(clickAmount: number): void;
    addNbPointsLab(pointsLabAmount: number): void;
    addNbCorrectConnections(correctConnectionsAmount: number): void;
    addNbInvertedConnections(invertedConnectionsAmount: number): void;
    addNbConnectionsGiven(connectionsGivenAmount: number): void;
    addNbErrors(errorAmount: number): void;
    addNbRuleBreaks(ruleBreakAmount: number): void;
    addNbCorrections(correctionAmount: number): void;
    addScore(scoreAmount: number): void;
    addNbCorrectTries(correctTriesAmount: number): void;
    addDuration(duration: number): void;
}
