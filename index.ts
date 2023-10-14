import Rcon from "rcon-ts";
import Commands from "./commands";
import RconConnector from "./rcon-connector";
import { log } from "./helper";

async function main() {
    let rcon = RconConnector.Instance;
    rcon.connection.connect();
    await Commands.getSeed();
    await Commands.getPlayersCount();
    rcon.connection.disconnect();

    setInterval(async () => {
        await rcon.connection.session(async (c) => {
            await Commands.getPlayersOnline();
        });
    }, 30 * 1000);

    setInterval(async () => {
        await rcon.connection.session(async (c) => {
            log(`//-------- SAUVEGARDE DU SERVEUR --------\\\\`);
            await Commands.shout("SAVE DU SERVEUR !");
            await Commands.getTime();
            await Commands.getPlayers();
            await Commands.getEvolution();
            await Commands.saveServer();
            log(`//-------- FIN DE SAUVEGARDE DU SERVEUR --------\\\\`);
        });
    }, 30 * 60 * 1000);
}

main();
