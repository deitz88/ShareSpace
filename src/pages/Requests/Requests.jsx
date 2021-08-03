import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import SectionLabel from '../../components/SectionLabel/SectionLabel'
import NavBar from '../../components/NavBar/NavBar'
import { Card, Grid, Header } from 'semantic-ui-react'
import friendService from '../../utils/friendService'

export default function Requests({user}){
    const [requests, setRequests] = useState('')
    const [error, setError] = useState('')
    async function getRequests() {
        try {
          console.log('hitting async function')
          const data = await friendService.getRequests();
          // setLoading(() => false);
          // setPosts(() => [...data.posts]);
          console.log(data)
        } catch (err) {
          console.log(err);
          setError("error pulling requests");
        }
      }
      function handleRequests(){
        setRequests(() => getRequests())
      }
      useEffect(() => {
        getRequests();
      }, []);
    return(
        <>
        <NavBar user={user}/>
        <Grid
            textAlign="center"
            style={{ height: "15vh" }}
            verticalAlign="middle"
            >
            <Grid.Column style={{ maxWidth: 450 }}>
                <Card centered className="profileCard">
                <h1 onLoad={handleRequests} >Pending Requests</h1>
                </Card>
        </Grid.Column>
        </Grid>
        </>
    )
}