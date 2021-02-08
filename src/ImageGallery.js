import { makeStyles } from "@material-ui/core";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const useStyles = makeStyles((theme) => ({
  img: {
    width: "100%",
    borderRadius: "15px",
  },
  imgCont: {
    margin: "20px 0px",
  },
}));
const ImageGallery = (props) => {
  const classes = useStyles();

  const showVid = (vid) => {
    console.log(vid);
    if (vid !== undefined) {
      return (
        <video className={classes.img} controls preload="on" playsinline>
          <source src={vid} />
        </video>
      );
    }
  };
  return (
    <div className={classes.root}>
      {props.images.map((image, index) => (
        <div key={index} className={classes.imgCont}>
          <h4>{image.date}</h4>
          {image.desc}
          <LazyLoadImage className={classes.img} src={image.img} />
          {showVid(image.vid)}
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
