import React from "react";
import { Link } from "react-router-dom";
import { Card, Image, Icon } from "semantic-ui-react";
import "./ProfileCard.css";

export default function UsersCard({ userRequest, posts, writings }) {
  console.log(userRequest);
  return (
    <Card centered className="profileCard">
      <Card.Group className="headerCard">
        <Card fluid header={userRequest.username} id="usernameHeader" />
        <Link to="/update">
          <Icon className="settingIcon" name="setting" size="large" />
        </Link>
      </Card.Group>
      <Image src={userRequest.photoUrl} wrapped ui={false} />
      <Card.Content>
        <Card.Header textAlign="center">
          <h2 className="bioHeader">Bio:</h2>
        </Card.Header>
        <Card.Meta>
          {/* <span className='date'>Joined in 2015</span> */}
        </Card.Meta>
        <Card.Description>
          {/* <Segment>
                        Bio:
                    </Segment> */}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Link to="/friends">
          Friends: &nbsp;
          <Icon name="user" />
          {userRequest.friends.length ? userRequest.friends.length : 0}
        </Link>
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
