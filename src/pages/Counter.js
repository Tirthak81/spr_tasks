import React, { useState } from "react";
import "./counter.css";

function Counter() {
  var [num, setNum] = useState(0);

  function incNum() {
    if (num < 50) {
      return setNum(num + 1);
    }
  }

  function decNum() {
    if (num > 0) {
      return setNum(num - 1);
    }
  }

  function incNumBy5() {
    if (num <= 45) {
      return setNum(num + 5);
    }
  }

  function decNumBy5() {
    if (num >= 5) {
      return setNum(num - 5);
    }
  }

  return (
    <div className="App">
      <h1 className="num">Counter</h1>
      <div>
        <h1 className="num">{num}</h1>
      </div>
      <div className="button">
        <button className="minus" onClick={decNum}>
          -
        </button>
        <button className="plus" onClick={incNum}>
          +
        </button>
      </div>
      <div className="button">
        <button className="minus" onClick={decNumBy5}>
          -5
        </button>
        <button className="plus" onClick={incNumBy5}>
          +5
        </button>
      </div>
    </div>
  );
}

export default Counter;
