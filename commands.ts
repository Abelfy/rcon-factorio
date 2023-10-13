import Rcon from "rcon-ts";
import { log } from "./helper";
import RconConnector from "./rcon-connector";

export default class Commands {
    private static rcon = RconConnector.Instance.connection;

    public static async getTime() {
        log(`Temps en jeu : ${await this.rcon.send("/time")}`);
    }

    public static async getSeed() {
        log(`Seed en cours : ${await this.rcon.send("/seed")}`);
    }

    public static async getPlayers() {
        log(await this.rcon.send("/players"));
    }
    public static async getPlayersCount() {
        log(`Joueurs enregistrés : ${await this.rcon.send("/players c")}`);
    }

    public static async getPlayersOnline() {
        log(`Joueurs connectés : ${await this.rcon.send("/players o")}`);
    }

    public static async saveServer() {
        log(await this.rcon.send("/server-save"));
    }

    public static async getEvolution() {
        log(await this.rcon.send("/evolution"));
    }

    public static async promote(name: string) {
        log(await this.rcon.send(`/promote ${name}`));
    }

    public static async shout(message: string) {
        log(await this.rcon.send(`/shout ${message}`));
    }
}
