import { Divider, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  main: {
    height: "100vh",
    paddingTop: "40vh",
  },
  divider: {
    backgroundColor: "black",
  },
}));

const FinalPiece = () => {
  const classes = useStyles();
  return (
    <>
      {/* <div className={classes.main}>
        <Typography variant="h4" align="center">
          These past 6 years have been the best of my life....by miles
        </Typography>
      </div>
      <Divider className={classes.divider} variant="fullWidth" />
      <div className={classes.main}>
        <Typography variant="h4" align="center">
          I am so lucky to be with someone as kind, loving, funny, crazy and
          cute as you are...
        </Typography>
      </div>
      <Divider className={classes.divider} variant="fullWidth" />
      <div className={classes.main}>
        <Typography variant="h4" align="center">
          There really is knowbody else in the world I would rather be with...
        </Typography>
      </div>
      <Divider className={classes.divider} variant="fullWidth" />
      <div className={classes.main}>
        <Typography variant="h4" align="center">
          And so there is something I've been meaning to ask you for a while
          now...
        </Typography>
      </div> */}
      <Divider className={classes.divider} variant="fullWidth" />
      <div className={classes.main}>
        <Typography variant="h4" align="center">
          Will you marry me?
        </Typography>
        <Typography variant="h4" align="center">
          💍
        </Typography>
      </div>
    </>
  );
};

export default FinalPiece;
