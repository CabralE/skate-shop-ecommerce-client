import React from "react";
import "../../CSS/featuredProductsData.css";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Container,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import useStyles from "./Styles";

function FeaturedProductsTest(props) {
  const classes = useStyles();
  const featureData = props.productInformation;
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <hr />
      <br />
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={2}>
          {featureData?.map((featureData) => (
            <Grid item key={featureData} xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  component="img"
                  height="280"
                  style={{ width: "fit-content" }}
                  className={classes.cardMedia}
                  image={featureData.image}
                  title="Image title"
                  alt="Image"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5">
                    {featureData.tag}
                  </Typography>
                  <Typography>{featureData.description}</Typography>
                  <Typography>${featureData.price}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    component={Link}
                    size="small"
                    color="primary"
                    to={"/product/" + featureData._id}
                  >
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default FeaturedProductsTest;
