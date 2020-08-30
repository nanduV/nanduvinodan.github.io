import { ProjectDetailInterface } from "./ProjectDetailInterface";

export interface WorkDetailInterface {
    data: {
        designation?: string,
        organization?: string,
        projects?: Array<ProjectDetailInterface>
    }
}