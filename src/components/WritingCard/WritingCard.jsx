import React from "react";
import { Link, useHistory } from "react-router-dom";
import postService from "../../utils/postService";
import {
  Card,
  Grid,
  Segment,
  Icon,
  Image,
  Header,
  Button,
} from "semantic-ui-react";
import "./WritingCard.css";

export default function WritingCard({ writing, user }) {
  const history = useHistory();
  async function handleDelete(e) {
    e.preventDefault();
    await postService.deleteWriting(writing.writing._id);
    history.push("/" + user.username);
    console.log('hello, this is a button')
  }
  async function handleUpdate(e) {
    e.preventDefault();
    history.push(`/updatewriting/${writing.writing._id}`)
  }

  return (
    <Grid textAlign="center" style={{ height: "50vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Card centered className="profileCard">
          <Card fluid id="usernameHeader">
            <Header as="h2" className="postUsername" floated="right">
              Author: &nbsp;&nbsp;{writing.writingUser.username}
              <Link to={"/" + writing.writingUser.username}>
                <Image
                  className="postAvatar"
                  to="/"
                  src={writing.writingUser.photoUrl}
                  avatar
                  size="large"
                  floated="left"
                ></Image>
              </Link>
            </Header>
          </Card>
          <Card centered raised as='h4' header={writing.writing.title}/>
          <Card.Content>
            <Card.Description>
              <Segment>
        
                <br /> 
                {writing.writing.content}
              </Segment>
              {user._id === writing.writingUser._id ? (
                <Card.Group itemsPerRow={2}>
                  <Card>
                    <Button onClick={handleUpdate}>Update</Button>
                  </Card>
                  <Card>
                    <Button onClick={handleDelete}>Delete</Button>
                  </Card>
                </Card.Group>
              ) : null}
              <br />
              <Icon name="comment outline"></Icon>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <Icon name="heart outline"></Icon>
            </Card.Description>
          </Card.Content>
        </Card>
        <Card fluid header="Comments:" id="usernameHeader" />
      </Grid.Column>
    </Grid>
  );
}
