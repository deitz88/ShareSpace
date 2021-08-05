import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import postService from '../../utils/postService';
import { Card, Grid, Segment, Icon, Loader } from 'semantic-ui-react'
import './PhotoPostShow.css'
import PhotoPostCard from '../../components/PhotoPostCard/PhotoPostCard';

export default function PhotoPostShow({user}){
    const { id } = useParams();
    const [loading, setLoading]= React.useState(true)
    const [post, setPost] = React.useState({})
   
 
     useEffect(() => {
async function getPost(id){
        setLoading(true)
        const retrievedPost = await postService.getPost(id)
        setPost(retrievedPost);  
        setLoading(false)
     }
        getPost(id)
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
        <PhotoPostCard post={post}/>
    )
}
}