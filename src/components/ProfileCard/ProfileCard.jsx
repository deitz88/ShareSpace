import React from 'react'
import { Link } from "react-router-dom"
import { Card, Image, Icon, Segment} from 'semantic-ui-react'
import './ProfileCard.css';
import NonFriendCard from './NonFriendCard';
import RequestPendingCard from './RequestPendingCard'
import friendService from '../../utils/friendService';



export default function ProfileCard({userRequest, loggedInUser, request, change}){
const click = 'click'
function change(click){
    return click
}

function request(userRequest){
    friendService.friendRequest(userRequest)
}

if(userRequest._id === loggedInUser._id){
    return(
        <Card centered className="profileCard">
        <Card.Group className='headerCard'>
            <Card fluid header={userRequest.username}/>
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
        <Card.Content extra>
        <a>
            <Icon name='user' />
            22 Friends
        </a>
        </Card.Content>
    </Card>
    )
} else if (loggedInUser._id.includes(userRequest.friendRequests)){
    return(
        
        <Card centered className="profileCard">
        <NonFriendCard loggedInUser={loggedInUser} userRequest={userRequest} request={request}/>
        {/* <RequestPendingCard userRequest={userRequest}/> */}
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
} else if(!loggedInUser._id.includes(userRequest.friendRequests)) {
    return(
        
        <Card centered className="profileCard">
        <NonFriendCard loggedInUser={loggedInUser} userRequest={userRequest} request={request}/>
        {/* <RequestPendingCard user={user}/> */}
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
} else {
    return(
        <h1>in your friends!</h1>
    )
}
}