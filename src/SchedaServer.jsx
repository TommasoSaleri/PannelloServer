function SchedaServer({server}) {
    const stato = statoServer(server)

    return (
        <div className={`scheda scheda-${stato}`}>
            <div className="intestazione">
                <h3>{server.nome} <BadgeStato stato={stato} /></h3>
                <p className="ruolo">{server.ruolo} · {server.sede} · {server.ip}</p>

                <p>CPU: {server.cpu === null ? "-" : server.cpu}%</p>
                <p>Latenza: {server.latenza === null ? "-" : server.latenza} ms</p>
                <p>Servizi: {server.servizi.join(", ")}</p>
                <p>Manutenzione: {server.manutenzione === null ? "nessuna in programma" : `{server.manutenzione.data}, {server.manutenzione.motivo}`}</p>
            </div>
        </div>
    )
}