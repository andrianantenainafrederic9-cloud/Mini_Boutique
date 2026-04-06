

import React, { useState, useMemo } from "react";

function expensiveCalculation(n) {
  console.log("Calcul en cours...");
  let total = 0;
  for (let i = 0; i < 100; i++) total += n;
  return total;
}

function AvecUseMemo() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");

  // ✅ Avec useMemo, le calcul ne se fait que si `count` change
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h1>Résultat : {calculation}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Tapez ici..."
      />
    </div>
  );
}


export default AvecUseMemo