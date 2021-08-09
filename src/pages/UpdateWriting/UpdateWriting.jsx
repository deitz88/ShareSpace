import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Form, Grid, Segment, Card, Loader } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import postService from "../../utils/postService";
import "./UpdateWriting.css";
import UpdateWritingCard from "../../components/UpdateWritingCard/UpdateWritingCard";

export default function UpdateWriting({ user, handleLogout }) {
  const { id } = useParams();
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [writing, setWriting] = useState({});
  const [input, setInput] = useState({
    title: "",
    content: "",
    user: user,
    id: "",
  });

  async function getWriting(id) {
    setLoading(true);
    const retrievedWriting = await postService.getWriting(id);
    setWriting(retrievedWriting);
    setLoading(false);
  }

  function test() {
    setInput({
      title: writing.writing.title,
      content: writing.writing.content,
      id: writing.writing._id,
    });
  }

  useEffect(() => {
    getWriting(id);
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
    <UpdateWritingCard handleChange={handleChange} test={test} input={input} />
  );
}
