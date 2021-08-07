import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import postService from "../../utils/postService";
import {
  Grid,
  Loader,
  Card,
  Header,
  Image,
  Button,
  Segment,
  Icon,
} from "semantic-ui-react";
import "./MainWriting.css";
import WritingPostFeed from "../../components/WritingPostFeed/WritingPostFeed";
import likesService from "../../utils/likesService";





export default function MainWriting({ user, handleLogout }) {
  const [writings, setWritings] = useState([]);
//   const [loading, setLoading] = useState(true);

  async function getWritings() {
    const data = await postService.getAllWritingPosts();
    setWritings([...data.writings]);
  }
  async function addLikeWriting(id) {
    try {
      await likesService.addLikeWriting(id);
      getWritings();
    } catch (err) {
      console.log(err);
    }
  }

  async function removeLikeWriting(id) {
    try {
     await likesService.removeLikeWriting(id);
     getWritings();
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getWritings();
  }, []);
  if (writings.length < 1) {
    return (
      <Grid
        textAlign="center"
        style={{ height: "65vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Loader size="large" active>
            Loading
          </Loader>
        </Grid.Column>
      </Grid>
    );
  } else {
    return (
      <Grid
        textAlign="center"
        style={{ height: "65vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <br></br>
          <br></br>
          <Card.Group className="headerCard">
            <Card fluid header="Browse Posts:" />
          </Card.Group>
          <br></br>
          <Card.Group itemsPerRow={2}>
            {writings.map((writing) => {
              return (
                <WritingPostFeed key={writing._id} writing={writing} addLikeWriting={addLikeWriting} removeLikeWriting={removeLikeWriting} user={user}/>
              );
            })}
          </Card.Group>
        </Grid.Column>
      </Grid>
    );
  }
}
