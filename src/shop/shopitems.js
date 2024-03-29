import React from "react";
import { Grid, Image, Label, Header, Segment, Button, Portal, Container, Icon } from 'semantic-ui-react'
import './items.css';
import bgImage from '../images/beauty.jpg';
import bgImage2 from '../images/beauty2.jpg';
import bgImage3 from '../images/beauty3.jpg';
import bgImage4 from '../images/beauty4.jpg';
import bgImage5 from '../images/beauty5.jpg';
import bgImage6 from '../images/beauty6.jpg';
import bgImage7 from '../images/beauty7.jpg';
import bgImage8 from '../images/beauty8.jpg';
import { useNavigate } from 'react-router-dom';


const HandleChange = ({ dataList }) => {
    const navigate = useNavigate()
    const result = dataList.map((data, index) => {
        return (
            <Grid.Column width={4} onClick={() => navigate('/shop/details/' + index)}>
                <Image src={data.image} width='300' height='300' />
                <div className="titleDiv">{data.title}</div>
                <div><Label as='a' color='red' tag>{data.amount}</Label></div>
            </Grid.Column>
        );
    });
    return result;
};
class ShopItems extends React.Component {
    state = {
        open: false, data: [
            { key: '1', image: bgImage, title: 'Illyoon Fresh Moisture Body Wash', amount: 'Pre Order Now!' },
            { key: '3', image: bgImage2, title: 'Jayjun okra Phyto Mucin Relief Serum & \n Moisture Gel Cream', amount: 'Pre Order Now!' },
            { key: '2', image: bgImage3, title: 'Isntree Onion New repair Series', amount: 'Pre Order Now!' },
            { key: '4', image: bgImage4, title: 'Etude House Fixing Tint The Best Mini Lip kit', amount: 'Pre Order Now!' },
            { key: '5', image: bgImage5, title: 'Pyunkaung Yul Calming Moisture', amount: 'Pre Order Now!' },
            { key: '6', image: bgImage6, title: 'Corsx Full Fit Light Ampoule', amount: 'Pre Order Now!' },
            { key: '7', image: bgImage7, title: 'Etude house Marble Eyeshadow Platte Sale', amount: 'Pre Order Now!' },
            { key: '8', image: bgImage8, title: 'One Thing Green Tea Serum', amount: 'Pre Order Now!' },
        ]
    }
    handleClose = () => this.setState({ open: false })
    handleOpen = () => this.setState({ open: true })
    handleCloseAndNewPageOpen = () => {
        this.handleClose();
        window.open('https://www.facebook.com/modernphu', '_blank');
    }

    detailPage = (event) => {
        console.log('Clicked');
        event.preventDefault();
    };
    render() {

        const { open } = this.state;
        return (
            <div >
                <Container>
                    <Header dividing color="teal">Trendy K</Header>
                    <Grid>
                        <HandleChange dataList={this.state.data} />
                    </Grid>
                </Container>

            </div>
        );
    }
}
export default ShopItems;