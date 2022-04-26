import {HetznerCloud} from "../HetznerCloud";
import {Server} from "../entities/server";
import {Firewall} from "../entities/firewall.entity";

export class ServerManager {
    private hetznerCloud: HetznerCloud;

    constructor(hetznerCloud: HetznerCloud) {
        this.hetznerCloud = hetznerCloud;
    }

    /**
     * Get all of your servers
     */
    public getAllServers(): Promise<Server[]> {
        return new Promise<Server[]>((resolve) => {
            this.hetznerCloud.makeAPICall("GET", "servers").then(result => {
                resolve(result.data.servers)
            }).catch(err => {
                console.log(err)
            })
        })
    }

    /**
     * get a server by id
     * @param id
     */
    public getServer(id: string): Promise<Server> {
        return new Promise((resolve, reject) => {
            this.hetznerCloud.makeAPICall("GET", "servers/" + id).then(result => {
                resolve(result.data["server"])
            }).catch(err => reject(err))
        })
    }

    /**
     * creates a server
     * @param serverConfig
     */
    public createServer(serverConfig: ServerCreateInterface): Promise<ServerCreateResponseInterface> {
       return new Promise((resolve, reject) => {
           this.hetznerCloud.makeAPICall("POST", "servers", serverConfig).then((response) => {

                resolve({
                    root_password: response.data.root_password,
                    server: response.data.server
                })
           }).catch(err => reject(err))
       })
    }

    /**
     * deletes a server
     * @param id
     */
    public deleteServer(id: string) {
        return this.hetznerCloud.makeAPICall("DELETE", "servers/" + id);
    }

    /**
     * Cuts power to the Server. This forcefully stops it without giving the Server operating system time to gracefully stop. May lead to data loss, equivalent to pulling the power cord. Power off should only be used when shutdown does not work.
     * @param id
     */
    public poweroff(id: string) {
        return new Promise((resolve, reject) => {
            this.hetznerCloud.makeAPICall("POST", "servers/" + id + "/actions/poweroff").then(() => {
                resolve(1)
            }).catch(err => reject(err))
        })
    }

    /**
     * starts server
     * @param id
     */
    public poweron(id: string) {
        return new Promise((resolve, reject) => {
            this.hetznerCloud.makeAPICall("POST", "servers/" + id + "/actions/poweron").then(() => {
                resolve(1)
            }).catch(err => reject(err))
        })
    }
}

interface ServerCreateInterface {
    /**
     * Auto-mount Volumes after attach
     */
    automount?: boolean
    /**
     * ID or name of Datacenter to create Server in (must not be used together with location)
     */
    datacenter?: string
    /**
     * Firewalls which should be applied on the Server's public network interface at creation time
     */
    firewalls?: Firewall[]
    /**
     * ID or name of the Image the Server is created from
     */
    image: string
    /**
     * User-defined labels (key-value pairs)
     */
    labels?: object
    /**
     * ID or name of Location to create Server in (must not be used together with datacenter)
     */
    location?: string
    /**
     * Name of the Server to create (must be unique per Project and a valid hostname as per RFC 1123)
     */
    name: string
    /**
     * Network IDs which should be attached to the Server private network interface at the creation time
     */
    networks?: number[]
    /**
     * ID of the Placement Group the server should be in
     */
    placement_group?: number[]
    /**
     * ID or name of the Server type this Server should be created with
     */
    server_type: string
    /**
     * SSH key IDs (integer) or names (string) which should be injected into the Server at creation time
     */
    ssh_keys?: string[]
    /**
     * Start Server right after creation. Defaults to true.
     */
    start_after_create?: boolean
    /**
     * Cloud-Init user data to use during Server creation. This field is limited to 32KiB.
     */
    user_data?: string
    /**
     * Volume IDs which should be attached to the Server at the creation time. Volumes must be in the same Location.
     */
    volumes?: number[]



}

interface ServerCreateResponseInterface {
    root_password: string,
    server: Server
}