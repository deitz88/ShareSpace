import React from "react";
import { Link } from "react-router-dom";
import { Card, Icon, Image } from "semantic-ui-react";
import "./ProfileCard.css";

export default function FriendProfileCard({ userRequest }) {
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
        <a>
          Friends: &nbsp;&nbsp;
          <Icon name="user" />
          {userRequest.friends.length ? userRequest.friends.length : 0}
        </a>
      </Card.Content>
    </Card>
  );
}
