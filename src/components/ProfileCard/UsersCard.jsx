import React from "react";
import { Link } from "react-router-dom";
import { Card, Image, Icon, Segment } from "semantic-ui-react";
import "./ProfileCard.css";

export default function UsersCard({
  userRequest,
  loggedInUser,
  requestFriend,
}) {
  const link = Link;
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
          Friends: &nbsp;&nbsp;
          <Icon name="user" />
          {userRequest.friends.length ? userRequest.friends.length : 0}
        </Link>
      </Card.Content>
    </Card>
  );
}
