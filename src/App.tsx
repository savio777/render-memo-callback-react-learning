import React, { useCallback, useMemo, useState } from "react";

import Item from "./components/Item";

function App() {
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState("");
  const [wishList, setWishList] = useState<string[]>([]);

  const addItemToList = (value?: string) => {
    if (value) {
      setItems([...items, value]);
      return;
    }
    setItems([...items, `item: ${items.length + 1}`]);
  };

  const countItemsWithOne = useMemo(() => {
    console.log("render quando items mudar");
    return items.filter((item) => item.includes("1")).length;
  }, [items]);

  const addItemWishListWithChange = useCallback(
    (item: string) => {
      console.log("executa função quando mudar wishList");
      setWishList([...wishList, item]);
    },
    [wishList]
  );

  const addItemWishList = useCallback((item: string) => {
    console.log(
      "executa função somente se for chamada, sem depender de mudança de estado"
    );
    setWishList((state) => [...state, item]);
  }, []);

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
          <Item
            key={String(index)}
            title={item}
            onAddWishList={addItemWishList}
          />
        ))}
      </ul>

      <div>Contagem: {countItemsWithOne}</div>
    </div>
  );
}

export default App;
