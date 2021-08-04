import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import SectionLabel from '../../components/SectionLabel/SectionLabel'
import NavBar from '../../components/NavBar/NavBar'
import FriendCard from '../../components/FriendCard/FriendCard'
import { Card, Grid, Header, Loader } from 'semantic-ui-react'


export default function Friends({user, setUser, handleLogout}){
   
    return(
        <>
       
        <Grid
            textAlign="center"
            style={{ height: "45vh" }}
            verticalAlign="middle"
            >
            <Grid.Column style={{ maxWidth: 450 }}>
                <Card centered className="profileCard">
                <h1 className='requestsHeader'>Friends List</h1>
                </Card>
        
            {user.friends.map((friend) => {
                return (
                    <FriendCard
                        username={friend.username}
                        photo={friend.photoUrl}
                        key={friend._id}
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