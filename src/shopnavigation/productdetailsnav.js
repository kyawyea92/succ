import React from 'react'
import { Grid, Image, Button, Icon, Label, GridColumn } from 'semantic-ui-react'
import Beauty from '../images/beauty.jpg'
import './navigation.css'
import { useNavigate } from 'react-router-dom'
const ProductDetailNav = () => {
    const navigate = useNavigate();
    return (

        <Grid columns='equal'>
            <Grid.Column width={5}>
                <Grid.Column >
                    <Image src={Beauty} width='300' height='300' />
                </Grid.Column>
                <Grid.Row className='imageCollections'>
                    <Grid columns={3}>
                        <Grid.Column>
                            <Image src={Beauty} width='100' height='100' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={Beauty} width='100' height='100' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={Beauty} width='100' height='100' />
                        </Grid.Column>
                    </Grid>
                </Grid.Row>
            </Grid.Column>
            <Grid.Column >
                <h2>Illyoon Fresh Moisture Body Wash </h2>
                <p> Quantity : 10 </p>
                <p>Price : 30000 MMK / piece</p>
                <p>Color : black</p>
                <p>Shipping fees : Yes </p>
                <p>Shipping Duration : 2days </p>
                <p>Payment Type: Cash on delivery</p>
                
                <Grid divided='vertically'>
                    <Grid.Row columns={3}>
                        <Grid.Column>
                            <p>1 - 99 Sets</p>
                            <p>$5.87</p>
                        </Grid.Column>
                        <Grid.Column>
                            <p>1 - 99 Sets</p>
                            <p>$5.87</p>
                        </Grid.Column>
                        <Grid.Column>
                            <p>1 - 99 Sets</p>
                            <p>$5.87</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <div>
                    <Button size='mini' color='teal' compact>-</Button>
                    <Label size='medium' color='orange'>1</Label>
                    <Button size='mini' color='teal' compact>+</Button>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                
            </Grid.Column>
            <Grid.Column width={2}>
            <Button basic color='teal' onClick={()=>navigate('/create/newitem')}>Edit</Button>
            </Grid.Column>
        </Grid>


    );
}
export default ProductDetailNav;