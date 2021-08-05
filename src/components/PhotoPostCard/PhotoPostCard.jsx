import React from 'react'
import { Card, Grid, Segment, Icon, Loader } from 'semantic-ui-react'
import './PhotoPostCard.css'

export default function PhotoPostCard({post}){
    const [wait, setWait] = React.useState('')
    function test(){
        setWait('loaded')
    }
    React.useEffect(()=>{
        test()
    }, [])
console.log(post)
    return(
        <Grid
        textAlign="center"
        style={{ height: "50vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
        <Card centered className="profileCard">
            <Card fluid id='usernameHeader'>
            <h1 className='postUsername'>username</h1>
            </Card>
            <Card centered raised image={post.photoUrl} size='medium'/>
                <Card.Content>
                    {/* <Card.Header textAlign="center">
                        <h2 className='bioHeader'>Bio:</h2></Card.Header> */}
                
                    <Card.Description>
                        <Segment>
                            <span className='postBio'>Bio:</span>
                            <br />   <br />
                            {post.comment}
                        </Segment>
                        <Icon name='comment outline'></Icon>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <Icon name='heart outline'></Icon>
                    </Card.Description>
            </Card.Content>
        </Card>
        <Card fluid header='Comments:' id='usernameHeader'/> 
        </Grid.Column>
        </Grid>
    )
}
