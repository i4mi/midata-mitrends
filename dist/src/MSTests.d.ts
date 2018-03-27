import { Observation, Resource } from "midata";
export declare class MSTests extends Observation {
    constructor(comment: string);
    addRelated(resource: Resource): void;
}
