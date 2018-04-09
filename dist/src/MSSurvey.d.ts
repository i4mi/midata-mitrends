import { QuestionnaireResponse } from "midata";
export declare class MSSurvey extends QuestionnaireResponse {
    private _qTitle;
    private _id;
    constructor();
    defineSurvey(linkID: number, questionnaireTitle: string): void;
    addItem(items: [{
        question: string;
        answer: string;
    }]): void;
}
