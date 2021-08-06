import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import postService from '../../utils/postService';
import { Card, Grid, Segment, Icon, Loader } from 'semantic-ui-react'
import './WritingShow.css'
import WritingCard from '../../components/WritingCard/WritingCard';

export default function WritingShow({user}){
    const { id } = useParams();
    const [loading, setLoading]= useState(true)
    const [writing, setWriting] = useState({})
   
 
     useEffect(() => {
async function getWriting(id){
        setLoading(true)
        const retrievedWriting = await postService.getWriting(id)
        setWriting(retrievedWriting);  
        setLoading(false)
     }
        getWriting(id)
        }, []);

    if (loading) {
        return (
            <Grid
            textAlign="center"
            style={{ height: "65vh" }}
            verticalAlign="middle"
            >
            <Grid.Column style={{ maxWidth: 450 }}>
                <Loader 
                    size="large" 
                    active
                >
                Loading
                </Loader>
            </Grid.Column>
            </Grid>
        );
        } else {

    return(
        <WritingCard writing={writing} user={user}/>
    )
}
}