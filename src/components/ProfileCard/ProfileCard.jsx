import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { Card, Image, Icon, Grid, Loader} from 'semantic-ui-react'
import './ProfileCard.css';
import NonFriendCard from './NonFriendCard';
import FriendProfileCard from './FriendProfileCard';
import RequestPendingCard from './RequestPendingCard'
import friendService from '../../utils/friendService';



export default function ProfileCard({userRequest, loggedInUser, setUser, setProfileUser}){
    
    async function request(userRequest){
       const updatedUser = await friendService.friendRequest(userRequest)
         setProfileUser(updatedUser)  
    }
   
if(userRequest._id === loggedInUser._id){
    return(
        <Card centered className="profileCard">
        <Card.Group className='headerCard'>
            <Card fluid header={userRequest.username} id='usernameHeader'/> 
            <Link to='/update'>
                <Icon  
                className='settingIcon' 
                name='setting'
                size="large"
                    />
            </Link>
        </Card.Group>
        <Image src={userRequest.photoUrl} wrapped ui={false} />
        <Card.Content>
            <Card.Header textAlign="center">
                <h2 className='bioHeader'>Bio:</h2></Card.Header>
                <Card.Meta>
                    {/* <span className='date'>Joined in 2015</span> */}
                </Card.Meta>
                <Card.Description>
                    {/* <Segment>
                        Bio:
                    </Segment> */}
                </Card.Description>
        </Card.Content>
        <Card.Content floated='right' extra>
        <a>
            <Icon right name='user' />
            {userRequest.friends.length ? userRequest.friends.length : 0}
        </a>
        </Card.Content>
    </Card>
    )
} else if (userRequest.friendRequests.includes(loggedInUser._id)){
    return(
        
        <Card centered className="profileCard">
        <RequestPendingCard userRequest={userRequest}/>
        <Image src={userRequest.photoUrl} wrapped ui={false} />
        <Card.Content>
            <Card.Header textAlign="center">
                <h2 className='bioHeader'>Bio:</h2></Card.Header>
                <Card.Meta>
                    {/* <span className='date'>Joined in 2015</span> */}
                </Card.Meta>
                <Card.Description>
                    {/* <Segment>
                        Bio:
                    </Segment> */}
                </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <a>
            <Icon name='user' />
            {userRequest.friends.length ? userRequest.friends.length : 0}
        </a>
        </Card.Content>
    </Card>
    )
} else if (userRequest.friends.includes(loggedInUser._id)){
    return(
        
        <Card centered className="profileCard">
        <FriendProfileCard 
            loggedInUser={loggedInUser} 
            userRequest={userRequest} 
            request={request}
        />
        <Image src={userRequest.photoUrl} wrapped ui={false} />
        <Card.Content>
            <Card.Header textAlign="center">
                <h2 className='bioHeader'>Bio:</h2></Card.Header>
                <Card.Meta>
                    {/* <span className='date'>Joined in 2015</span> */}
                </Card.Meta>
                <Card.Description>
                    {/* <Segment>
                        Bio:
                    </Segment> */}
                </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <a>
            <Icon name='user' />
            {userRequest.friends.length ? userRequest.friends.length : 0}
        </a>
        </Card.Content>
    </Card>
    )
} else if(!userRequest.friendRequests.includes(loggedInUser._id)) {
    return(
        
        <Card centered className="profileCard">
        <NonFriendCard 
            loggedInUser={loggedInUser} 
            userRequest={userRequest} 
            request={request}
        />
        <Image src={userRequest.photoUrl} wrapped ui={false} />
        <Card.Content>
            <Card.Header textAlign="center">
                <h2 className='bioHeader'>Bio:</h2></Card.Header>
                <Card.Meta>
                    {/* <span className='date'>Joined in 2015</span> */}
                </Card.Meta>
                <Card.Description>
                    {/* <Segment>
                        Bio:
                    </Segment> */}
                </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <a>
            <Icon name='user' />
            22 Friends
        </a>
        </Card.Content>
    </Card>
    )
                }
}