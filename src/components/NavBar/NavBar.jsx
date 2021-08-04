import './NavBar.css';
import React, { useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import {Segment, Header, Icon, Image } from 'semantic-ui-react'


export default function NavBar({user, handleLogout}){
 
    return (
        user ? 
            <Segment clearing>
                <Header as='h2' floated='right'>
                    <Link to="/main"><Icon name="home"></Icon></Link>
                    <Link to="/notifications">
                        {/* <Icon name="bell">
                            <div className='notificationNumberContainer'>
                            <span className='notificationNumber'>7</span>
                            </div>
                        </Icon> */}
                    </Link>
                    <Link to="/requests">
                        <Icon name="wait">
                            <div className='requestNumberContainer'>
                            <span className='requestNumber'>{user.friendRequests.length ? user.friendRequests.length : ''}</span>
                            </div>
                        </Icon>
                    </Link>
                    <Link to="/friends">
                        <Icon name="handshake">
                            <div className='friendNumberContainer'>
                            <span className='friendNumber'>{user.friends.length ? user.friends.length : ''}</span>
                            </div>
                        </Icon>
                    </Link>
                    <Link to={user.username} ><Icon name="user circle outline"></Icon></Link>
                    <Link to='/addpost' ><Icon name="plus square outline"></Icon></Link>
                    <Link to='' onClick={handleLogout}><span className='logoutText'>Logout</span></Link>
                </Header>
                <Header as='h2' floated='left'>
                    <Link to='/'><Image className='headerLogo' src="https://i.imgur.com/zWf0THW.png" size='mini'></Image></Link>          
                </Header>
            </Segment>
          :
          <h1>no user</h1>  
        
    )
            
}



{/* <Header as='h2' floated='left'>
                <Link to='/'><Image src={user.photoUrl ? user.photoUrl : "https://react.semantic-ui.com/images/wireframe/square-image.png"} avatar></Image></Link>          
            </Header> */}

          