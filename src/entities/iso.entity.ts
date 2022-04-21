export interface Iso {
    /**
     * ISO 8601 timestamp of deprecation, null if ISO is still available. After the deprecation time it will no longer be possible to attach the ISO to Servers.
     */
    deprecated: string,
    /**
     * Description of the ISO
     */
    description: string,
    /**
     * ID of the Resource
     */
    id: number,
    /**
     * Unique identifier of the ISO. Only set for public ISOs
     */
    name: string,
    /**
     * Possible enum values:
     * publicprivate
     * Type of the ISO
     */
    type: 'public' | 'private'
}