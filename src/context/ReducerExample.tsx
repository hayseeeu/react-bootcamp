import { useReducer } from "react";

type State = { count: number };
type Action = { type: "increment" } | { type: "decrement" };

function counterReducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export function ReducerCounter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className="space-y-2">
      <p className="text-xl">Count: {state.count}</p>{" "}
      <button
        onClick={() => dispatch({ type: "decrement" })}
        className="rounded bg-red-200 px-3 py-1"
      >
        -
      </button>
      <button
        onClick={() => dispatch({ type: "increment" })}
        className="rounded bg-green-200 px-3 py-1"
      >
        +
      </button>
    </div>
  );
}
