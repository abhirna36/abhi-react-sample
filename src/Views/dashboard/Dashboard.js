import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./Dashboard.scss";
import Text from "../common/Text";



export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Text
        textStyle={"search-text-style"}
        text={"Task Board"}
        textContainerStyle={"search-text-container"}
      />

    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));
