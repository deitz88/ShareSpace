import React from "react";
import { Grid, Card, Header, Image, Segment, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import './PhotoPostFeed.css'

export default function PhotoPostFeed({ post, removeLike, addLike, user }) {
    const link = Link
    const likes = post.likes
    const liked = post.likes.findIndex(like => like.username === user.username)
    const clickHandler = liked > -1 ? () => removeLike(post.likes[liked]._id) : () => addLike(post._id)
    const likeColor = liked > -1 ? 'red' : 'grey'
    const likeIcon = liked > -1 ? "heart" : "heart outline"
  return (
    <Card style={{ height: 'fit-content'}}> 
      <Grid.Column style={{ maxWidth: 450 }}>
        <Card centered className="profileCard">
          <Card fluid id="usernameHeader">
            <Header as="h2" className="postUsername" floated="right">
              {post.user.username}
              <Link to={"/" + post.user.username}>
                <Image
                  className="postAvatar"
                  src={post.user.photoUrl}
                  avatar
                  size="large"
                  floated="left"
                ></Image>
              </Link>
            </Header>
          </Card>
          <Card as={link} to={'show/' + post._id} centered raised image={post.photoUrl} size="medium" />
                <div className='goToContainer'>
                <h6>go to post to see comments</h6>
                </div>
          <Card.Content>
         
            <Card.Description>
              <Segment>
                {post.comment}
              </Segment>
              <Icon className="like" name={likeIcon} color={likeColor} onClick={clickHandler}>{likes.length ? likes.length : ''}</Icon>
            </Card.Description>
          </Card.Content>
        </Card>
       {/* <Segment> */}

            {/* </Segment> */}
      </Grid.Column>
    </Card>
  );
}
