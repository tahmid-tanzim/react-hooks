import React, { useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    form: {
      width: "25ch",
    },
  })
);

function HookCounterThree() {
  const classes = useStyles();
  const [name, setName] = useState({ fname: "", lname: "" });

  return (
    <div className={classes.root}>
      <form className={classes.form} noValidate autoComplete="off">
        <TextField
          id="fname"
          label="First Name"
          variant="outlined"
          value={name.fname}
          onChange={e => setName(prevState => ({...prevState, fname: e.target.value}))}
        />
        <TextField
          id="lname"
          label="Last Name"
          variant="outlined"
          value={name.lname}
          onChange={e => setName(prevState => ({...prevState, lname: e.target.value}))}
        />
      </form>
      <p>First Name: {name.fname}</p>
      <p>Last Name: {name.lname}</p>
    </div>
  );
}

export default HookCounterThree;
