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

        super.addProperty("bodySide", {
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
        this.componentGenerator(s, "Dominant1S", "s");
    }

    addDominantHandRoundTwo(s: number) {
        this.componentGenerator(s, "Dominant2S", "s");
    }

    addNotDominantHandRoundOne(s: number) {
        this.componentGenerator(s, "NotDominant1S", "s");
    }

    addNotDominantHandRoundTwo(s: number) {
        this.componentGenerator(s, "NotDominant2S", "s");
    }

    private componentGenerator(time: number, code: string, u: string) {
        var d = (u == "s") ? "Execution time of test in s" : "Addition to execution time of test in ms";
        super.addComponent({
            code: {
                coding: [{
                    system: "http://midata.coop/MSMotNineHolePeg",
                    code: "MSMotNineHolePegTestRun" + code,
                    display: d
                }]
            },
            valueQuantity: {
                value: time,
                unit: u,
                code: u,
                system: "http://unitsofmeasure.org"
            }
        });
    }
}