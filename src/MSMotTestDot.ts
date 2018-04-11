import {Observation, registerResource} from "midata";

export type handSide = "left" | "right";

@registerResource('resourceType','MSMotTestDot')
export class MSMotTestDot extends Observation {
    constructor(handSide: handSide) {
        let code = {
            coding: [
                {
                    system: "http://midata.coop",
                    code: "MSMotTestDot",
                    display: "MS Motoriktest Punkte bewegen"
                }
            ]
        };

        let bodySite = {
            coding: [
                {
                    system: "http://snomed.info/sct",
                    code: handSide === "left" ? "368456002" : "368455003",
                    display: handSide === "left" ? "Linke Hand" : "Rechte Hand",
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

        super.addProperty("bodySite", bodySite);

    }

    addDuration(duration: number) {

        super.addComponent({
            code: {
                coding: [{
                    system: "http://midata.coop/MSMotTestDot",
                    code: "Duration",
                    display: "Dauer der Übung"
                }]
            },
            valueQuantity: {
                value: duration,
                unit: "s",
                code: "s",
                system: "http://unitsofmeasure.org"
            }
        })
    }

    addPoints(pointsAmount: number) {

        super.addComponent({
            code: {
                coding: [{
                    system: "http://midata.coop/MSMotTestDot",
                    code: "Points",
                    display: "Erreichte Punktzahl"
                }]
            },
            valueQuantity: {
                value: pointsAmount
            }
        })
    }




}
;