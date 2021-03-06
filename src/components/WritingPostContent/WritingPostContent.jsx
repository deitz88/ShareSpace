import React from "react";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";
import "./WritingPostContent.css";

export default function WritingPostContent({
  user,
  profileUser,
  writings,
  error,
}) {
  if (error) {
    return <h1>error!</h1>;
  } else {
    if (!writings.length) {
      return (
        <>
          <br></br>
          <br></br>
          <Card.Group className="headerCard">
            <Card
              fluid
              header={
                user._id === profileUser._id
                  ? "Your Writings"
                  : profileUser.username + "'s Writings"
              }
            />
          </Card.Group>
          <br></br>
          <h4 className="noPosts">No Writings Yet...</h4>
        </>
      );
    } else {
      return (
        <>
          <br></br>
          <br></br>
          <Card.Group className="headerCard">
            <Card
              fluid
              header={
                user._id === profileUser._id
                  ? "Your Writings"
                  : profileUser.username + "'s Writings"
              }
            />
          </Card.Group>
          <br></br>
          <Card.Group itemsPerRow={3}>
            {writings.map((writing) => {
              return (
                <Card
                  className="titleCard"
                  as={Link}
                  key={writing._id}
                  to={"writing/" + writing._id}
                >
                  <Card.Content>
                    <h4>{writing.title}</h4>
                  </Card.Content>
                </Card>
              );
            })}
          </Card.Group>
        </>
      );
    }
  }
}
