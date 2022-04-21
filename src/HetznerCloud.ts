import {InvalidTokenException} from "./exceptions/invalid-token.exception";
import {Server} from "./entities/server";
import axios from "axios";
import {ServerManager} from "./server/ServerManager";

export class HetznerCloud {

    private static HETZNER_API: string = "https://api.hetzner.cloud/v1"
    private token: string;

    // Managers
    private serverManager: ServerManager;

    constructor(token: string) {
        if(!(token.length == 64)) {
            throw new InvalidTokenException("Token length must be exact 64")
        }
        this.serverManager = new ServerManager(this)
        this.token = token;
    }

    public getServerManager() {
        return this.serverManager;
    }


    /**
     * private function to make a api call to hetzner api
     * mostly used internal in this wrapper
     * @param method
     * @param route
     * @param body
     * @private
     */
    public makeAPICall(method: "POST" | "GET" | "PUT" | "DELETE" | "PATCH" | "OPTIONS", route: string, body?: object) {
        return axios.request({
            method: method,
            url: HetznerCloud.HETZNER_API + "/" + route,
            data: body,
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })
    }

}
