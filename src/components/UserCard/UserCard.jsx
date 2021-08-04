import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Image, Grid, Button, Input } from 'semantic-ui-react'
import './UserCard.css'
import friendService from '../../utils/friendService'

export default function UserCard({username, photo, setUser, user}){
// console.log(username)

    async function handleDeny(e){
        e.preventDefault()
        const updatedUser = await friendService.denyRequest(username)
        setUser(updatedUser)
    }

    async function handleAccept(e){
        e.preventDefault()
        const updatedUser = await friendService.approveRequest(username)
        setUser(updatedUser)
    }

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
            &nbsp; &nbsp; &nbsp;
            <input
            type="button"
            value='Accept'
            className="btn"
            id="acceptButton"
            onClick={handleAccept}
           >
            </input>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;
            
            <input
            type="button"
            value='Deny'
            className="btn"
            id="denyButton"
            // floated='right'
            // textAlign='right'
            onClick={handleDeny}>
            </input>
            </div>
        </Grid.Row>
    </Card.Group>
    <br>
    </br>
    </>
    )
}