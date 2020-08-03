import React, { useState } from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

function HookCounterTwo() {
  const classes = useStyles();
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  return (
    <div className={classes.root}>
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
