import React, { useState } from "react";
import Button from "@material-ui/core/Button";

function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <p> Count {count}</p>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setCount(initialCount)}
      >
        Reset
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Increment
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setCount((prevCount) => prevCount - 1)}
      >
        Decrement
      </Button>
    </div>
  );
}

export default HookCounterTwo;
