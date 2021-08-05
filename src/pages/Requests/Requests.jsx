import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import UserCard from '../../components/UserCard/UserCard'
import { Card, Grid, Header, Loader } from 'semantic-ui-react'
import './Requests.css'

export default function Requests({user, setUser, handleLogout}){
    
    return(
        <>
        <Grid
            textAlign="center"
            style={{ height: "15vh" }}
            verticalAlign="middle"
            >
            <Grid.Column style={{ maxWidth: 450 }}>
                <Card centered className="profileCard">
                <h1 className='requestsHeader'>Pending Requests</h1>
                </Card>
        
            {user.friendRequests.map((request) => {
                return (
          <UserCard
            username={request.username}
            photo={request.photoUrl}
            key={request._id}
            setUser={setUser}
            user={user}
          />
                )
            })}
            </Grid.Column>
       
        {/* </Grid> */}
        </Grid>
        </>
    )
}