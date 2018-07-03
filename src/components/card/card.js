import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import './card.css';

export const DefaultCard = ({header,sub,des}) => (
  <div className='Card'>
  <Card>
    <Card.Content>
      <Card.Header>{header}</Card.Header>
      <Card.Meta>
        <span className='date'>{sub}</span>
      </Card.Meta>
      <Card.Description>{des}</Card.Description>
    </Card.Content>
  </Card>
</div>
)
