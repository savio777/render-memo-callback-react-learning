import React, { useMemo, useState } from "react";

import Item from "./components/Item";

function App() {
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState("");

  const addItemToList = (value?: string) => {
    if (value) {
      setItems([...items, value]);
      return;
    }
    setItems([...items, `item: ${items.length + 1}`]);
  };

  const countItemsWithOne = useMemo(() => {
    console.log("render useMemo");
    return items.filter((item) => item.includes("1")).length;
  }, [items]);

  return (
    <div>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        onBlur={() => addItemToList(newItem)}
      />

      <button onClick={() => addItemToList()}>+</button>

      <ul>
        {items.map((item, index) => (
          <Item key={String(index)} title={item} />
        ))}
      </ul>

      <div>Contagem: {countItemsWithOne}</div>
    </div>
  );
}

export default App;
