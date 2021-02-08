import { Divider, Grid, Typography } from "@material-ui/core";
import { formatMs, makeStyles } from "@material-ui/core/styles";
import ImageGallery from "./ImageGallery";
import { YearsData } from "./Data";
import FinalPiece from "./FinalPiece";

// https://colorhunt.co/palette/253094

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#64dfdf",
    margin: "0 -5px",
    height: "100vh",
    width: "100wv",
    overflowX: "hidden",
  },
  divider: {
    backgroundColor: "black",
  },
  heroCont: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: "100vh",
    // backgroundImage: 'url("imgs/portugal5.jpeg")',
    backgroundImage:
      'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("imgs/portugal5.jpeg")',
    color: "white",
    backgroundPosition: "45% 20%",
  },
  main: {
    padding: "10px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  year: {
    height: "100vh",
    paddingTop: "40vh",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={classes.heroCont}>
          <Typography
            variant="h2"
            align="center"
            className={classes.headerText}
          >
            Happy Aniversary Charwotte
          </Typography>
          <Typography
            variant="h2"
            align="center"
            className={classes.headerText}
          >
            🎉🎉🎉
          </Typography>
          <Typography
            align="center"
            variant="p"
            className={classes.headerSubText}
          ></Typography>
        </Grid>
        <Grid item xs={12} style={{ paddingTop: "50px" }}>
          <div className={classes.main}>
            {YearsData.map((year, index) => (
              <div key={index}>
                <Divider className={classes.divider} variant="fullWidth" />
                <div className={classes.year}>
                  <Typography variant="h3" align="center">
                    {year.year}
                  </Typography>
                  <Typography variant="h5" align="center">
                    {year.data}
                  </Typography>
                </div>
                <Divider className={classes.divider} variant="fullWidth" />
                <ImageGallery images={year.images} />
              </div>
            ))}
            <Divider className={classes.divider} variant="fullWidth" />
            <FinalPiece />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
