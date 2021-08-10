import React, { useState, useEffect } from "react";
import { Router, useHistory } from "react-router-dom";
import "./ProfilePage.css";
import userService from "../../utils/userService";
import { useParams, Link } from "react-router-dom";
import { Grid, Card, Header, Loader } from "semantic-ui-react";
import PhotoPostContent from "../../components/PhotoPostContent/PhotoPostContent";
import WritingPostContent from "../../components/WritingPostContent/WritingPostContent";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import friendService from "../../utils/friendService";

export default function ProfilePage({ user, handleSignUpOrLogin }) {
  const history = useHistory();
  const [profileUser, setProfileUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [posts, setPosts] = useState([]);
  const [userWritings, setUserWritings] = useState([]);

  const { username } = useParams();

  async function getProfile() {
    try {
      const data = await userService.getProfile(username);
      setProfileUser(() => data.user);
      setPosts(() => data.posts);
      setLoading(false);
      setUserWritings(() => data.writings);
    } catch (err) {
      setError(
        "The Profile You Are Looking For Does Not Exist - Please Check Spelling And/Or Casing"
      );
    }
  }

  async function requestFriend(userRequest) {
    const updatedUser = await friendService.friendRequest(userRequest);
    setProfileUser(updatedUser);
  }

  useEffect(() => {
    getProfile();
  }, [username]);

  if (error) {
    history.push('/404')
    return (<h1>{error}</h1>);
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
  }
    return (
      <>
        <Grid
          textAlign="center"
          style={{ height: "100vh"}, {margin: '20px'}}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header floated="right">
              {/* <Link to="/main"><Icon name="setting" floated="right" size='large'></Icon></Link> */}
            </Header>
            <ProfileCard
              userRequest={profileUser}
              loggedInUser={user}
              requestFriend={requestFriend}
            />
            <Card centered className="profileCard">
              <PhotoPostContent
                error={error}
                user={user}
                profileUser={profileUser}
                posts={posts}
              />
            </Card>
            <Card centered className="profileCard">
              <WritingPostContent
                user={user}
                profileUser={profileUser}
                writings={userWritings}
              />
            </Card>
          </Grid.Column>
        </Grid>
      </>
    );
}
