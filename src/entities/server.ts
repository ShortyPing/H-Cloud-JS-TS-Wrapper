import {Datacenter} from "./datacenter.entity";

export interface Server {

    backupWindow: string;
    created: Date;
    datacenter: Datacenter;
    id: number;
    // TODO: ADD OBJECT
    image?: object;
    included_traffic: number;
    ingoing_traffic: number;
    // TODO: ADD OBJECT
    iso?: object;
    labels: object;
    load_balancers: number[];
    locked: boolean;
    name: string;
    outgoing_traffic?: number;
    //TODO: ADD OBJECT
    placement_group?: object;
    primary_disk_size: number;
    //TODO: ADD OBJECT
    private_net: object[];
    //TODO: ADD OBJECT
    protection: object;
    //TODO: ADD OBJECT
    publicNet: object;
    rescue_enabled: boolean;
    //TODO: ADD OBJECT
    server_type: object;
    status: "running" | "initializing" | "starting" | "stopping" | "off" | "deleting" | "migrating" | "rebuilding" | "unknown"
    volumes: number;
}

