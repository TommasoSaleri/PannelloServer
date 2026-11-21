# PannelloServer

> **Pannello di gestione web moderno e responsive, sviluppato con React e Vite.**

**PannelloServer** è un'applicazione web progettata come base per la realizzazione di un pannello di gestione moderno, modulare e facilmente estendibile.

Il progetto utilizza **React** per la costruzione dell'interfaccia e **Vite** come ambiente di sviluppo e build, con una configurazione orientata a prestazioni, semplicità e sviluppo rapido.

---

## Caratteristiche

- ⚛️ **React 19** — interfaccia costruita con componenti React moderni
- ⚡ **Vite** — sviluppo locale rapido e build ottimizzate
- 🧹 **Oxlint** — controllo statico del codice
- 📱 **Responsive design** — struttura pensata per adattarsi a diverse dimensioni dello schermo
- 🧩 **Architettura modulare** — componenti organizzati per facilitare l'estensione del progetto
- 🚀 **Hot Module Replacement (HMR)** — aggiornamento immediato durante lo sviluppo
- 📦 **NPM** — gestione delle dipendenze e degli script del progetto

---

## Tecnologie

| Tecnologia | Utilizzo |
|---|---|
| **React** | Costruzione dell'interfaccia utente |
| **React DOM** | Rendering dell'applicazione |
| **Vite** | Development server e build |
| **Oxlint** | Linting e controllo del codice |
| **JavaScript / JSX** | Linguaggio e sintassi dell'applicazione |
| **NPM** | Gestione delle dipendenze |

---

## Requisiti

Prima di iniziare, assicurati di avere installato:

- [Node.js](https://nodejs.org/)
- **NPM**, incluso normalmente nell'installazione di Node.js
- **Git**

Puoi verificare le versioni installate con:

```bash
node --version
npm --version
git --version
```

---

## Installazione

Clona il repository:

```bash
git clone https://github.com/TommasoSaleri/PannelloServer.git
```

Accedi alla directory del progetto:

```bash
cd PannelloServer
```

Installa le dipendenze:

```bash
npm install
```

---

## Avvio in modalità sviluppo

Per avviare il server di sviluppo:

```bash
npm run dev
```

Vite avvierà l'applicazione in modalità sviluppo e renderà disponibile l'interfaccia tramite l'indirizzo mostrato nel terminale.

Durante lo sviluppo è disponibile l'**Hot Module Replacement (HMR)**, che permette di visualizzare rapidamente le modifiche apportate al codice senza dover riavviare manualmente l'applicazione.

---

## Build di produzione

Per creare una build ottimizzata per la produzione:

```bash
npm run build
```

I file generati saranno disponibili nella directory:

```text
dist/
```

La build può quindi essere distribuita su un server web o su una piattaforma compatibile con applicazioni frontend statiche.

---

## Anteprima della build

Dopo aver eseguito la build, è possibile visualizzarla localmente tramite:

```bash
npm run preview
```

Questo permette di verificare il comportamento dell'applicazione utilizzando la build generata per la produzione.

---

## Controllo del codice

Il progetto utilizza **Oxlint** per individuare potenziali problemi nel codice.

Per eseguire il linting:

```bash
npm run lint
```

È consigliato eseguire il controllo prima di effettuare un commit significativo o pubblicare una nuova versione.

---

## Struttura del progetto

```text
PannelloServer/
│
├── public/              # Risorse statiche
│
├── src/                 # Codice sorgente dell'applicazione
│   ├── ...
│   └── ...
│
├── .gitignore           # File esclusi dal controllo versione
├── .oxlintrc.json       # Configurazione di Oxlint
├── index.html           # Entry point HTML
├── package.json         # Dipendenze e script NPM
├── package-lock.json    # Lock delle dipendenze
└── vite.config.js       # Configurazione di Vite
```

La maggior parte dello sviluppo dell'applicazione avviene all'interno della directory `src/`.

---

## Script disponibili

Il progetto mette a disposizione i seguenti comandi:

| Comando | Descrizione |
|---|---|
| `npm run dev` | Avvia il server di sviluppo |
| `npm run build` | Crea la build di produzione |
| `npm run lint` | Esegue il controllo del codice con Oxlint |
| `npm run preview` | Avvia un'anteprima della build |

---

## Stato del progetto

> **In sviluppo**

Il progetto è attualmente in fase di sviluppo e la struttura dell'applicazione può evolvere nel tempo.

Funzionalità, componenti e configurazioni possono quindi essere aggiunti o modificati nelle versioni successive.

---

## Licenza

La licenza del progetto verrà definita in una fase successiva.

Fino ad allora, il codice presente nel repository deve essere considerato **non licenziato per il riutilizzo**, salvo diversa indicazione esplicita del proprietario del repository.

---

## Autore

**Tommaso Saleri**

GitHub: [@TommasoSaleri](https://github.com/TommasoSaleri)

---
<p align="center">
  <sub>Built with React + Vite</sub>
</p>
