import React from "react";
import { Container, Table, Checkbox ,Pagination, Button } from "semantic-ui-react";
import { useState } from "react";

const MyCart = () => {
    const [allCheck, setAllCheck] = useState(false)
    const handleClick = () => { setAllCheck(!allCheck) }
    return (
        <Container>
             <Button basic color='teal'>Create Payment</Button>
            <Table color='teal' key='teal'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell >
                            <Checkbox
                                checked={allCheck}
                                onClick={handleClick}
                            />
                        </Table.HeaderCell>
                        <Table.HeaderCell>Product Name</Table.HeaderCell>
                        <Table.HeaderCell>Shop Name</Table.HeaderCell>
                        <Table.HeaderCell>Count</Table.HeaderCell>
                        <Table.HeaderCell>Discount</Table.HeaderCell>
                        <Table.HeaderCell>Amount</Table.HeaderCell>
                        <Table.HeaderCell>Net Amount</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell><Checkbox /></Table.Cell>
                        <Table.Cell>Apples</Table.Cell>
                        <Table.Cell>Trendy K</Table.Cell>
                        <Table.Cell>2</Table.Cell>
                        <Table.Cell>100</Table.Cell>
                        <Table.Cell>400</Table.Cell>
                        <Table.Cell>300</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell><Checkbox /></Table.Cell>
                        <Table.Cell>Orange</Table.Cell>
                        <Table.Cell>310</Table.Cell>
                        <Table.Cell>0g</Table.Cell>
                        <Table.Cell>0g</Table.Cell>
                        <Table.Cell>0g</Table.Cell>
                        <Table.Cell>400</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
            <Pagination defaultActivePage={5} totalPages={10} />
        </Container>
    );
}

export default MyCart;