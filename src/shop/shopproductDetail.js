import React from 'react';
import {  Menu, Segment, Container } from 'semantic-ui-react'
import ItemReviews from '../shopnavigation/itemreviews';
import ProductDetailNav from '../shopnavigation/productdetailsnav';

export default class ShopProductDetail extends React.Component {
    state = { activeItem: 'Product Details' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        const { activeItem } = this.state
        let navView;
        
        if(activeItem ==='Product Details'){
            navView = <ProductDetailNav/>
        }else{
            navView = <ItemReviews/>
        }

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
                            name='Item Reviews'
                            active={activeItem === 'Item Reviews'}
                            color='teal'
                            onClick={this.handleItemClick}
                        />
                    </Menu>

                    <Segment attached='bottom'>
                       {navView}
                    </Segment>
                </Container>
            </div>
        );
    }
}