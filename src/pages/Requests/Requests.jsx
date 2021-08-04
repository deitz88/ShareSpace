import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import SectionLabel from '../../components/SectionLabel/SectionLabel'
import NavBar from '../../components/NavBar/NavBar'
import UserCard from '../../components/UserCard/UserCard'
import { Card, Grid, Header, Loader } from 'semantic-ui-react'
import friendService from '../../utils/friendService'
import './Requests.css'

export default function Requests({user}){
    const [requests, setRequests] = useState('')
    const [error, setError] = useState('')
    const [requestArray, setRequestArray]=useState([])
    const [loading, setLoading] = useState(true);
    async function getRequests() {
        try {
          const data = await friendService.getRequests();
          console.log(data)
          // setPosts(() => [...data.posts]);
          setRequestArray(data)
          setLoading(() => false);
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
        <NavBar user={user} change={change}/>
        <Grid
            textAlign="center"
            style={{ height: "45vh" }}
            verticalAlign="middle"
            >
            <Grid.Column style={{ maxWidth: 450 }}>
                <Card centered className="profileCard">
                <h1 className='requestsHeader' onLoad={handleRequests} >Pending Requests</h1>
                </Card>
        
    
          
            
            {requestArray.map((user) => {
                return (
          <UserCard
            username={user.newObj.username}
            photo={user.newObj.photoUrl}
            key={user.newObj._id}
          />
                )
            })}
            </Grid.Column>
       
        {/* </Grid> */}
        </Grid>
        </>
    )
}