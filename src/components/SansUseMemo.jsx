

import React, { useState } from "react";

function expensiveCalculation(n) {
  console.log("Calcul en cours...");
  let total = 0;
  for (let i = 0; i < 100; i++) total += n;
  return total;
}

function SansUseMemo() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");

  // ⚠️ Sans useMemo, le calcul sera relancé à chaque rendu
  const calculation = expensiveCalculation(count);

  return (
    <div>
      <h1>Résultat : {calculation}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="Tapez ici..." />
    </div>
  );
}

export default SansUseMemo



