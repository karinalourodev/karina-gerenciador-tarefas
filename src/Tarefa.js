import React, { useContext } from "react";
import { TarefasContext } from "./TarefasContext";

function Tarefa({ tarefa }) {
  const { alternarStatus } = useContext(TarefasContext);

  return (
    <li>
      <input
        type="checkbox"
        checked={tarefa.concluida}
        onChange={() => alternarStatus(tarefa.id)}
      />
      {tarefa.nome}
    </li>
  );
}

export default Tarefa;
