import React, { useEffect, useState } from "react";
import UserCard from "../../components/UserCard/UserCard";
import { Card, Grid, Header, Loader } from "semantic-ui-react";
import "./Requests.css";
import friendService from "../../utils/friendService";

export default function Requests({ user, handleSignUpOrLogin }) {
  //    const [userAccept, setUserAccept] = useState('')
  //     // async function handleDeny(e){
  //     //     e.preventDefault()
  //     //     await friendService.denyRequest(username)
  //     //     handleSignUpOrLogin()
  //     // }

  //     async function handleAccept(user){
  //         // e.preventDefault()
  //         // await friendService.approveRequest(user)
  //         // handleSignUpOrLogin()
  //         console.log('hitting', user)
  //     }
  //     // handleAccept()
  //     // useEffect(() => {

  //     //    handleAccept(userAccept)
  //     //     }, [userAccept]);
  return (
    <>
      <Grid
        textAlign="center"
        style={{ height: "15vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Card centered className="profileCard">
            <h1 className="requestsHeader">Pending Requests</h1>
          </Card>

          {user.friendRequests.map((request) => {
            return (
              <UserCard
                username={request.username}
                photo={request.photoUrl}
                key={request._id}
                handleSignUpOrLogin={handleSignUpOrLogin}
                // setUserAccept={setUserAccept}
                user={user}
              />
            );
          })}
        </Grid.Column>

        {/* </Grid> */}
      </Grid>
    </>
  );
}
