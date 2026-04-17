import React, { createContext, useReducer } from "react";

export const TarefasContext = createContext();

const initialState = {
  tarefas: [],
  filtro: "TODAS",
};

function reducer(state, action) {
  switch (action.type) {
    case "ADICIONAR":
      return {
        ...state,
        tarefas: [
          ...state.tarefas,
          { id: Date.now(), nome: action.payload, concluida: false },
        ],
      };
    case "ALTERAR_STATUS":
      return {
        ...state,
        tarefas: state.tarefas.map((t) =>
          t.id === action.payload ? { ...t, concluida: !t.concluida } : t,
        ),
      };
    case "FILTRAR":
      return { ...state, filtro: action.payload };
    default:
      return state;
  }
}

export function TarefasProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const adicionarTarefa = (nome) =>
    dispatch({ type: "ADICIONAR", payload: nome });
  const alternarStatus = (id) =>
    dispatch({ type: "ALTERAR_STATUS", payload: id });
  const filtrarTarefas = (filtro) =>
    dispatch({ type: "FILTRAR", payload: filtro });

  const tarefasFiltradas = state.tarefas.filter((t) => {
    if (state.filtro === "CONCLUIDAS") return t.concluida;
    if (state.filtro === "PENDENTES") return !t.concluida;
    return true;
  });

  return (
    <TarefasContext.Provider
      value={{
        adicionarTarefa,
        alternarStatus,
        filtrarTarefas,
        tarefasFiltradas,
      }}
    >
      {children}
    </TarefasContext.Provider>
  );
}
