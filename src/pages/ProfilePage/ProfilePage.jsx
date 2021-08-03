import React, { useState, useEffect } from "react"
import { Router, useHistory } from "react-router-dom"
import './ProfilePage.css';
import userService from "../../utils/userService";
import { useParams, Link } from "react-router-dom";
import { Image, Grid, Icon, Card, Header } from "semantic-ui-react"
import NavBar from "../../components/NavBar/NavBar";
import ProfileContent from "../../components/ProfileContent/ProfileContent";
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import SectionLabel from '../../components/SectionLabel/SectionLabel'

export default function ProfilePage({user, handleLogout}){
    // const [posts, setPosts] = useState([]);
    const [profileUser, setProfileUser] = useState({});
    // const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
  
    const { username } = useParams();
//   username is being destructed from the params route
//   in app.js /:username

  async function getProfile() {
    try {
      const data = await userService.getProfile(username);
      console.log(data, " data");

      // data is the response from the controller function /api/users/profile
      // go to the controller function and look at what is returned
      // posts and user are the properties on the data object
      // setLoading(() => false);
      // setPosts(() => [...data.posts]);
      setProfileUser(() => data.user);
    } catch (err) {
      console.log(err);
      setError("The Profile You Are Looking For Does Not Exist - Please Check Spelling And/Or Casing");
    }
  }
  useEffect(() => {
    getProfile();
  }, []);

  if (error) {
    return (
      <>
        <NavBar />
        <h1>{error}</h1>
      </>
    );
  }

    return(
        <>
        <NavBar user={user} handleLogout={handleLogout}/>
        <Grid
            textAlign="center"
            style={{ height: "65vh" }}
            verticalAlign="middle"
            >
            <Grid.Column style={{ maxWidth: 450 }}>
            <Header floated="right">
            {/* <Link to="/main"><Icon name="setting" floated="right" size='large'></Icon></Link> */}
            </Header>
            {/* <NavBar/> */}
            <ProfileCard user={user}/>
            <Card centered className="profileCard">
                <SectionLabel />
                <ProfileContent />
            </Card>
        </Grid.Column>
        </Grid>
    </>
    )
}



