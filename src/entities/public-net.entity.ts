import {Ipv4} from "./ipv4.entity";
import {Ipv6} from "./ipv6.entity";

export interface PublicNet {
    /**
     * Firewalls applied to the public network interface of this Server
     */
    firewalls: {
        /**
         * ID of the Resource
         */
        id: number,
        /**
         * Status of the Firewall on the Server
         */
        status: 'applied' | 'pending'
    }[],
    /**
     * IDs of Floating IPs assigned to this Server
     */
    floating_ips: number[]
    /**
     * IP address (v4) and its reverse DNS entry of this Server
     */
    ipv4: Ipv4,
    /**
     * IPv6 network assigned to this Server and its reverse DNS entry
     */
    ipv6: Ipv6
}