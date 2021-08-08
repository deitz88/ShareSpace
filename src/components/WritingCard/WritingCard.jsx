import React, { useState } from "react";
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
  Divider
} from "semantic-ui-react";
import "./WritingCard.css";

export default function WritingCard({
  writing,
  user,
  addLikeWriting,
  removeLikeWriting,
  handleCommentSubmit,
  handleChange,
  input,
  commentsAndUsers
}) {
  const history = useHistory();
  const [show, setShow] = useState(false);

  const likes = writing.writing.likes;
  const liked = writing.writing.likes.findIndex(
    (like) => like.username === user.username
  );
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
    console.log("hello, this is a button");
  }
  async function handleUpdate(e) {
    e.preventDefault();
    history.push(`/updatewriting/${writing.writing._id}`);
  }
console.log(commentsAndUsers[0].comment.comment)
 
  const iconName = show == true ? "comment" : "comment outline";
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
              <Icon name={iconName} onClick={changeShow}></Icon>
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
        {show == true ? (
          <Card fluid>
            <Form>
            <Form.TextArea name="comment" placeholder="comment" onChange={handleChange}/>
            <div>
              <Button id="signupButton" className="btn" size="tiny" onClick={handleCommentSubmit}>
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
                  <div className='contentContainer'>
                 <Grid>
                  <Grid.Row>
                  <Grid.Column width={3}>
                    <Link to='/'>
                    <Image src={commentsAndUser.user.photoUrl} avatar size='tiny' />
                    </Link>
                  </Grid.Column>
                  <Grid.Column header width={3}>
                    {/* <Card> */}
                    <h6>{commentsAndUser.user.username}</h6>
                    
                  </Grid.Column>
                  <Grid.Column width={10}>
                   <h6>{commentsAndUser.comment.comment}</h6>

                  </Grid.Column>
                  </Grid.Row>
                   </Grid> 
                   <Divider horizontal></Divider>
                   </div>
                )}
                )}

 

        
       </Segment>
      </Grid.Column>
    </Grid>
  );
}
