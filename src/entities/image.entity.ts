export interface Image {
    /**
     * ID of Server the Image is bound to. Only set for Images of type backup.
     */
    bount_to: number;
    /**
     * Build ID of the Image
     */
    build_id?: string;
    /**
     * Point in time when the Resource was created (in ISO-8601 format)
     */
    created: string;
    /**
     * Information about the Server the Image was created from
     */
    created_from: {
        /**
         * ID of the Server the Image was created from
         */
        id: number,
        /**
         * Server name at the time the Image was created
         */
        name: string
    };
    /**
     * Point in time where the Image was deleted (in ISO-8601 format)
     */
    deleted: string;
    /**
     * Point in time when the Image is considered to be deprecated (in ISO-8601 format)
     */
    deprecated: string;
    /**
     * Description of the Image
     */
    description: string;
    /**
     * Size of the disk contained in the Image in GB
     */
    disk_size: number;
    /**
     * ID of the Resource
     */
    id: number;
    /**
     * Size of the Image file in our storage in GB. For snapshot Images this is the value relevant for calculating costs for the Image.
     */
    image_size: number;
    /**
     * User-defined labels (key-value pairs)
     */
    labels: object;
    /**
     * Unique identifier of the Image. This value is only set for system Images.
     */
    name: string;
    /**
     Flavor of operating system contained in the Image
     */
    os_flavor: "ubuntu" | "centos" | "debian" | "fedora" | "unknown";
    /**
     * Operating system version
     */
    os_version: string;
    /**
     * Protection configuration for the Resource
     */
    protection: {
        /**
         * If true, prevents the Resource from being deleted
         */
        deleted: boolean
    };
    /**
     * Indicates that rapid deploy of the Image is available
     */
    rapid_deploy?: boolean;
    /**
     * Whether the Image can be used or if it's still being created or unavailable
     */
    status: 'available' | 'creating' | 'unavailable';
    /**
     * Type of the Image
     */
    type: 'system' | 'app' | 'snapshot' | 'backup' | 'temporary'

}
