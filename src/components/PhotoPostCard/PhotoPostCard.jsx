import React, { useEffect } from "react";
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
import "./PhotoPostCard.css";

export default function PhotoPostCard({ post, user, addLike, removeLike }) {
  const history = useHistory();
  const likes = post.post.likes;
  const liked = post.post.likes.findIndex(
    (like) => like.username === user.username
  );
  console.log(liked)
  const clickHandler =
    liked > -1
      ? () => removeLike(post.post.likes[liked]._id)
      : () => addLike(post.post._id);
  const likeColor = liked > -1 ? "red" : "grey";
  const likeIcon = liked > -1 ? "heart" : "heart outline";

  async function handleDelete(e) {
    e.preventDefault();
    await postService.deleteOne(post.post._id);
    history.push("/" + user.username);
  }
  useEffect(() => {}, []);

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
              <Icon className='heartIcon' onClick={clickHandler} name={likeIcon} color={likeColor}>
                &nbsp;{likes.length ? likes.length : ''}
              </Icon>
            </Card.Description>
          </Card.Content>
        </Card>
        <Card fluid header="Comments:" id="usernameHeader" />
      </Grid.Column>
    </Grid>
  );
}
