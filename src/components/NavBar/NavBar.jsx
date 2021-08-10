import "./NavBar.css";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Segment, Header, Icon, Image } from "semantic-ui-react";

export default function NavBar({ user, handleSignUpOrLogin, handleLogout }) {
  const [postLink, setPostLink] = useState(false)
  function postClick(){
    setPostLink(!postLink)
  }
  return user ? (
    <Segment clearing className='navContainer'>
      <Header as="h2" floated="right">
        <Link to="/mainphoto">
          <Icon name="camera retro"></Icon>
        </Link>
        <Link to="/mainwriting">
          <Icon name="copy"></Icon>
        </Link>
        <Link to="/notifications">
          {/* <Icon name="bell">
                            <div className='notificationNumberContainer'>
                            <span className='notificationNumber'>7</span>
                            </div>
                        </Icon> */}
        </Link>
        <Link to="/requests">
          <Icon name="wait">
            <div className="requestNumberContainer">
              <span className="requestNumber">
                {user.friendRequests.length ? user.friendRequests.length : ""}
              </span>
            </div>
          </Icon>
        </Link>
        <Link to="/friends">
          <Icon name="handshake">
            <div className="friendNumberContainer">
              <span className="friendNumber">
                {user.friends.length ? user.friends.length : ""}
              </span>
            </div>
          </Icon>
        </Link>
        <Link to={"/" + user.username} onClick={handleSignUpOrLogin}>
          <Icon name="user circle outline"></Icon>
        </Link>
        {/* <Icon name="plus square outline" onClick={postClick}></Icon> */}
        <Link to="/addpost">
          <Icon name="plus square outline"></Icon>
        </Link>
        <Link to="/addwriting">
          <Icon name="pencil alternate">
          <div className="writingSymbolContainer">
              <span className="writingSymbol">
                +
              </span>
            </div>
          </Icon>
        </Link> 
        <Link to="" onClick={handleLogout}>
          <span className="logoutText">Logout</span>
        </Link>
      </Header>
      <Header as="h2" floated="left">
        <Link to="/">
          <Image
            className="headerLogo"
            src="https://i.imgur.com/zWf0THW.png"
            size="mini"
          ></Image>
        </Link>
      </Header>
    </Segment>
  ) : (
    <Segment clearing className='navContainer'>
      <Header as="h2" floated="left">
        <Link to="/">
          <Image
            className="headerLogo"
            src="https://i.imgur.com/zWf0THW.png"
            size="mini"
          ></Image>
        </Link>
      </Header>
      <Header as="h2" floated="right">
        <Link to="/login">
          <span className="logoutText">Login</span>
        </Link>
      </Header>
    </Segment>
  );
}

{
  /* <Header as='h2' floated='left'>
                <Link to='/'><Image src={user.photoUrl ? user.photoUrl : "https://react.semantic-ui.com/images/wireframe/square-image.png"} avatar></Image></Link>          
            </Header> */
}
