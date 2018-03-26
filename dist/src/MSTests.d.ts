import { Observation, Resource } from "midata";
import * as md from 'midata';
export declare class MSTests extends Observation {
    constructor(date: md.DateTime, comment: string);
    addRelated(resource: Resource): void;
}
