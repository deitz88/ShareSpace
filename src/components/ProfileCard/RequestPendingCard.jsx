import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import "./ProfileCard.css";

export default function RequestPendingCard({ userRequest }) {
  return (
    <Card centered className="profileCard">
      <Card.Group className="headerCardOtherRequest">
        <Card fluid header={userRequest.username} />
        <div className="iconText">
          <h5 className="firstRowText">Request</h5>
          <h5 className="secondRowText">Pending</h5>
        </div>
        <Icon className="settingIcon" name="wait" size="large" />
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
