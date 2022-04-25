export interface PlacementGroup {
    /**
     * Point in time when the Resource was created (in ISO-8601 format)
     */
    created: string
    /**
     * ID of the Resource
     */
    id: number
    /**
     * User-defined labels (key-value pairs)
     */
    labels: object
    /**
     * Name of the Resource. Must be unique per Project.
     */
    name: string
    /**
     * Array of IDs of Servers that are part of this Placement Group
     */
    servers: number[]
    /**
     * Type of the Placement Group
     */
    type: string
}