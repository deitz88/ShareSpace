import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Image, Grid } from 'semantic-ui-react'
import './FriendCard.css'
import friendService from '../../utils/friendService'

export default function FriendCard({username, photo, setUser}){
// console.log(username)

    async function handleRemove(e){
        e.preventDefault()
        const updatedUser = await friendService.removeFriend(username)
        setUser(updatedUser)
    }


    return(
        <>
        <br></br>
        <br></br>
    <Card.Group className='headerCard'>
    &nbsp; &nbsp; &nbsp;
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
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
            type="button"
            value='Unfriend'
            className="btn"
            id="denyButton"
            // floated='right'
            // textAlign='right'
            onClick={handleRemove}>
            </input>
            </div>
        </Grid.Row>
    </Card.Group>
    <br>
    </br>
    </>
    )
}