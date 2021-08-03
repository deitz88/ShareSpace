import React from 'react'
import { Link } from "react-router-dom"
import { Card, Image, Icon, Segment} from 'semantic-ui-react'
import './ProfileCard.css';



export default function NonFriendCard({userRequest, request}){
    const clickHandler = () => request(userRequest)

    return (
    <Card.Group className='headerCardOther'>
    <Card fluid textAlign='left' header={userRequest.username}/>
        <div className='iconTextNon'>
            <h5 className='firstRowText'>Add</h5>
            <h5 className='secondRowText'>Friend</h5>
        </div>
    <Link to={userRequest.username}>
        <Icon  
        className='settingIcon' 
        name='add user'
        size="large"
        onClick={clickHandler}
            /> 
            </Link>
</Card.Group>
    )
}