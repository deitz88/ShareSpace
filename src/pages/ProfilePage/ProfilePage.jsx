import React, { useState, useEffect } from "react"
import { Router, useHistory } from "react-router-dom"
import './ProfilePage.css';
import userService from "../../utils/userService"
import { useParams, Link } from "react-router-dom";
import { Image, Grid, Icon, Card, Header, Loader } from "semantic-ui-react"
import NavBar from "../../components/NavBar/NavBar";
import ProfileContent from "../../components/PhotoPostContent/PhotoPostContent";
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import SectionLabel from '../../components/SectionLabel/SectionLabel'

export default function ProfilePage({user, handleLogout, setUser}){
  // console.log(user)
    // const [posts, setPosts] = useState([]);
    const [profileUser, setProfileUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [changeProfile, setChangeProfile] = useState({})
    const [update, setUpdate] = useState('word')
    const [posts, setPosts] = useState([])
  
    const { username } = useParams();

    function handleProfile(){
      setChangeProfile(() => getProfile())
    }

  async function getProfile() {
    try {
      const data = await userService.getProfile(username);
      // setPosts(() => [...data.posts]);
      setProfileUser(() => data.user);
      setPosts(() => data.posts)
      setLoading(false)
    } catch (err) {
      console.log(err);
      setError("The Profile You Are Looking For Does Not Exist - Please Check Spelling And/Or Casing");
    }
  }

  useEffect(() => {
    getProfile();
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
  // if (error) {
  //   return (
  //     <>
  //       {/* <NavBar user={user}/> */}
  //       <h1>{error}</h1>
  //     </>
  //   );
  // }
  
    return(
        <>
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
            <ProfileCard 
              userRequest={profileUser} 
              loggedInUser={user} 
              setUser={setUser}
              setProfileUser={setProfileUser}
            />
            <Card centered className="profileCard">
                <SectionLabel />
                <ProfileContent user={user} posts={posts}/>
            </Card>
        </Grid.Column>
        </Grid>
    </>
    )
}



