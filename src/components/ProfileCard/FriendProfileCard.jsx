import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import "./ProfileCard.css";

export default function FriendProfileCard({ userRequest, posts, writings }) {
  return (
    <Card centered className="profileCard">
      <Card.Group className="headerCardOther">
        <Card fluid header={userRequest.username} />
        <div className="iconTextNon">
          <h5 className="firstRowText">You're</h5>
          <h5 className="secondRowText">Friends!</h5>
        </div>

        <Icon className="settingIcon" name="smile outline" size="large" />
      </Card.Group>
      <Image src={userRequest.photoUrl} wrapped ui={false} />
      <Card.Content>
        <Card.Header textAlign="center">
          <h2 className="bioHeader">Bio:</h2>
        </Card.Header>
      </Card.Content>
      <Card.Content extra>
        <a>
          Friends: &nbsp;&nbsp;
          <Icon name="user" />
          {userRequest.friends.length ? userRequest.friends.length : 0}
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a>
          Posts: &nbsp;
          {posts.length ? posts.length : "None"}
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a>
          Writings: &nbsp;
          {writings.length ? writings.length : "None"}
        </a>
      </Card.Content>
    </Card>
  );
}
