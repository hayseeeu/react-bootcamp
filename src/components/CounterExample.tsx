import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="space-y-2">
      <p className="text-xl">Count: {count}</p>
      <div className="flex gap-2">
        <button
          onClick={() => setCount(count - 1)}
          className="rounded bg-red-200 px-3 py-1"
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="rounded bg-green-200 px-3 py-1"
        >
          Increment
        </button>
      </div>
    </div>
  );
}
