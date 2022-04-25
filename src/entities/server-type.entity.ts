import {Price} from "./price.entity";

export interface ServerType {
    /**
     * Number of cpu cores a Server of this type will have
     */
    cores: number

    /**
     * Type of cpu
     */
    cpu_type: number

    /**
     * True if Server type is deprecated
     */
    deprecated: boolean

    /**
     * Description of the Server type
     */
    description: string

    /**
     * Disk size a Server of this type will have in GB
     */
    disk: number

    /**
     * ID of the Server type
     */
    id: number

    /**
     * Memory a Server of this type will have in GB
     */
    memory: number

    /**
     * Unique identifier of the Server type
     */
    name: string

    /**
     * Prices in different Locations
     */
    prices: Price[]

    /**
     * Type of Server boot drive. Local has higher speed. Network has better availability.
     */
    storage_type: 'local' | 'network'
}