import React from "react";
import { Link } from "react-router-dom";
import { Card, Image, Icon } from "semantic-ui-react";
import "./ProfileCard.css";

export default function NonFriendCard({ userRequest, requestFriend, posts, writings }) {
  const clickHandler = () => requestFriend(userRequest);

  return (
    <Card centered className="profileCard">
      <Card.Group className="headerCardOther">
        <Card fluid header={userRequest.username} />
        <div className="iconTextNon">
          <h5 className="firstRowText">Add</h5>
          <h5 className="secondRowText">Friend</h5>
        </div>
        <Link to={"/" + userRequest.username}>
          <Icon
            className="settingIcon"
            name="add user"
            size="large"
            onClick={clickHandler}
          />
        </Link>
      </Card.Group>
      <Image src={userRequest.photoUrl} wrapped ui={false} />
      <Card.Content>
        <Card.Header textAlign="center">
          <h2 className="bioHeader">Bio:</h2>
        </Card.Header>
        <Card.Meta></Card.Meta>
        <Card.Description></Card.Description>
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
