import {Datacenter} from "./datacenter.entity";
import {Image} from "./image.entity";
import {Iso} from "./iso.entity";
import {PlacementGroup} from "./placement-group.entity";
import {PrivateNet} from "./private-net.entity";
import {Protection} from "./protection.entity";
import {PublicNet} from "./public-net.entity";
import {ServerType} from "./server-type.entity";

export interface Server {

    /**
     * Time window (UTC) in which the backup will run, or null if the backups are not enabled
     */
    backupWindow: string;
    /**
     * Point in time when the Resource was created (in ISO-8601 format)
     */
    created: Date;
    /**
     * Datacenter this Resource is located at
     */
    datacenter: Datacenter;
    /**
     * ID of the Resource
     */
    id: number;
    image: Image;
    /**
     * Free Traffic for the current billing period in bytes
     */
    included_traffic: number;
    /**
     * Inbound Traffic for the current billing period in bytes
     */
    ingoing_traffic: number;
    /**
     * ISO Image that is attached to this Server. Null if no ISO is attached.
     */
    iso: Iso;
    /**
     * User-defined labels (key-value pairs)
     */
    labels: object;
    load_balancers: number[];
    /**
     * True if Server has been locked and is not available to user
     */
    locked: boolean;
    /**
     * Name of the Resource. Must be unique per Project.
     */
    name: string;
    /**
     * Outbound Traffic for the current billing period in bytes
     */
    outgoing_traffic?: number;

    placement_group?: PlacementGroup;
    /**
     * Size of the primary Disk
     */
    primary_disk_size: number;
    /**
     * Private networks information
     */
    private_net: PrivateNet[];
    /**
     * Protection configuration for the Server
     */
    protection: Protection;
    /**
     * Public network information. The Server's IPv4 address can be found in public_net->ipv4->ip
     */
    public_net: PublicNet;
    /**
     * True if rescue mode is enabled. Server will then boot into rescue system on next reboot
     */
    rescue_enabled: boolean;
    /**
     * Type of Server - determines how much ram, disk and cpu a Server has
     */
    server_type: ServerType;
    /**
     * Status of the Server
     */
    status: "running" | "initializing" | "starting" | "stopping" | "off" | "deleting" | "migrating" | "rebuilding" | "unknown"
    /**
     * IDs of Volumes assigned to this Server
     */
    volumes: number;
}

