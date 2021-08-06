import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {Card, Grid, Header, Image, Icon, Group } from 'semantic-ui-react'
import './WritingPostContent.css'

// const src='https://react.semantic-ui.com/images/wireframe/white-image.png'

export default function WritingPostContent({user, profileUser, writings}){
    // console.log(writings)
    if(!writings.length){
        return(
            <>
            <br></br>
            <br></br>
        <Card.Group className='headerCard'>
                <Card fluid header={
                    user._id === profileUser._id 
                    ?'Your Writings'
                    :profileUser.username +"'s Writings"}/>
        </Card.Group>
        <br>
        </br>
         <h4 className='noPosts'>No Writings Yet...</h4>
         </>
        )
    } else {
    return(
        <>
        <br></br>
        <br></br>
    <Card.Group className='headerCard'>
            <Card fluid header='Your Writings'/>
    </Card.Group>
    <br>
    </br>
        <Card.Group itemsPerRow={3}>
            {writings.map((writing) => {
                return ( 
                    <Card className="titleCard" as={Link} key={writing._id} to={'writing/' + writing._id}>
                        <Card.Content>
                    <h4>{writing.title}</h4>
                    </Card.Content>
                    </Card>
                )}
                )}
            </Card.Group>
            </>
    )

    }
}