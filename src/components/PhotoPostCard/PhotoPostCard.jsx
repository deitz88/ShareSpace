import React from "react";
import { Link , useHistory} from "react-router-dom";
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
import "./PhotoPostCard.css";

export default function PhotoPostCard({ post, user }) {
    const history=useHistory()
  async function handleDelete(e) {
    e.preventDefault();
    await postService.deleteOne(post.post._id)
    history.push('/' + user.username)

  }

  return (
    <Grid textAlign="center" style={{ height: "50vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Card centered className="profileCard">
          <Card fluid id="usernameHeader">
            <Header as="h2" className="postUsername" floated="right">
              {post.postUser.username}
              <Link to={"/" + post.postUser.username}>
                <Image
                  className="postAvatar"
                  to="/"
                  src={post.postUser.photoUrl}
                  avatar
                  size="large"
                  floated="left"
                ></Image>
              </Link>
            </Header>
          </Card>
          <Card centered raised image={post.post.photoUrl} size="medium" />
          <Card.Content>
            <Card.Description>
              <Segment>
                <span className="postBio">Comment:</span>
                <br /> <br />
                {post.post.comment}
              </Segment>
              {user._id === post.postUser._id ? (
                <Card.Group itemsPerRow={2}>
                  <Card>
                    <Button>Update</Button>
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
