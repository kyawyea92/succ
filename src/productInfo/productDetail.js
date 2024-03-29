import React from 'react';
import {  Menu, Segment, Container } from 'semantic-ui-react'
import ItemReviews from '../navigation/itemreviews';
import ProductDetailNav from '../navigation/productdetailsnav';
import ShopInfoNav from '../navigation/shopinfonav';

export default class ProductDetail extends React.Component {
    state = { activeItem: 'Product Details' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        const { activeItem } = this.state
        let navView;
        
        if(activeItem ==='Product Details'){
            navView = <ProductDetailNav/>
        }else if(activeItem ==='Shop Info'){
            navView = <ShopInfoNav/>
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
                            name='Shop Info'
                            active={activeItem === 'Shop Info'}
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