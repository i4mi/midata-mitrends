import {Observation, registerResource} from "midata";

export type handSide = "left" | "right";

@registerResource('resourceType','MSMotTestDot')
export class MSMotTestDotDetails extends Observation {

    private componentTemplate: any;

    constructor(handSide: handSide) {
        let code = {
            coding: [
                {
                    system: "http://midata.coop",
                    code: "MSMotTestDotDetail",
                    display: "MS Motoriktest Punkte bewegen pro Durchgang"
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
                    system: "http://midata.coop/MSMotTestDotDetail",
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

    addPointCoords(code: String, display: String, data: any) : void {
        let dim = (data[0] instanceof Array &&
            typeof data[0][0].t !== "undefined") ? 4 : 3;
        let data2 = this.iterateData(data);
        let component = this.getComponent(code, display, dim, data2);
        super.addComponent(component);
    }

    // Convert from array to string
    iterateData(data: any): String{
        var string = '';
        for(let a of data) {
            if (typeof a[0] !== "undefined") {
                string += this.iterationHelper(a[0]);
            } else 
            {
                string += this.iterationHelper(a);
            }
        }
            
        return string;
    };

    iterationHelper(a: any): String { 
        var string = a.x + " " + a.y + " ";
        if (typeof a.t !== "undefined") {
            string += a.t + " ";
        }
        string += ";" + " ";
        return string;
    };

    locked(data: any){ 
        var lockedPos = '';
        for(let p of data) {
           lockedPos += this.dpIterator(p.lockedPeriod);
        }

        let component = this.getComponent(
            "LockedPeriod",
            "Zeitpunkt loslassen, Dot#",
            3,
            lockedPos
        );
        super.addComponent(component);
    };
   
    snap(data: any){
        var snapPos = '';
        for (let sp of data) {
            snapPos += this.dpHelper(sp);
        }

        let component = this.getComponent(
            "SnapOrder",
            "Zeitpunkt, Dot#, Pos#",
            4,
            snapPos
        );
        super.addComponent(component);
    }

    dpIterator(data: any){
        var string = '';
        for (let a of data) {
            if (typeof a[0] !== "undefined") {
                console.log(a[0]);
                string += this.dpHelper(a[0]);
            } else 
            {
                string += this.dpHelper(a);
            }
        }
        return string;
    }

    dpHelper(data: any){
        var string = data.t + " " + data.dot + " ";
        if (typeof data.pos !== "undefined") {
            string += data.pos + " ";
        }
        string += ";" + " ";
        return string;
    }
};