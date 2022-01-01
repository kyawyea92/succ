import React from 'react';
import './titleBar.css';
import { Divider, Grid, Input, Header,Dropdown, Icon } from 'semantic-ui-react'

const trigger = (
    <span>
      <Icon name='bars' /> Hello, Bob
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
    { key: 'profile', text: 'Your Profile' },
    { key: 'stars', text: 'Your Stars' },
    { key: 'explore', text: 'Explore' },
    { key: 'integrations', text: 'Integrations' },
    { key: 'help', text: 'Help' },
    { key: 'settings', text: 'Settings' },
    { key: 'sign-out', text: 'Sign Out' },
  ]
export default class TitleBar extends React.Component {

    render() {
        return (
            <div className='titleBarMainDiv'>
                <div className='firstDiv'>
                    <Grid columns='equal' >
                        <Grid.Column className='titleBarLogoDiv'>
                            <Header as='h2' color='teal'>
                                <Icon name='bell outline' />
                                <Header.Content>Succ</Header.Content>
                            </Header>
                        </Grid.Column>
                        <Grid.Column width={8} className='searchInputDiv'>
                        <Input fluid icon='search' placeholder='Search...' />
                        </Grid.Column>
                        <Grid.Column className='titlemenuBarDiv'>
                            <Dropdown trigger={trigger} options={options} />
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