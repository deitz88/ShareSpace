import React from "react";
import { Grid, Card, Header, Image, Segment, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function PhotoPostFeed({ post }) {
  return (
    <Card>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Card centered className="profileCard">
          <Card fluid id="usernameHeader">
            <Header as="h2" className="postUsername" floated="right">
              {post.user.username}
              <Link to={"/" + post.user.username}>
                <Image
                  className="postAvatar"
                  to="/"
                  src={post.user.photoUrl}
                  avatar
                  size="large"
                  floated="left"
                ></Image>
              </Link>
            </Header>
          </Card>
          <Card centered raised image={post.photoUrl} size="medium" />
          <Card.Content>
            <Card.Description>
              <Segment>
                <span className="postBio">Comment:</span>
                <br /> <br />
                {post.comment}
              </Segment>
              <Icon name="heart outline"></Icon>
            </Card.Description>
          </Card.Content>
        </Card>
        <Card fluid header="Comments:" id="usernameHeader" />
      </Grid.Column>
    </Card>
  );
}
