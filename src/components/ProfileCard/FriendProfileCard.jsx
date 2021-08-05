import React from 'react'
import { Link } from "react-router-dom"
import { Card, Icon} from 'semantic-ui-react'
import './ProfileCard.css';



export default function FriendProfileCard({userRequest, request}){
    const clickHandler = () => request(userRequest)

    return (
    <Card.Group className='headerCardOther'>
    <Card fluid header={userRequest.username}/>
        <div className='iconTextNon'>
            <h5 className='firstRowText'>You're</h5>
            <h5 className='secondRowText'>Friends!</h5>
        </div>
   
        <Icon  
        className='settingIcon' 
        name='smile outline'
        size="large"
        onClick={clickHandler}
            /> 
</Card.Group>
    )
}