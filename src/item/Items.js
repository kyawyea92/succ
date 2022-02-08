import React from "react";
import { Grid, Image, Label, Header, Segment, Button, Portal,Pagination } from 'semantic-ui-react'
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
            <Grid.Column width={4} onClick={() => navigate('/details/' + index)}>
                <Image src={data.image} width='300' height='300' />
                <div className="titleDiv">{data.title}</div>
                
                <Label as='a' basic image>
                    <img src={data.image} />
                    {data.shopName}
                </Label>
                <div><Label as='a' color='red' tag>{data.amount}</Label></div>
            </Grid.Column>
        );
    });
    return result;
};
class MainForm extends React.Component {
    state = {
        open: false, data: [
            { key: '1', image: bgImage, title: 'Illyoon Fresh Moisture Body Wash', amount: 'Pre Order Now!',shopName : 'Trendy K' },
            { key: '3', image: bgImage2, title: 'Jayjun okra Phyto Mucin Relief Serum & \n Moisture Gel Cream', amount: 'Pre Order Now!',shopName : 'abc' },
            { key: '2', image: bgImage3, title: 'Isntree Onion New repair Series', amount: 'Pre Order Now!',shopName : 'g&g' },
            { key: '4', image: bgImage4, title: 'Etude House Fixing Tint The Best Mini Lip kit', amount: 'Pre Order Now!' ,shopName : 'may may os'},
            { key: '5', image: bgImage5, title: 'Pyunkaung Yul Calming Moisture', amount: 'Pre Order Now!',shopName : 'bingo' },
            { key: '6', image: bgImage6, title: 'Corsx Full Fit Light Ampoule', amount: 'Pre Order Now!',shopName : 'alibaba' },
            { key: '7', image: bgImage7, title: 'Etude house Marble Eyeshadow Platte Sale', amount: 'Pre Order Now!',shopName : 'guru' },
            { key: '8', image: bgImage8, title: 'One Thing Green Tea Serum', amount: 'Pre Order Now!',shopName : 'mmproducts' },
            
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
                <Grid container>
                    <HandleChange dataList={this.state.data} />
                    <Pagination defaultActivePage={5} totalPages={10} />
                </Grid>
                
                <Portal onClose={this.handleClose} open={open}>
                    <Segment
                        style={{
                            left: '40%',
                            position: 'fixed',
                            top: '40%',
                            zIndex: 500,
                        }}
                    >
                        <Header>Welcome!!!</Header>
                        <p>Thanks for interesting our products.This page is under developing.</p>
                        <p>So Please order <a href='https://www.facebook.com/modernphu'>here.</a></p>

                        <Button
                            content='Close'
                            basic color='orange'
                            onClick={this.handleClose}
                        />
                        <Button
                            content='Shop Here'
                            basic color='purple'
                            onClick={this.handleCloseAndNewPageOpen}
                        />
                    </Segment>
                </Portal>
            </div>
        );
    }
}
export default MainForm;