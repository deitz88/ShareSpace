import React, { useEffect } from "react";
import FriendCard from "../../components/FriendCard/FriendCard";
import { Card, Grid, Header } from "semantic-ui-react";
import "./Friends.css";

export default function Friends({ user, handleSignUpOrLogin }) {
  return (
    <>
      <Grid
        textAlign="center"
        style={({ height: "100vh" }, { margin: "20px" })}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Card centered className="friendCard">
            <h1 className="requestsHeader">Friends List</h1>
          </Card>
          {user.friends.length ? "" : <Header>No Requests Yet</Header>}
          {user.friends.map((friend) => {
            return (
              <FriendCard
                username={friend.username}
                photo={friend.photoUrl}
                key={friend._id}
                handleSignUpOrLogin={handleSignUpOrLogin}
                user={user}
              />
            );
          })}
        </Grid.Column>
      </Grid>
    </>
  );
}
