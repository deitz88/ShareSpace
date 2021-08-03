import React from 'react'
import {Card, Grid, Header, Image, Icon, Group } from 'semantic-ui-react'

const src='https://react.semantic-ui.com/images/wireframe/white-image.png'

export default function ProfileContent(){
    return(
        
        <Card.Group itemsPerRow={3}>
            <Card raised image={src} />
            <Card raised image={src} />
            <Card raised image={src} />
            <Card raised image={src} />
            <Card raised image={src} />
            <Card raised image={src} />
            <Card raised image={src} />
            <Card raised image={src} />
            <Card raised image={src} />
            <Card raised image={src} />
            <Card raised image={src} />
            <Card raised image={src} />
    </Card.Group>
    )
}