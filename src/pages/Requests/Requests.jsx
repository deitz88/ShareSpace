import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import UserCard from '../../components/UserCard/UserCard'
import { Card, Grid, Header, Loader } from 'semantic-ui-react'
import './Requests.css'

export default function Requests({user, setUser, handleLogout}){
    
    return(
        <>
        <NavBar user={user} handleLogout={handleLogout}/>
        <Grid
            textAlign="center"
            style={{ height: "45vh" }}
            verticalAlign="middle"
            >
            <Grid.Column style={{ maxWidth: 450 }}>
                <Card centered className="profileCard">
                <h1 className='requestsHeader'>Pending Requests</h1>
                </Card>
        
            {user.friendRequests.map((user) => {
                return (
          <UserCard
            username={user.username}
            photo={user.photoUrl}
            key={user._id}
            setUser={setUser}
          />
                )
            })}
            </Grid.Column>
       
        {/* </Grid> */}
        </Grid>
        </>
    )
}