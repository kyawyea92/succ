import React from 'react';
import { Segment, Button, Icon } from 'semantic-ui-react';
import ShopItems from './shopitems';
import { useNavigate } from 'react-router-dom';
const ShopItemsList = () => {
   const navigate = useNavigate();
   return (
      <div>

         <Segment circular floated='right'>
            <Button color='teal' basic  onClick={()=>navigate('/create/newitem')}>
               <Icon name='add' />
               Create New Post
            </Button></Segment>
         <ShopItems />
      </div>
   );
}
export default ShopItemsList;