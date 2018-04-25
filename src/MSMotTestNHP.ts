import {Observation, registerResource} from "midata";

@registerResource('resourceType','MSMotTestNHP')
export class MSMotTestNHP extends Observation {
    constructor(date: any) {
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

    }

    addDominantHandRoundOne(s: number, ms?: number) {
        this.componentGenerator(s, "Dominant1S", "s");

        if (typeof ms !== "undefined") {
            this.componentGenerator(ms, "Dominant1MS", "ms");
        }
    }

    addDominantHandRoundTwo(s: number, ms?: number) {
        this.componentGenerator(s, "Dominant2S", "s");

        if (typeof ms !== "undefined") {
            this.componentGenerator(ms, "Dominant2MS", "ms");
        }
    }

    addNotDominantHandRoundOne(s: number, ms?: number) {
        this.componentGenerator(s, "NotDominant1S", "s");

        if (typeof ms !== "undefined") {
            this.componentGenerator(ms, "NotDominant1MS", "ms");
        }
    }

    addNotDominantHandRoundTwo(s: number, ms?: number) {
        this.componentGenerator(s, "NotDominant2S", "s");

        if (typeof ms !== "undefined") {
            this.componentGenerator(ms, "NotDominant2MS", "ms");
        }
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