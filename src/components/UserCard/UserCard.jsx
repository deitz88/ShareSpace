import React from 'react'
import { Card, Image } from 'semantic-ui-react'

export default function UserCard({username, photo}){
    return(
        <>
        <br></br>
        <br></br>
    <Card.Group className='headerCard'>
    <Card.Content>
                <Image src={photo} avatar/>
                <Card.Header textAlign="center">
                    <h2 className='bioHeader'>{username}</h2></Card.Header>
                    <Card.Meta>
                        {/* <span className='date'>Joined in 2015</span> */}
                    </Card.Meta>
                    <Card.Description>
                        {/* <Segment>
                            Bio:
                        </Segment> */}
                    </Card.Description>
        </Card.Content>
    </Card.Group>
    <br>
    </br>
    </>
    )
}