import React, { useContext } from "react";
import { TarefasContext } from "./TarefasContext";

import Tarefa from "./Tarefa";

function ListaDeTarefas() {
  const { tarefasFiltradas } = useContext(TarefasContext);

  return (
    <ul>
      {tarefasFiltradas.map((tarefa) => (
        <Tarefa key={tarefa.id} tarefa={tarefa} />
      ))}
    </ul>
  );
}

export default ListaDeTarefas;
