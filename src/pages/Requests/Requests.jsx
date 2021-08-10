import React, { useEffect, useState } from "react";
import UserCard from "../../components/UserCard/UserCard";
import { Card, Grid, Header, Loader } from "semantic-ui-react";
import "./Requests.css";
import friendService from "../../utils/friendService";

export default function Requests({ user, handleSignUpOrLogin }) {
  return (
    <>
      <Grid
        textAlign="center"
        style={{ height: "100vh"}, {margin: '20px'}}
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
