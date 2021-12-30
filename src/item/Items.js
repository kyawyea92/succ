import React from "react";
import { Grid, Image, Label, Header, Segment, Button, Portal } from 'semantic-ui-react'
import './items.css'
class MainForm extends React.Component {
    state = { open: false }
    handleClose = () => this.setState({ open: false })
    handleOpen = () => this.setState({ open: true })
    handleCloseAndNewPageOpen = () => {
        this.handleClose();
        window.open('https://www.facebook.com/modernphu', '_blank');
    }
    formDataList = this.props.formData.map((data) => {

        return (
            <div key={data.key} className="gridChild">
                    <Grid.Column onClick={this.handleOpen} >
                        <Image src={data.image} width='300' height='300' />
                        <div className="titleDiv">{data.title}</div>
                        <div><Label as='a' color='red' tag>{data.amount}</Label></div>
                    </Grid.Column>  
            </div>
        );
    })
    render() {
        const { open } = this.state;
        return (
            <div >
                <Grid container>
                    {this.formDataList}
                </Grid>
                <Portal onClose={this.handleClose} open={open}>
                        <Segment
                            style={{
                                left: '40%',
                                position: 'fixed',
                                top: '40%',
                                zIndex:  500,
                            }}
                        >
                            <Header>Welcome!!!</Header>
                            <p>Thanks for interesting our products.This page is under developing.</p>
                            <p>So Please order <a href = 'https://www.facebook.com/modernphu'>here.</a></p>

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