import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Modal, Image, Grid, Segment, Header } from "semantic-ui-react";
import "./Home.css";
export default function Home({ user }) {
  const [toggle, setToggle] = useState(true);
  const [open, setOpen] = useState(true);

  const history = useHistory();
  useEffect(() => {
    setOpen(true);
  }, []);

  function handleLogin(e) {
    e.preventDefault();
    history.push("/login");
  }
  function handleSignup(e) {
    e.preventDefault();
    history.push("/signup");
  }

  if (toggle === true) {
    return (
      <Modal
      closeIcon
        open={open}
        onClose={() => setToggle(false)}
        onOpen={() => setOpen(true)}
      >
        <Header style={{background: 'ivory'}} textAlign='center'>
          Welcome to Share Space
        </Header>
        <Image
          className="logoGif"
          src='https://i.imgur.com/S9tbSpK.gif'
        />
        <Segment id="homeText" floating>
          <Header textAlign='centered'>
           Share Space is a place to share, meet,<br />
           and connect with like minded individuals.
           <br /><br /> 
           Join us today!
            </Header>
        </Segment>
        <Grid.Row>
          <br />
          <br />
          <div className="homeButtonContainer">
            <input
              type="button"
              value="Signup"
              className="homeButton"
              id="homeButton"
              onClick={handleSignup}
            ></input>
            <input
              type="button"
              value="Login"
              className="homeButton"
              id="homeButton"
              onClick={handleLogin}
            ></input>
          </div>
        </Grid.Row>

        {/* <Button id='signupButton'>Signup</Button> <Button id='signupButton'>Login</Button> */}
      </Modal>
    );
  } else {
    if (user) {
      history.push("/mainPhoto");
    } else {
      history.push("/login");
    }
    return <h1>...Redirecting</h1>;
  }
}
