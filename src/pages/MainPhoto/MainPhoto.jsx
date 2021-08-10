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
import likesService from "../../utils/likesService";

export default function MainPhoto({ user, handleLogout }) {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState(true);

  function clickToggle(e) {
    e.preventDefault();
    setFilter(!filter);
  }

  async function getPosts() {
    const data = await postService.getAllPhotoPosts();
    setPosts([...data.posts]);
  }
  async function addLike(postId) {
    try {
      await likesService.addLike(postId);
      getPosts();
    } catch (err) {
      console.log(err);
    }
  }

  async function removeLike(likeID) {
    try {
      await likesService.removeLike(likeID);
      getPosts();
    } catch (err) {
      console.log(err);
    }
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
        style={{ height: "100vh"}, {margin: '20px'}}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <br></br>
          <br></br>
          <Card.Group className="headerCard">
            <Card fluid header="Browse Posts:" />
            <Button
              className="toggleButton"
              id="signupButton"
              onClick={clickToggle}
            >
              {filter == true ? "showing recent" : "showing oldest"}
            </Button>
          </Card.Group>
          <br></br>
          <Card.Group itemsPerRow={2} style={{ height: 'fit-content'}}>
            {/* post.sort({}) */}
            {filter == true ? (
              <>
                {posts.slice(0).reverse().map((post) => {
                  return (
                    <PhotoPostFeed
                      key={post._id}
                      post={post}
                      addLike={addLike}
                      removeLike={removeLike}
                      user={user}
                    />
                  );
                })}
              </>
            ) : (
              <>
                {posts.map((post) => {
                  return (
                    <PhotoPostFeed
                      key={post._id}
                      post={post}
                      addLike={addLike}
                      removeLike={removeLike}
                      user={user}
                    />
                  );
                })}
              </>
            )}
          </Card.Group>
        </Grid.Column>
      </Grid>
    );
  }
}
