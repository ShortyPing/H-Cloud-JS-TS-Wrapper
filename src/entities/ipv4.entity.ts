export interface Ipv4 {
    /**
     * If the IP is blocked by our anti abuse dept
     */
    blocked: boolean
    /**
     * Reverse DNS PTR entry for the IPv4 addresses of this Server
     */
    dns_ptr: string
    /**
     * ID of the Resource
     */
    id: number
    /**
     * IP address (v4) of this Server
     */
    ip: string
}