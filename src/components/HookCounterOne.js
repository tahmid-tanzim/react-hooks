import React, { useState } from "react";
import Button from "@material-ui/core/Button";

function HookCounterOne() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setCount(count + 1)}
      >
        Count {count}
      </Button>
    </div>
  );
}

export default HookCounterOne;
