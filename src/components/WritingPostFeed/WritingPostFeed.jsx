import React from "react";
import { Grid, Card, Header, Image, Segment, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./WritingPostFeed.css";

export default function WritingPostFeed({
  writing,
  removeLikeWriting,
  addLikeWriting,
  user,
}) {
  const link = Link;
  const liked = writing.likes.findIndex(
    (likes) => likes.username === user.username
  );
  const clickHandler =
    liked > -1
      ? () => removeLikeWriting(writing.likes[liked]._id)
      : () => addLikeWriting(writing._id);
  const likeColor = liked > -1 ? "red" : "grey";
  const likeIcon = liked > -1 ? "heart" : "heart outline";
  return (
    <Card style={{ height: 'fit-content'}}>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Card centered className="profileCard">
          <Card fluid id="usernameHeader">
            <Header as="h2" className="postUsername" floated="right">
              {writing.user.username}
              <Link to={"/" + writing.user.username}>
                <Image
                  className="postAvatar"
                  src={writing.user.photoUrl}
                  avatar
                  size="large"
                  floated="left"
                ></Image>
              </Link>
            </Header>
          </Card>
          <Card
            as={link}
            to={"writing/" + writing._id}
            centered
            raised
            size="medium"
          >
            <h6 className="writingTitle">
              <span className="title">Title:</span>
              {"  " + writing.title} here
            </h6>
          </Card>

          <Card.Content>
            <Card.Description>
              <Segment>
                <div className="goToContainerWriting">
                  <h6>Click title for more</h6>
                </div>
              </Segment>
              <Icon
                className="like"
                name={likeIcon}
                color={likeColor}
                onClick={clickHandler}
              >
                {writing.likes.length ? writing.likes.length : ""}
              </Icon>
            </Card.Description>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Card>
  );
}
