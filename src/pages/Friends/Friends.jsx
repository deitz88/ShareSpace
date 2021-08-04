import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import SectionLabel from '../../components/SectionLabel/SectionLabel'
import NavBar from '../../components/NavBar/NavBar'
import UserCard from '../../components/UserCard/UserCard'
import friendService from '../../utils/friendService'
import { Grid, Loader } from 'semantic-ui-react'

export default function Friends({user}){
    const [friends, setFriends] = useState('')
    const [error, setError] = useState('')
    const [friendsArray, setFriendsArray]=useState([])
    const [loading, setLoading] = useState(true);
    
    async function getFriends() {
        try {
          const data = await friendService.getFriends();
          console.log(data)
          // setPosts(() => [...data.posts]);
          setFriendsArray(data)
          setLoading(() => false);
        } catch (err) {
          console.log(err);
          setError("error pulling friends");
        }
      }
      function handleRequests(){
        setFriends(() => getFriends())
      }
      function change(){
          handleRequests()
      }
      useEffect(() => {
        getFriends();
      }, []);

      if (loading) {
        return (
          <Grid
            textAlign="center"
            style={{ height: "100vh" }}
            verticalAlign="middle"
          >
            <Grid.Column style={{ maxWidth: 450 }}>
              <Loader size="large" active>
                Loading
              </Loader>
            </Grid.Column>
          </Grid>
        );
      }
    return(
        <>
        <NavBar user={user}/>
        <h1>Friends List</h1>
        {friendsArray.map((user) => {
                return (
          <UserCard
            username={user.newObj.username}
            photo={user.newObj.photoUrl}
            key={user.newObj._id}
          />
                )
            })}
        </>
    )
}