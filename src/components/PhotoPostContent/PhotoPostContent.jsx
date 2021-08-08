import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {Card, Grid, Header, Image, Icon, Group } from 'semantic-ui-react'
import './PhotoPostContent.css'

// const src='https://react.semantic-ui.com/images/wireframe/white-image.png'

export default function PhotoPostContent({user, profileUser, posts, error}){
    if(error){
        return(
            <h1>error!</h1>
        )
    } else {
    
    if(!posts.length){
        return(
            <>
            <br></br>
            <br></br>
        <Card.Group className='headerCard'>
                <Card fluid header={
                    user._id === profileUser._id 
                    ?'Your Posts'
                    :profileUser.username +"'s Posts"}/>
        </Card.Group>
        <br>
        </br>
         <h4 className='noPosts'>This user hasnt uploaded anyting yet!</h4>
         </>
        )
    } else {
    return(
        <>
        <br></br>
        <br></br>
    <Card.Group className='headerCard'>
            <Card fluid header={
                    user._id === profileUser._id 
                    ?'Your Posts'
                    :profileUser.username +"'s Posts"}/>
    </Card.Group>
    <br>
    </br>
        <Card.Group itemsPerRow={3}>
            {posts.map((post) => {
                return ( 
                    <Card as={Link} image={post.photoUrl} key={post._id} to={'show/' + post._id}/>
                )}
                )}
            </Card.Group>
            </>
    )

    }
}
}