import React from "react";
import { Card, Grid, Icon, Image, Button } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";
const extra = (
    <a>
        <Icon name='heart' color="red" />
        16 Follows
    </a>
)
const Shop = () => {
    const navigate = useNavigate();
    return (
        <Grid container>
            <Button basic color='green' onClick={()=>navigate('/new-shop')} >
                <Icon color='teal' name='plus' /> Create Shop
            </Button>
            <Card fluid color='red' href="/create-shop/shop-posts">
                <Card.Content>
                    <Image
                        floated='right'
                        size='tiny'
                        src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                    />
                    <Card.Header>Trendy K</Card.Header>
                    <Card.Meta>Skin Care & Cosmetics</Card.Meta>
                </Card.Content>
                <Card.Content extra>
                    {extra}
                </Card.Content>
            </Card>
        </Grid>
    );
}

export default Shop;