import React from 'react'
import { Link } from "react-router-dom"
import { Card, Image, Icon, Segment} from 'semantic-ui-react'
import './ProfileCard.css';



export default function ProfileCard({user}){
    return(
        <Card centered className="profileCard">
        <Card.Group className='headerCard'>
            <Card fluid header={user.username}/>
            <Link to='/update'>
                <Icon  
                className='settingIcon' 
                name='setting'
                size="large"
                    />
            </Link>
        </Card.Group>
        <Image src={user.photoUrl} wrapped ui={false} />
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