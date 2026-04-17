import React, { useState, useContext } from "react";
import { TarefasContext } from "./TarefasContext";
import ListaDeTarefas from "./ListaDeTarefas";
import "./App.css";

function AppContent() {
  const [texto, setTexto] = useState("");
  const { adicionarTarefa, filtrarTarefas } = useContext(TarefasContext);

  return (
    <div className="App">
      <h1>Gerenciador de Tarefas</h1>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite uma tarefa"
      />
      <button
        onClick={() => {
          adicionarTarefa(texto);
          setTexto("");
        }}
      >
        Adicionar
      </button>

      <div>
        <button onClick={() => filtrarTarefas("TODAS")}>Todas</button>
        <button onClick={() => filtrarTarefas("CONCLUIDAS")}>Concluídas</button>
        <button onClick={() => filtrarTarefas("PENDENTES")}>Pendentes</button>
      </div>

      <ListaDeTarefas />
    </div>
  );
}

function App() {
  return <AppContent />;
}

export default App;
