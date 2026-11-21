SOGLIE = {attenzione: 70, critico: 90}

function statoServer(server) {
    if (!server.online) {
        return "offline"
    } else if (server.cpu >= SOGLIE.critico) {
        return "critico"
    } else if (server.cpu >= SOGLIE.attenzione) {
        return "attenzione"
    } else {
        return "ok"
    }
}

function contaPerStato(servers, stato) {
    return servers.filter(server => statoServer(server) === stato).length
}

export { SOGLIE, statoServer, contaPerStato }