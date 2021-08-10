import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import postService from "../../utils/postService";
import { Grid, Loader } from "semantic-ui-react";
import "./WritingShow.css";
import WritingCard from "../../components/WritingCard/WritingCard";
import likesService from "../../utils/likesService";
import commentService from "../../utils/commentService";

export default function WritingShow({ user }) {
  const history = useHistory();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [writing, setWriting] = useState({});
  const [dropdown, setDropdown] = useState(false);
  const [comment, setComment] = useState("");
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);

  const [commentsAndUsers, setCommentsAndUsers] = useState([]);
  const [input, setInput] = useState({
    comment: "",
    writingId: id,
  });

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

  async function getWriting(id) {
    // setLoading(true);
    const retrievedWriting = await postService.getWriting(id);
    setWriting(retrievedWriting);
    setCommentsAndUsers(retrievedWriting.commentsAndUser);
    // setLoading(false);
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
    await commentService.addWritingComment(input);
    await getWriting(id);
    setShow(!show)
  }

  async function addLikeWriting(id) {
    try {
      await likesService.addLikeWriting(id);
      getWriting(id);
    } catch (err) {
      console.log(err);
    }
  }
  async function addLikeComment(commentId) {
    try {
      await likesService.addLikeComment(commentId);
      getWriting(id);
    } catch (err) {
      console.log(err);
    }
  }

  async function removeLikeComment(likeID) {
    try {
      await likesService.removeLikeComment(likeID);
      getWriting(id);
    } catch (err) {
      console.log(err);
    }
  }

  function toggleDropdown(e) {
    e.preventDefault();
    setDropdown(!dropdown);
    setComment(e.target.id);
    setMenu(!menu);
  }

  async function handleDeleteComment(e) {
    e.preventDefault();
    await commentService.deleteWritingComment(comment);
    getWriting(id);
    history.push(`/writing/${id}`);
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
        handleDeleteComment={handleDeleteComment}
        menu={menu}
        dropdown={dropdown}
        comment={comment}
        toggleDropdown={toggleDropdown}
        addLikeComment={addLikeComment}
        removeLikeComment={removeLikeComment}
        show={show}
        setShow={setShow}
      />
    );
  }
}
