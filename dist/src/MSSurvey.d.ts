export declare class MSSurvey {
    private resource;
    constructor();
    defineSurvey(linkID: number, questionnaireTitle: String): void;
    addItem(items: [{
        question: String;
        answer: String;
    }]): void;
}
