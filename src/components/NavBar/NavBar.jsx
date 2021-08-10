import "./NavBar.css";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Segment, Header, Icon, Image, Message } from "semantic-ui-react";

export default function NavBar({ user, handleSignUpOrLogin, handleLogout }) {
  const [postLink, setPostLink] = useState(false)
  const [hover, setHover] = useState('');
  function postClick(){
    setPostLink(!postLink)
  }
 
  return user ? (
    <Segment clearing className='navContainer'>
      <Header as="h2" floated="right">
        <Link to="/mainphoto">
          <Icon name="camera retro" onMouseEnter={()=>setHover('mainPhoto')} onMouseLeave={()=>setHover('')}></Icon>
        </Link>
        {hover === 'mainPhoto' ?
        <div className='iconMsgCont'>
        <h5 className='iconName' id='mainPhoto'>Post Feed</h5>
        </div>
        :
        ''
        }
        <Link to="/mainwriting" onMouseEnter={()=>setHover('mainWriting')} onMouseLeave={()=>setHover('')}>
          <Icon name="copy"></Icon>
        </Link>
        {hover === 'mainWriting' ?
        <div className='iconMsgCont'>
        <h5 className='iconName' id='mainWriting'>Writing Feed</h5>
        </div>
        :
        ''
        }
        <Link to="/notifications">
          {/* <Icon name="bell">
                            <div className='notificationNumberContainer'>
                            <span className='notificationNumber'>7</span>
                            </div>
                        </Icon> */}
        </Link>
        <Link to="/requests">
          <Icon name="wait" onMouseEnter={()=>setHover('requests')} onMouseLeave={()=>setHover('')}>
            <div className="requestNumberContainer">
              <span className="requestNumber">
                {user.friendRequests.length ? user.friendRequests.length : ""}
              </span>
            </div>
          </Icon>
        </Link>
        {hover === 'requests' ?
        <div className='iconMsgCont'>
        <h5 className='iconName' id='requests'>Requests</h5>
        </div>
        :
        ''
        }
        <Link to="/friends">
          <Icon name="handshake" onMouseEnter={()=>setHover('friends')} onMouseLeave={()=>setHover('')}>
            <div className="friendNumberContainer">
              <span className="friendNumber">
                {user.friends.length ? user.friends.length : ""}
              </span>
            </div>
          </Icon>
        </Link>
        {hover === 'friends' ?
        <div className='iconMsgCont'>
        <h5 className='iconName' id='friends'>Friends</h5>
        </div>
        :
        ''
        }
        <Link to={"/" + user.username} onMouseEnter={()=>setHover('profile')} onMouseLeave={()=>setHover('')} onClick={handleSignUpOrLogin}>
          <Icon name="user circle outline"></Icon>
        </Link>
        {hover === 'profile' ?
        <div className='iconMsgCont'>
        <h5 className='iconName' id='profile'>Profile</h5>
        </div>
        :
        ''
        }
        {/* <Icon name="plus square outline" onClick={postClick}></Icon> */}
        <Link to="/addpost" onMouseEnter={()=>setHover('post')} onMouseLeave={()=>setHover('')}>
          <Icon name="plus square outline" ></Icon>
        </Link>
        {hover === 'post' ?
        <div className='iconMsgCont'>
        <h5 className='iconName' id='post'>Add Post</h5>
        </div>
        :
        ''
        }
        <Link to="/addwriting" onMouseEnter={()=>setHover('writing')} onMouseLeave={()=>setHover('')}>
          <Icon name="pencil alternate">
          <div className="writingSymbolContainer">
              <span className="writingSymbol">
                +
              </span>
            </div>
          </Icon>
        </Link> 
        {hover === 'writing' ?
        <div className='iconMsgCont'>
        <h5 className='iconName' id='writing'>Add Writing</h5>
        </div>
        :
        ''
        }
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
