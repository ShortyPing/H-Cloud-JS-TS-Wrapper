import {Location} from "./location.entity";
import {ServerTypes} from "./server-types.entity";

export interface Datacenter {
    /**
     * Description of the Datacenter
     */
    description: string,
    /**
     * ID of the Resource
     */
    id: number,
    location: Location,
    /**
     * Unique identifier of the Datacenter
     */
    name: string,
    /**
     * The Server types the Datacenter can handle
     */
    server_types: ServerTypes
}