import React, { useState } from "react";
import "./list.css";

const products = [
  "Apple",
  "Banana",
  "Kiwi",
  "Orange",
  "Strawberry",
  "Mango",
  "Watermelon",
];

function List() {
  const [input, setInput] = useState("");
  const [iteam, setIteam] = useState(products);

  const addIteam = () => {
    if (input.trim() !== "") {
      setIteam([...iteam, input]);
      setInput("");
    }
  };

  const delIteam = (index) => {
    let newList = [...iteam];
    newList.splice(index, 1);
    setIteam(newList);
  };

  return (
    <div>
      <div className="list">
        <h1>List Of Fruits</h1>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a fruit"
        />
        <button onClick={addIteam}>Add Item</button>
      </div>
      <table className="list-table">
        <tbody>
          {iteam.map((item, index) => (
            <tr key={index}>
              <td>{index + 1 + "."}</td>
              <td>{item}</td>
              <td>
                <button onClick={() => delIteam(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
