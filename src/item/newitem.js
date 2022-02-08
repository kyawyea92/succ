import React from "react";
import {
    Container,
    Image,
    Grid,
    Input,
    Divider,
    Button,
    Segment,
    Icon,
    Header
} from "semantic-ui-react"
import TrendyK from '../images/trendyk.png'
const NewItem = () => {
    return (

        <Container>
            <Segment color='teal'>
                <Header>
                    Create new post
                </Header>
                <Divider vertical></Divider>
                <Grid>
                    <Grid.Column width={8} >
                        <Image src={TrendyK} width='600' height='300' />
                        <Button fluid basic color='green'>
                            <Icon name='upload' />Choose
                        </Button>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Grid.Row columns={1}>
                            <p>Name</p>
                            <Input fluid size='mini' />
                        </Grid.Row>
                        <Grid.Row columns={1}>
                            <p>Quantity</p>
                            <Input fluid size='mini' />
                        </Grid.Row>
                        <Grid.Row columns={1}>
                            <p>Price</p>
                            <Input fluid size='mini' />
                        </Grid.Row>
                        <Grid.Row columns={1}>
                            <p>Color</p>
                            <Input fluid size='mini' />
                        </Grid.Row>
                        <Grid.Row columns={1}>
                            <p>Payment Type</p>
                            <Input fluid size='mini' />
                        </Grid.Row>
                        <Grid.Row columns={2}>
                            <p>About</p>
                            <Input fluid size='huge' />
                        </Grid.Row>
                        <Grid.Row columns={1}>
                            <p></p>
                            <Button fluid basic color='teal'>
                                <Icon name='save' />Save
                            </Button>
                        </Grid.Row>
                    </Grid.Column>
                </Grid>
            </Segment>
        </Container>
    )
}
export default NewItem