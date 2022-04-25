import {HetznerCloud} from "../HetznerCloud";
import {Datacenter} from "../entities/datacenter.entity";

export class DatacenterManager {
    private hetznerCloud: HetznerCloud


    constructor(hetznerCloud: HetznerCloud) {
        this.hetznerCloud = hetznerCloud;
    }

    getAllDatacenters(): Promise<Datacenter[]> {
        return new Promise((resolve, reject) => {
            this.hetznerCloud.makeAPICall("GET", "datacenters").then(result => {
                resolve(result.data.datacenters)
            }).catch(err => reject(err))
        })
    }
}