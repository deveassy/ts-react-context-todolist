import React, { createContext, Dispatch, useReducer } from "react";

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type Action =
  | { type: "CREATE"; text: string }
  | { type: "TOGGLE"; id: number }
  | { type: "REMOVE"; id: number };

const initialState: Todo[] = [
  {
    id: 1,
    text: "react로 todolist 만드는데",
    done: true,
  },
  {
    id: 2,
    text: "typescript로 만들고요",
    done: false,
  },
  {
    id: 3,
    text: "context API도 사용해보세요",
    done: false,
  },
];

export const StateContext = createContext<Todo[] | undefined>(undefined);
export const DispatchContext = createContext<Dispatch<Action> | undefined>(
  undefined
);

function TodoReducer(state: Todo[], action: Action) {
  switch (action.type) {
    case "CREATE":
      const nextId = Math.max(...state.map((todo) => todo.id)) + 1;
      return state.concat({
        id: nextId,
        text: action.text,
        done: false,
      });
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error("You can't handled action");
  }
}

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [todos, dispatch] = useReducer(TodoReducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={todos}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
}
