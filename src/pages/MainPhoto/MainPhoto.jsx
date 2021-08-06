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
import "./MainPhoto.css";
import PhotoPostFeed from "../../components/PhotoPostFeed/PhotoPostFeed";

export default function Main({ user, handleLogout }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getPosts() {
    const data = await postService.getAllPhotoPosts();
    setPosts([...data.posts]);
  }

  useEffect(() => {
    getPosts();
  }, []);

  if (posts.length < 1) {
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
            {posts.map((post) => {
              return (
                <PhotoPostFeed post={post} />
              );
            })}
          </Card.Group>
        </Grid.Column>
      </Grid>
    );
  }
}
