import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, Loader } from "semantic-ui-react";
import postService from "../../utils/postService";
// import "./UpdateWriting.css";
import UpdatePostCard from "../../components/UpdatePostCard/UpdatePostCard";

export default function UpdateWriting({ user }) {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const [input, setInput] = useState({
    content: "",
    user: user,
    id: "",
  });

  async function getPost(id) {
    setLoading(true);
    const retrievedPost = await postService.getPost(id);
    setPost(retrievedPost);
    setLoading(false);
  }

  function test() {
    setInput({
      content: post.post.comment,
      id: post.post._id,
    });
  }

  useEffect(() => {
    getPost(id);
  }, []);

  if (loading) {
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
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <UpdatePostCard handleChange={handleChange} test={test} input={input} />
  );
}
