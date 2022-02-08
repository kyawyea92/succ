import React from 'react';
import './titleBar.css';
import { Divider, Grid, Input, Label, Dropdown, Icon, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const trigger = (
  <span>
    <Icon name='bars' /> Bob
  </span>
)

const options = [
  {
    key: 'user',
    text: (
      <span>
        Signed in as <strong>Bob Smith</strong>
      </span>
    ),
    disabled: true,
  },
  { key: 'sign', text: 'Bob Smith', value: 8 },
  { key: 'profile', text: 'Your Profile', value: 1 },
  { key: 'shops', text: 'Your Shop', value: 2 },
  { key: 'payment', text: 'Payment History', value: 3 },
  { key: 'integrations', text: 'Integrations', value: 4 },
  { key: 'help', text: 'Help', value: 5 },
  { key: 'settings', text: 'Settings', value: 6 },
  { key: 'sign-out', text: 'Sign Out', value: 7 },
]
const RightDropDown = () => {
  const navigate = useNavigate();
  const result = (
    <Dropdown
      onChange={(e) => {
        if (e.target.outerText === 'Your Shop') {
          navigate('/create-shop')
        } else if (e.target.outerText === 'Your Profile') {
          navigate('/my-profile')
        }else if (e.target.outerText === 'Payment History') {
          navigate('/my-profile')
        }
      }}
      trigger={trigger}
      options={options} />
  );
  return result;
}
const MyCart = () => {
  const navigate = useNavigate();
  const cart = (
    <Menu secondary size='mini' color='teal'>
      <Menu.Item as='a' active onClick={() =>navigate('/my-cart')}>
        <Icon size='large' name='add to cart' /> Cart
        <Label color='red' floating>
          22
        </Label>
      </Menu.Item>
    </Menu>
  );
  return cart;
}
export default class TitleBar extends React.Component {

  render() {
    return (
      <div className='titleBarMainDiv'>
        <div className='firstDiv'>
          <Grid columns='equal' >
            <Grid.Column width={3} className='titleBarLogoDiv' >
              <Icon size='large' name='bell outline' />
              <Link to='/'><lable>Succ</lable></Link>
            </Grid.Column>
            <Grid.Column width={10} className='searchInputDiv'>
              <Input fluid icon='search' placeholder='Search...' />
            </Grid.Column>
            <Grid.Column width={1} className='cartDiv'>
              <MyCart />
            </Grid.Column>
            <Grid.Column width={32} className='titlemenuBarDiv'>
              <RightDropDown />
            </Grid.Column>
          </Grid>
        </div>
        <div>
          <Divider fitted />
        </div>
      </div>
    );
  };
}