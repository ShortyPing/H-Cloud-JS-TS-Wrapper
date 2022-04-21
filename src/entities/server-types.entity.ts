export interface ServerTypes {
    /**
     * IDs of Server types that are supported and for which the Datacenter has enough resources left
     */
    available: number[],
    /**
     * IDs of Server types that are supported and for which the Datacenter has enough resources left
     */
    available_for_migration: number[],
    /**
     * IDs of Server types that are supported in the Datacenter
     */
    supported: number[]
}