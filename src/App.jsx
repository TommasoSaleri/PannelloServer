import './App.css'
import { sistema, servers, avvisi } from './dati.js'

export default function App() {
  console.log(servers.length, avvisi.length)

  return (
    <div className="pannello">
      <h1>{sistema.nome}</h1>
    </div>
  )
}