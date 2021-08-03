import React from 'react'
import { Card } from 'semantic-ui-react'

export default function SectionLabel(){
    return(
        <>
        <br></br>
        <br></br>
    <Card.Group className='headerCard'>
            <Card fluid header='Your Posts'/>
    </Card.Group>
    <br>
    </br>
    </>
    )
}