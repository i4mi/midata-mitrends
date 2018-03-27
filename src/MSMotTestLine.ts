import {Observation, registerResource} from "midata";

export type handSide = "left" | "right";

registerResource('resourceType','MSMotTestLine')
export class MSMotTestLine extends Observation {
    constructor(handSide: handSide) {
        let code = {
            coding: [
                {
                    system: "http://midata.coop",
                    code: "MSMotTestLine",
                    display: "MS Motoriktest Linie nachzeichnen"
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


    addLxDuration(lxDuration: number, lValue: number) {

        super.addComponent({
            code: {
                coding: [{
                    system: "http://midata.coop/MSMotTestLine",
                    code: `L${lValue}_Duration`,
                    display: "Dauer zum Zeichnen der Linie"
                }]
            },
            valueQuantity: {
                value: lxDuration,
                unit: "s",
                code: "s",
                system: "http://unitsofmeasure.org"
            }
        })

    }

    addLxAvgDist(lxAvgDist: number, lValue: number) {

        super.addComponent({
            code: {
                coding: [{
                    system: "http://midata.coop/MSMotTestLine",
                    code: `L${lValue}_AvgDist`,
                    display: "Abweichung der gezeichneten Linie zur Referenzlinie in Pixel"
                }]
            },
            valueQuantity: {
                value: lxAvgDist
            }
        })

    }

    addLxStdDevDist(lxStdDevDist: number, lValue: number) {

        super.addComponent({
            code: {
                coding: [{
                    system: "http://midata.coop/MSMotTestLine",
                    code: `L${lValue}_StdDevDist`,
                    display: "Ähnlichkeit der Linien in Pixel"
                }]
            },
            valueQuantity: {
                value: lxStdDevDist
            }
        })

    }
}