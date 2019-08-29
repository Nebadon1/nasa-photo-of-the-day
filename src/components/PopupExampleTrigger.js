import React from 'react'
import { Popup, Card, Rating } from 'semantic-ui-react'

const PopupExampleTrigger = () => (
  <Popup
    trigger={
      <Card>
        
        <Card.Content>
          <Card.Header>Rate the image </Card.Header>
        </Card.Content>
      </Card>
    }
  >
    <Popup.Header>Give me 5 stars </Popup.Header>
    <Popup.Content>
      <Rating icon='star' defaultRating={3} maxRating={4} />
    </Popup.Content>
  </Popup>
)

export default PopupExampleTrigger
