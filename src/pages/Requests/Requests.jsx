import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import SectionLabel from '../../components/SectionLabel/SectionLabel'
import NavBar from '../../components/NavBar/NavBar'
import UserCard from '../../components/UserCard/UserCard'
import { Card, Grid, Header } from 'semantic-ui-react'
import friendService from '../../utils/friendService'

export default function Requests({user}){
    const [requests, setRequests] = useState('')
    const [error, setError] = useState('')
    let profileInfo =[]
    async function getRequests() {
        try {
          const data = await friendService.getRequests();
          // setLoading(() => false);
          // setPosts(() => [...data.posts]);
            profileInfo.push(data)
        } catch (err) {
          console.log(err);
          setError("error pulling requests");
        }
      }
      function handleRequests(){
        setRequests(() => getRequests())
      }
      function change(){
          handleRequests()
      }
      useEffect(() => {
        getRequests();
      }, []);

      console.log(profileInfo, '<-----------------')

    return(
        <>
        <NavBar user={user} change={change}/>
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
            {/* <Grid
            textAlign="center"
            style={{ height: "15vh" }}
            verticalAlign="middle"
            > */}
            {/* <Grid.Column style={{ maxWidth: 450 }}> */}
            {/* {profileInfo.map((user) => {
                return (
          <UserCard
            username={user.newObj.username}
            photo={user.newObj.photoUrl}
            key={user.newObj._id}
          />
                )
            })
        }; */}
        {/* </Grid.Column> */}
        {/* </Grid> */}
        </Grid>
        </>
    )
}