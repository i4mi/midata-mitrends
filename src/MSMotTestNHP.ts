import {Observation, registerResource} from "midata";

@registerResource('resourceType','MSMotTestNHP')
export class MSMotTestNHP extends Observation {
    constructor(date: any, handSide: string) {
        let code = {
            coding: [
                {
                    system: "http://midata.coop",
                    code: "MSMotNineHolePeg",
                    display: "MS Motoriktest Nine-hole Peg"
                }
            ]
        };

        super({_dateTime: date}, code, {
            coding: [{
                system: 'http://hl7.org/fhir/observation-category',
                code: 'survey',
                display: 'Survey'
            }],
            text: 'Survey'

        });

        super.addProperty("bodySite", {
            coding: [
                {
                    system: "http://snomed.info/sct",
                    code: handSide === "left" ? "368456002" : "368455003",
                    display: handSide === "left" ? "Linke Hand" : "Rechte Hand",
                }
            ]
        });

    }

    addDominantHandRoundOne(s: number) {
        this.componentGenerator(s, "DominantOne");
    }

    addDominantHandRoundTwo(s: number) {
        this.componentGenerator(s, "DominantTwo");
    }

    addNotDominantHandRoundOne(s: number) {
        this.componentGenerator(s, "NotDominantOne");
    }

    addNotDominantHandRoundTwo(s: number) {
        this.componentGenerator(s, "NotDominantTwo");
    }

    private componentGenerator(time: number, code: string) {
        super.addComponent({
            code: {
                coding: [{
                    system: "http://midata.coop/MSMotNineHolePeg",
                    code: "MSMotNineHolePegTestRun" + code,
                    display: "Execution time of test in s"
                }]
            },
            valueQuantity: {
                value: time,
                unit: "s",
                code: "s",
                system: "http://unitsofmeasure.org"
            }
        });
    }
}