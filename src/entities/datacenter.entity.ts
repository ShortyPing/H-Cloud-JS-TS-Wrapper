import {Location} from "./location.entity";
import {ServerTypes} from "./server-types.entity";

export interface Datacenter {
    description: string,
    id: number,
    location: Location,
    name: string,
    server_types: ServerTypes
}