import React, { useContext, useEffect, useState } from "react";

import { ItemContext } from "./Context";

export default function AllItems() {
  const [data, setData] = useState([]);
  const { items, setItems } = useContext(ItemContext);
  useEffect(() => {
    fetch("https://624fdeff57186bb9556a64db.mockapi.io/exercise/item")
      .then((datas) => datas.json())
      .then((res) => setData(res));
  }, []);

  function handleChange(e) {
    if (e.target.checked === true) {
      setItems([...items, e.target.value]);
    } else {
      setItems(items.filter((i) => e.target.value !== i));
    }
  }
  return (
    <div className="box">
      <h1 className="allItemsHeader">All Items</h1>
      <ul style={{ backgroundColor: "#add9e6" }}>
        {data.map((item) => (
          <li key={item.id}>
            <input type="checkbox" value={item.city} onChange={handleChange} />
            {item.city}
          </li>
        ))}
      </ul>
    </div>
  );
}
