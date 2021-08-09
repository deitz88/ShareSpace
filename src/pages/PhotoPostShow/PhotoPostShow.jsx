import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import postService from "../../utils/postService";
import { Card, Grid, Segment, Icon, Loader, MenuMenu } from "semantic-ui-react";
import "./PhotoPostShow.css";
import PhotoPostCard from "../../components/PhotoPostCard/PhotoPostCard";
import likesService from "../../utils/likesService";
import commentService from "../../utils/commentService";

export default function PhotoPostShow({ user }) {
  const { id } = useParams();
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const [commentsAndUsers, setCommentsAndUsers] = useState([]);
  const [dropdown, setDropdown] = useState(false);
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);
  const [comment, setComment] = useState("");
  const [input, setInput] = useState({
    comment: "",
    postId: id,
  });

  useEffect(() => {
    async function getPost(id) {
      setLoading(true);
      const retrievedPost = await postService.getPost(id);
      setPost(retrievedPost);
      setCommentsAndUsers(retrievedPost.commentsAndUser);
      setLoading(false);
    }
    getPost(id);
  }, []);

  async function getPost(id) {
    const retrievedPost = await postService.getPost(id);
    setPost(retrievedPost);
    setCommentsAndUsers(retrievedPost.commentsAndUser);
  }

  async function addLike(postId) {
    try {
      await likesService.addLike(postId);
      getPost(id);
    } catch (err) {
      console.log(err);
    }
  }
  async function handleDeleteComment(e) {
    e.preventDefault();
    await commentService.deleteWritingComment(comment);
    getPost(id);
    history.push(`post/${id}`);
  }

  async function removeLike(likeID) {
    try {
      await likesService.removeLike(likeID);
      getPost(id);
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
    const data = await commentService.addPhotoComment(input);
    await getPost(id);
    setShow(!show)
  }
  function toggleDropdown(e) {
    e.preventDefault();
    setDropdown(!dropdown);
    setComment(e.target.id);
    setMenu(!menu);
  }
  async function addLikeComment(commentId) {
    try {
      const data = await likesService.addLikeComment(commentId);
      getPost(id);
    } catch (err) {
      console.log(err);
    }
  }
  async function removeLikeComment(likeID) {
    try {
      await likesService.removeLikeComment(likeID);
      getPost(id);
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
      <PhotoPostCard
        post={post}
        user={user}
        removeLike={removeLike}
        addLike={addLike}
        handleCommentSubmit={handleCommentSubmit}
        menu={menu}
        handleDeleteComment={handleDeleteComment}
        handleChange={handleChange}
        commentsAndUsers={commentsAndUsers}
        toggleDropdown={toggleDropdown}
        dropdown={dropdown}
        addLikeComment={addLikeComment}
        comment={comment}
        removeLikeComment={removeLikeComment}
        setShow={setShow}
        show={show}
      />
    );
  }
}
