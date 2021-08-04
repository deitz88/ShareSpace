import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Image, Grid, Button } from 'semantic-ui-react'
import './UserCard.css'

export default function UserCard({username, photo}){
    return(
        <>
        <br></br>
        <br></br>
    <Card.Group className='headerCard'>
    <Card.Content text='test'>{username}
                <Card.Header centered textAlign="center">
                </Card.Header>
                <Link to={username}>
                    <Image 
                        src={photo} 
                        avatar
                        />
                </Link>
                    <Card.Meta>
                        {/* <span className='date'>Joined in 2015</span> */}
                    </Card.Meta>
                    <Card.Description>
                        {/* <Segment>
                            Bio:
                        </Segment> */}
                    </Card.Description>
        </Card.Content>
        <Grid.Row>
            {/* <br /> */}
            {/* <h3 className='userCardText'>&nbsp;&nbsp;&nbsp;accept or deny buttons here
            </h3> */}
            <br /><br />
            <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;
            <Button
            type="submit"
            className="btn"
            id="acceptButton"
            
           >
                
                Accept
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button
            type="submit"
            className="btn"
            id="signupButton"
            floated='right'
            textAlign='right'>
                Deny
            </Button>
            </div>
        </Grid.Row>
    </Card.Group>
    <br>
    </br>
    </>
    )
}