import {Observation, registerResource} from "midata";

@registerResource('resourceType','MSSurvey')
export class MSSurvey {

    private resource: any;

    constructor() {
        this.resource = {
                "resourceType" : "QuestionnaireResponse",
                "extension": [  //** Code copy from Survey answer
                  {
                    "url": "http://midata.coop/extensions/response-code",
                    "valueCoding": {
                        "system": "http://midata.coop",
                        "code": "QuestionnaireResponse",
                        "display": "Questionnaire"
                    }
                  }
              ],
              "status" : "completed", // R!  in-progress | completed | amended | entered-in-error | stopped
              "authored" : new Date().toISOString(), // Date the answers were gathered
              "item" : []
        }
    }
    
    defineSurvey(linkID: number, questionnaireTitle: String){
        this.resource.item = [{
            "linkId" : linkID, // R!  Pointer to specific item from Questionnaire
            "text" : questionnaireTitle, // Name for group or question text
            "item" : []
        }];
    }


    addItem(items: [{question: String, answer: String}]){
        for(var i = 0; i < items.length; i++){
            let item = items[i];
            let j = i + 1;
            this.resource.item[0].item.push(
                {   "linkId" : this.resource.item[0].linkId + "." + j, // R!  Pointer to specific item from Questionnaire
                    "text" : item.question,
                    "answer" : [
                      {
                        "valueString" : item.answer
                      }
                    ]
                  }
            );
        }
    }
};
