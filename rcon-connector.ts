import Rcon, { RconConfig } from "rcon-ts";

export default class RconConnector {
    private static _instance: RconConnector;

    public connection : Rcon;

    private constructor()
    {
        this.connection = new Rcon({
            host: "172.232.56.220",
            port: 8055,
            password: "123456DPR-rh",
            timeout: 5000 //,
        });
    }

    public static get Instance()
    {
        return this._instance || (this._instance = new this());
    }
}