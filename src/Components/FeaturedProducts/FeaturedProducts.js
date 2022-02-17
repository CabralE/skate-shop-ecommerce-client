import React from 'react'
import '../../CSS/featuredProductsData.css'
import { Typography, Card, CardActions, CardContent, CardMedia, Button, Container, Grid} from '@mui/material'

import useStyles from './Styles'

// https://source.unsplash.com/random/

function FeaturedProducts(props) {
    const classes = useStyles() 
    const featureData = props.FeaturedProductsData
    const cards = [1,2,3,4,5,6,7,8,9]
    return (
    <>
    <hr/>
    <br/>
    <Container className={classes.cardGrid} maxWidth="md"> 
    <Grid container spacing={4}>
        {featureData.map((featureData) => (
            <Grid item key={featureData} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                    <CardMedia
                        component="img"
                        className={classes.cardMedia}
                        image={featureData.image}
                        title="Image title"
                        alt="Image"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5">
                            {featureData.brand}
                        </Typography>
                        <Typography>
                            {featureData.description}
                        </Typography>
                        <Typography>
                            ${featureData.price}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">View</Button>
                        <Button size="small" color="primary">Add to Cart</Button>
                    </CardActions>
                </Card>
            </Grid>
        ))}
        
    </Grid>
    </Container>
    </>
    )
}

export default FeaturedProducts