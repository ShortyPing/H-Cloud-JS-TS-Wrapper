import {InvalidTokenException} from "./exceptions/invalid-token.exception";
import {Server} from "./entities/server";
import axios from "axios";

export class HetznerCloud {

    private static HETZNER_API: string = "https://api.hetzner.cloud/v1"
    private token: string;

    constructor(token: string) {
        console.log(token)
        if(!(token.length == 64)) {
            throw new InvalidTokenException("Token length must be exact 64")
        }

        this.token = token;
    }

    public getAllServers(): Promise<Server[]> {
        return new Promise<Server[]>((resolve) => {
            this.makeAPICall("GET", "servers").then(result => {

                resolve(result.data.servers)
            }).catch(err => {
                console.log(err)
            })
        })
    }


    private makeAPICall(method: "POST" | "GET" | "PUT" | "DELETE" | "PATCH" | "OPTIONS", route: string, body?: object) {
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
