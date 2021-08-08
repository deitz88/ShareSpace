import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import postService from "../../utils/postService";
import { Card, Grid, Segment, Icon, Loader } from "semantic-ui-react";
import "./WritingShow.css";
import WritingCard from "../../components/WritingCard/WritingCard";
import likesService from "../../utils/likesService";
import commentService from "../../utils/commentService";

export default function WritingShow({ user }) {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [writing, setWriting] = useState({});
  const [commentsAndUsers, setCommentsAndUsers] = useState([]);
  const [input, setInput] = useState({
    comment: "",
    writingId: id,
  });

  async function getWriting(id) {
    setLoading(true);
    const retrievedWriting = await postService.getWriting(id);
    setWriting(retrievedWriting);
    setLoading(false);
  }

  async function removeLikeWriting(likeID) {
    console.log(id);
    try {
      await likesService.removeLikeWriting(likeID);
      getWriting(id);
    } catch (err) {
      console.log(err);
    }
  }
  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  async function handleCommentSubmit(e) {
    e.preventDefault();
    const data = await commentService.addWritingComment(input);
    getWriting(id);
    console.log(data);
  }
  useEffect(() => {
    async function getWriting(id) {
      setLoading(true);
      const retrievedWriting = await postService.getWriting(id);
      setWriting(retrievedWriting);
      setCommentsAndUsers(retrievedWriting.commentsAndUser);
      setLoading(false);
    }
    getWriting(id);
  }, []);
  async function addLikeWriting(id) {
    try {
      await likesService.addLikeWriting(id);
      getWriting(id);
    } catch (err) {
      console.log(err);
    }
  }

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
  } else {
    return (
      <WritingCard
        writing={writing}
        handleChange={handleChange}
        user={user}
        commentsAndUsers={commentsAndUsers}
        handleCommentSubmit={handleCommentSubmit}
        removeLikeWriting={removeLikeWriting}
        addLikeWriting={addLikeWriting}
      />
    );
  }
}
