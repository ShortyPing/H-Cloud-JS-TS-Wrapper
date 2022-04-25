export interface Ipv6 {
    /**
     * If the IP is blocked by our anti abuse dept
     */
    blocked: boolean,
    /**
     * Reverse DNS PTR entries for the IPv6 addresses of this Server, null by default
     */
    dns_ptr: {
        /**
         * DNS pointer for the specific IP address
         */
        dns_ptr: string,
        /**
         * Single IPv6 address of this Server for which the reverse DNS entry has been set up
         */
        ip: string
    }[],
    /**
     * ID of the Resource
     */
    id: number,
    /**
     * IP address (v6) of this Server
     */
    ip: string
}