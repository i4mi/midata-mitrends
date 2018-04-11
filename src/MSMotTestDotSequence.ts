import {Observation, registerResource} from "midata";

export type handSide = "left" | "right";

@registerResource('resourceType','MSMotTestDot')
export class MSMotTestDotSequence extends Observation {

    private componentTemplate: any;

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
    
    getComponent(code: String , display: String, dimensions: Number, data: any): any{
     return {
            code: {
                coding: [{
                    system: "http://midata.coop/MSMotTestDot",
                    code: code,
                    display: display
                }]
            },
            valueSampledData: {
                origin: {
                    value: 0
                },
                period: 0,
                dimensions: dimensions,
                data: data
             }
            }
    }

    addDotCoords(code: String, display: String, data: any) : void {
        let dim = (data[0].t !== undefined && data[0].t !== null) ? 2 : 3;
        data = this.iterateData(data);
        let component = this.getComponent(code, display, dim, data);
        super.addComponent(component);
    }

    // Convert from array to string
    iterateData(data: any): String{
        var string = '';
        for(let a of data)
            string += a.join(' ') + " ";
        return string;
    };

    locked(data: any){ 
        data = this.iterateData(data);
        let component = this.getComponent(
            "LockedPeriod",
            "Locked Period Punkte freigelassen Zeitpunkt, Zustand Dot1, Zustand Dot2, Zustand Dot3",
            4,
            data
        );
        super.addComponent(component);
    };
    
    snap(data: any){
        data = this.iterateData(data);
        let component = this.getComponent(
            "SnapOrder",
            "Snap Order: Zeitpunkt, Dot#, Pos#",
            3,
            data
        );
        super.addComponent(component);
    }
};