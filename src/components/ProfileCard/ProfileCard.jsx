import React from "react";
import "./ProfileCard.css";
import NonFriendCard from "./NonFriendCard";
import FriendProfileCard from "./FriendProfileCard";
import RequestPendingCard from "./RequestPendingCard";
import UsersCard from "./UsersCard";

export default function ProfileCard({
  userRequest,
  loggedInUser,
  requestFriend,
  posts,
  writings,
}) {
  let friendArray = [];
  for (let i = 0; i < loggedInUser.friendRequests.length; i++) {
    friendArray.push(loggedInUser.friendRequests[i]._id);
  }
  if (userRequest._id === loggedInUser._id) {
    return (
      <UsersCard
        userRequest={userRequest}
        loggedInUser={loggedInUser}
        requestFriend={requestFriend}
        posts={posts}
        writings={writings}
      />
    );
  } else if (
    userRequest.friendRequests.includes(loggedInUser._id) ||
    friendArray.includes(userRequest._id)
  ) {
    return (
      <RequestPendingCard
        userRequest={userRequest}
        posts={posts}
        writings={writings}
      />
    );
  } else if (userRequest.friends.includes(loggedInUser._id)) {
    return (
      <FriendProfileCard
        loggedInUser={loggedInUser}
        userRequest={userRequest}
        posts={posts}
        writings={writings}
      />
    );
  } else if (!userRequest.friendRequests.includes(loggedInUser._id)) {
    return (
      <NonFriendCard
        userRequest={userRequest}
        requestFriend={requestFriend}
        posts={posts}
        writings={writings}
      />
    );
  }
}
