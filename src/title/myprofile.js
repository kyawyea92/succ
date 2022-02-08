import React from "react";
import { Button, Container, Grid, GridColumn, Image, Input, Table } from "semantic-ui-react";
import TrendyK from '../images/trendyk.png'
import './profile.css'
const MyProfile = () => {
    return (
        <Container>
            <Grid centered  >
                <Grid.Column width={4}>
                    <Image circular src={TrendyK} width='200' height='200' />
                </Grid.Column>
                <Grid.Column width={6}>
                    <Table collapsing basic='very' >
                        <Table.Body>
                            <Table.Row >
                                <Table.Cell>ID</Table.Cell>
                                <Table.Cell><label>234872837494</label></Table.Cell>
                            </Table.Row>
                            <Table.Row >
                                <Table.Cell>Name</Table.Cell>
                                <Table.Cell><Input /></Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Email</Table.Cell>
                                <Table.Cell><Input /></Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Contact Number</Table.Cell>
                                <Table.Cell><Input /></Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Address</Table.Cell>
                                <Table.Cell><Input /></Table.Cell>
                            </Table.Row>
                        </Table.Body>
                        <Table.Footer >
                            <Table.Row>
                                <Table.HeaderCell />
                                <Table.HeaderCell colSpan='2'>
                                    <Button size='medium' basic color="green">Save</Button>
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Footer>
                    </Table>
                </Grid.Column>

            </Grid>
        </Container>
    );
}

export default MyProfile;