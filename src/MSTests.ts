import {Observation, registerResource, Resource} from "midata";

@registerResource('resourceType','MSTests')
export class MSTests extends Observation {
    constructor(comment: string) {
        let code = {
            coding: [
                {
                    system: "http://midata.coop",
                    code: "MSTests",
                    display: "MitrendS Sammelobjekt pro Testdurchlauf"
                }
            ]
        };

        super({_dateTime: new Date().toISOString()}, code, {
            coding: [{
                system: 'http://hl7.org/fhir/observation-category',
                code: 'survey',
                display: 'Survey'
            }],
            text: 'Survey'

        });
        super.addProperty("comment", comment);
    }

    addRelated(resource: Resource) {
        super.addRelated(resource);
    }
}