import { registerResource, QuestionnaireResponse} from "midata";

@registerResource('resourceType','MSSurvey')
export class MSSurvey extends QuestionnaireResponse {

    private _qTitle: string;
    private _id: number;

    constructor() {
        let d = new Date().toISOString();
        super(d, "completed");
    }

    defineSurvey(linkID: number, questionnaireTitle: string) {
        let s = {
            linkId: linkID,
            text: questionnaireTitle,
            item: new Array()
        };

        this._qTitle = questionnaireTitle;
        this._id = linkID;
        
        super.addSurvey(s);
    }

    addItem(items: [{question: string, answer: string}]) {
        for(var i = 0; i < items.length; i++){
            let item = items[i];
            let j = i + 1;
            let aItem = {   
                linkId: this._id + "." + j, // R!  Pointer to specific item from Questionnaire
                text: item.question,
                answer: [{
                    valueString: item.answer
                }]};
            super.addItemToSurvey(aItem, this._qTitle);
        }
    }
}