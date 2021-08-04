import React from 'react'
import {Card, Grid, Header, Image, Icon, Group } from 'semantic-ui-react'
import './PhotoPostContent.css'

const src='https://react.semantic-ui.com/images/wireframe/white-image.png'

export default function PhotoPostContent({user, posts}){
    console.log(posts)
    if(!posts.length){
        return(
         <h4 className='noPosts'>This user hasnt uploaded anyting yet!</h4>
        )
    } else {
    return(
        <Card.Group itemsPerRow={3}>
            {posts.map((post) => {
                return (
                <Card raised image={post.photoUrl} />
                )}
                )}
            </Card.Group>
    )
}
}