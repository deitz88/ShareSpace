import React from 'react'
import { Link } from "react-router-dom"
import { Card, Image, Icon, Segment} from 'semantic-ui-react'
import './ProfileCard.css';


export default function RequestPendingCard({userRequest}){
    return (
    
    <Card.Group className='headerCardOtherRequest'>
    <Card fluid textAlign='left' header= {userRequest.username}/>
        <div className='iconText'>
            <h5 className='firstRowText'>Request</h5>
            <h5 className='secondRowText'>Pending</h5>
        </div>
        <Icon  
        className='settingIcon' 
        name='wait'
        size="large"
            /> 
    </Card.Group>
    )
}