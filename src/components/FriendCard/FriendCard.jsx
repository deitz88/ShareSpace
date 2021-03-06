import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Image, Grid } from "semantic-ui-react";
import "./FriendCard.css";
import friendService from "../../utils/friendService";

export default function FriendCard({ username, photo, handleSignUpOrLogin }) {
  async function handleRemove(e) {
    e.preventDefault();
    await friendService.removeFriend(username);
    handleSignUpOrLogin();
  }
  useEffect(() => {}, []);
  return (
    <>
      <Card.Group className="headerCard">
        &nbsp; &nbsp; &nbsp;
        <Card.Content>
          {username}
          <Card.Header textAlign="center"></Card.Header>
          <Link to={username}>
            <Image src={photo} avatar />
          </Link>
          <Card.Meta>
            {/* <span className='date'>Joined in 2015</span> */}
          </Card.Meta>
          <Card.Description>
            {/* <Segment>
                            Bio:
                        </Segment> */}
          </Card.Description>
        </Card.Content>
        <Grid.Row>
          {/* <br /> */}
          {/* <h3 className='userCardText'>&nbsp;&nbsp;&nbsp;accept or deny buttons here
            </h3> */}
          <br />
          <br />
          <div className="buttonCont">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="button"
              value="Unfriend"
              className="btn"
              id="denyButton"
              // floated='right'
              // textAlign='right'
              onClick={handleRemove}
            ></input>
          </div>
        </Grid.Row>
      </Card.Group>
      <br></br>
    </>
  );
}
