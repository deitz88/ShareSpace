import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Image, Grid } from "semantic-ui-react";
import "./UserCard.css";
import friendService from "../../utils/friendService";

export default function UserCard({
  username,
  user,
  photo,
  handleSignUpOrLogin,
}) {
  const [test, setTest] = useState({});
  async function handleDeny(e) {
    e.preventDefault();
    await friendService.denyRequest(username);
    handleSignUpOrLogin();
  }

  async function handleAccept(e) {
    e.preventDefault();
    await friendService.approveRequest(username);
    await handleSignUpOrLogin();
    setTest(user);
  }

  return (
    <>
      <br></br>
      <br></br>
      <Card.Group className="headerCard">
        <Card.Content text="test">
          {username}
          <Card.Header></Card.Header>
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
          <br />
          <br />
          <div className='buttonCont'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;
            &nbsp;
            <input
              type="button"
              value="Accept"
              className="btn"
              id="acceptButton"
              onClick={handleAccept}
            ></input>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
            <input
              type="button"
              value="Deny"
              className="btn"
              id="denyButton"
              onClick={handleDeny}
            ></input>
          </div>
        </Grid.Row>
      </Card.Group>
      <br></br>
    </>
  );
}
