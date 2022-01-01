import React from 'react';
import {  Menu, Segment, Container } from 'semantic-ui-react'

export default class ProductDetail extends React.Component {
    state = { activeItem: 'Product Details' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        const { activeItem } = this.state
        return (
            <div >
                <Container>
                    <Menu attached='top' tabular>
                        <Menu.Item
                            name='Product Details'
                            active={activeItem === 'Product Details'}
                            color='teal'
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Shop Info'
                            active={activeItem === 'Shop Info'}
                            color='teal'
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Delivery Info'
                            active={activeItem === 'Delivery Info'}
                            color='teal'
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Agent Info'
                            active={activeItem === 'Agent Info'}
                            color='teal'
                            onClick={this.handleItemClick}
                        />
                    </Menu>

                    <Segment attached='bottom'>
                    {this.state.activeItem}
                    </Segment>
                </Container>
            </div>
        );
    }
}