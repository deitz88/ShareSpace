import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Image, Icon, Grid, Loader } from "semantic-ui-react";
import "./ProfileCard.css";
import NonFriendCard from "./NonFriendCard";
import FriendProfileCard from "./FriendProfileCard";
import RequestPendingCard from "./RequestPendingCard";
import UsersCard from "./UsersCard";

export default function ProfileCard({
  userRequest,
  loggedInUser,
  requestFriend,
}) {
    let friendArray=[]
    for(let i=0; i<loggedInUser.friendRequests.length; i++){
        friendArray.push(loggedInUser.friendRequests[i]._id)
    }
    console.log(friendArray)
  if (userRequest._id === loggedInUser._id) {
    return (
      <UsersCard
        userRequest={userRequest}
        loggedInUser={loggedInUser}
        requestFriend={requestFriend}
      />
    );
  } else if (

      userRequest.friendRequests.includes(loggedInUser._id) ||
      friendArray.includes(userRequest._id) 
  ) {
    return <RequestPendingCard userRequest={userRequest} />;
  } else if (userRequest.friends.includes(loggedInUser._id)) {
    return (
      <FriendProfileCard
        loggedInUser={loggedInUser}
        userRequest={userRequest}
      />
    );
  } else if (!userRequest.friendRequests.includes(loggedInUser._id)) {
    return (
      <NonFriendCard userRequest={userRequest} requestFriend={requestFriend} />
    );
  }
}
