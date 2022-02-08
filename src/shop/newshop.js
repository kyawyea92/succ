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
const NewShop = () => {
    return (

        <Container>
            <Segment color='teal'>
                <Header>
                    Create your own page
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
                            <p>Page Name</p>
                            <Input fluid size='mini' />
                        </Grid.Row>
                        <Grid.Row columns={1}>
                            <p>Since</p>
                            <Input fluid size='mini' />
                        </Grid.Row>
                        <Grid.Row columns={1}>
                            <p>Dial No</p>
                            <Input fluid size='mini' />
                        </Grid.Row>
                        <Grid.Row columns={1}>
                            <p>Email</p>
                            <Input fluid size='mini' />
                        </Grid.Row>
                        <Grid.Row columns={1}>
                            <p>Head Office</p>
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
export default NewShop