import React from 'react'
import {Card, Grid, Header, Image, Icon, Group } from 'semantic-ui-react'

const src='https://react.semantic-ui.com/images/wireframe/white-image.png'

export default function PhotoPostContent({user, posts}){
    console.log(posts)
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