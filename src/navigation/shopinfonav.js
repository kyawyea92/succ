import React from 'react'
import { Grid, Image,Rating } from 'semantic-ui-react'
import TrendyK from '../images/trendyk.png'

const ShopInfoNav = ()=>{
    return(
        <Grid columns='equal'>
            <Grid.Column width={5}>
                <Grid.Column >
                    <Image src={TrendyK} width='300' height='300' />
                    <Rating maxRating={5} clearable size='huge' />
                </Grid.Column>
                
            </Grid.Column>
            <Grid.Column>
                <h2>Trendy K </h2>
                <p> Skin Care and accessories </p>
                <p> Since : 2021 </p>
                <p>300021 Followers</p>
                <p><a href='#'>Facebook</a></p>
                <p>Dial No : 324235252424 </p>
                <p>Email : abc@email.com </p>
                <p>Head Office : Yangon</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            </Grid.Column>
        </Grid>
    );
}
export default ShopInfoNav;