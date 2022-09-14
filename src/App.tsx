import React, { useState } from "react";

import Item from "./components/Item";

function App() {
  const [items, setItems] = useState<string[]>([]);

  const addItemToList = () => {
    setItems([...items, `item: ${items.length+1}`]);
  };

  return (
    <div>
      <button onClick={addItemToList}>+</button>
      <ul>
        {items.map((item, index) => (
          <Item key={String(index)} title={item} />
        ))}
      </ul>
    </div>
  );
}

export default App;
