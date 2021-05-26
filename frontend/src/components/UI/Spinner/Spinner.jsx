import React from "react";

import classes from "./Spinner.module.css";

const spinner = () => (
  // <div className={classes.Loader}>Loading...</div>
  <div className={classes.LoadingChase}>
    <div className={classes.ChaseDot}></div>
    <div className={classes.ChaseDot}></div>
    <div className={classes.ChaseDot}></div>
    <div className={classes.ChaseDot}></div>
    <div className={classes.ChaseDot}></div>
    <div className={classes.ChaseDot}></div>
  </div>
);

export default spinner;
