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
  Form,
  Message,
} from "semantic-ui-react";
import "./PhotoPostCard.css";
import commentService from "../../utils/commentService";

export default function PhotoPostCard({
  post,
  user,
  addLike,
  removeLike,
  handleChange,
  handleCommentSubmit,
  commentsAndUsers,
  toggleDropdown,
  dropdown,
  addLikeComment,
  removeLikeComment,
  menu,
  comment,
  handleDeleteComment,
  setShow,
  show,
}) {
  const history = useHistory();
  const likes = post.post.likes;
  const liked = post.post.likes.findIndex(
    (like) => like.username === user.username
  );
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

  function changeShow(e) {
    e.preventDefault();
    setShow(!show);
  }
  async function clickHandlerComment(e) {
    e.preventDefault();
    let comment = await commentService.getComment(e.target.id);
    let likedComment = comment.comment.likes.findIndex(
      (like) => like.username === user.username
    );

    if (likedComment > -1) {
      removeLikeComment(comment.comment.likes[likedComment]._id);
    } else {
      addLikeComment(comment.comment._id);
    }
  }

  const iconName = show === true ? "comment" : "comment outline";
  return (
    <Grid
      textAlign="center"
      style={({ height: "100vh" }, { margin: "20px" })}
      verticalAlign="middle"
    >
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
              <Icon name={iconName} onClick={changeShow}>
                &nbsp;{commentsAndUsers.length ? commentsAndUsers.length : ""}
              </Icon>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <Icon
                className="heartIcon"
                onClick={clickHandler}
                name={likeIcon}
                color={likeColor}
              >
                &nbsp;{likes.length ? likes.length : ""}
              </Icon>
            </Card.Description>
          </Card.Content>
        </Card>
        {show === true ? (
          <Card fluid>
            <Form>
              <Form.TextArea
                name="comment"
                placeholder="comment"
                onChange={handleChange}
              />
              <div>
                <Button
                  id="signupButton"
                  className="btn"
                  size="tiny"
                  onClick={handleCommentSubmit}
                >
                  Add Comment
                </Button>
                <div className="closeBtn" onClick={changeShow}>
                  X
                </div>
              </div>
            </Form>
          </Card>
        ) : (
          ""
        )}
        <Card fluid header="Comments:" id="usernameHeader" />
        <Segment>
          {commentsAndUsers.map((commentsAndUser) => {
            return (
              <>
                <Message floating key={commentsAndUser.comment._id}>
                  {commentsAndUser.comment.user === user._id ? (
                    <Icon
                      name="ellipsis horizontal"
                      onClick={toggleDropdown}
                      id={commentsAndUser.comment._id}
                      className="threeDots"
                    >
                      {dropdown === true ? "" : ""}
                    </Icon>
                  ) : (
                    ""
                  )}
                  <Link to="/">{commentsAndUser.user.username}:&nbsp;</Link>
                  <span className="comment">
                    {commentsAndUser.comment.comment}
                  </span>
                  {menu === true && comment === commentsAndUser.comment._id ? (
                    <>
                      <Button
                        className="btn"
                        size="tiny"
                        onClick={handleDeleteComment}
                      >
                        Delete
                      </Button>{" "}
                      <Button className="btn" size="tiny">
                        Update
                      </Button>
                    </>
                  ) : (
                    ""
                  )}
                </Message>
                <div className="heartContainer">
                  <Icon
                    name={
                      commentsAndUser.comment.likes.findIndex(
                        (like) => like.username === user.username
                      ) > -1
                        ? "heart"
                        : "heart outline"
                    }
                    color={
                      commentsAndUser.comment.likes.findIndex(
                        (like) => like.username === user.username
                      ) > -1
                        ? "red"
                        : "grey"
                    }
                    id={commentsAndUser.comment._id}
                    onClick={clickHandlerComment}
                    className="heartOutline"
                  >
                    {" "}
                    <div className="counterContainer">
                      &nbsp;
                      {commentsAndUser.comment.likes.length
                        ? commentsAndUser.comment.likes.length
                        : ""}
                    </div>
                  </Icon>
                </div>
              </>
            );
          })}
        </Segment>
      </Grid.Column>
    </Grid>
  );
}
