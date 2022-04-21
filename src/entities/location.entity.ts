export interface Location {
    /**
     * City the Location is closest to
     */
    city: string,
    /**
     * ISO 3166-1 alpha-2 code of the country the Location resides in
     */
    country: string,
    /**
     * Description of the Location
     */
    description: string,
    /**
     * ID of the Location
     */
    id: number,
    /**
     * Latitude of the city closest to the Location
     */
    latitude: number,
    /**
     * Longitude of the city closest to the Location
     */
    longitude: number,
    /**
     * Unique identifier of the Location
     */
    name: string,
    /**
     * Name of network zone this Location resides in
     */
    network_zone: string
}