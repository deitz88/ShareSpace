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
  Divider,
  Message,
} from "semantic-ui-react";
import "./WritingCard.css";
import commentService from "../../utils/commentService";

export default function WritingCard({
  writing,
  user,
  addLikeWriting,
  addLikeComment,
  removeLikeComment,
  removeLikeWriting,
  handleCommentSubmit,
  handleChange,
  commentsAndUsers,
  handleDeleteComment,
  toggleDropdown,
  menu,
  dropdown,
  comment,
  show,
  setShow,
}) {
  const history = useHistory();
  const likes = writing.writing.likes;
  const liked = writing.writing.likes.findIndex(
    (like) => like.username === user.username
  );

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

  const clickHandler =
    liked > -1
      ? () => removeLikeWriting(writing.writing.likes[liked]._id)
      : () => addLikeWriting(writing.writing._id);
  const likeColor = liked > -1 ? "red" : "grey";
  const likeIcon = liked > -1 ? "heart" : "heart outline";

  function changeShow(e) {
    e.preventDefault();
    setShow(!show);
  }

  async function handleDelete(e) {
    e.preventDefault();
    await postService.deleteWriting(writing.writing._id);
    history.push("/" + user.username);
  }
  async function handleUpdate(e) {
    e.preventDefault();
    history.push(`/updatewriting/${writing.writing._id}`);
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
          <Card centered raised as="h4" header={writing.writing.title} />
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
              <Icon name={iconName} onClick={changeShow}>
                &nbsp;{commentsAndUsers.length ? commentsAndUsers.length : ""}
              </Icon>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <Icon
                className="heartIcon"
                name={likeIcon}
                color={likeColor}
                onClick={clickHandler}
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
                    >
                      {dropdown === true ? "" : ""}
                    </Icon>
                  ) : (
                    ""
                  )}
                  <Link to={`/${commentsAndUser.user.username}`}>{commentsAndUser.user.username}:&nbsp;</Link>
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
