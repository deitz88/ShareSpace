import './NavBar.css';
import React, { useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import {Segment, Header, Icon, Image } from 'semantic-ui-react'


export default function NavBar({user, handleLogout, handleProfile}){
// console.log(user)
    return (
        <Segment clearing>
            <Header as='h2' floated='right'>
                <Link to="/main"><Icon name="home"></Icon></Link>
                <Link to="/notifications">
                    <Icon name="bell">
                        <div className='notificationNumberContainer'>
                        <span className='notificationNumber'>2</span>
                        </div>
                    </Icon>
                </Link>
                <Link to="/requests">
                    <Icon name="handshake">
                        <div className='requestNumberContainer'>
                        <span className='requestNumber'>7</span>
                        </div>
                    </Icon>
                </Link>
                {/* <div class="ui top  dropdown item">
                <i class="icon bell outline"></i>
                <div id="live_message_badge_main_header" class="floating ui red label hidden" >
                <span class='live_message_badge'>&nbsp;</span>
                </div>
                </div> */}
                <Link to={user.username}><Icon name="user circle outline"></Icon></Link>
                <Link to='' onClick={handleLogout}><span className='logoutText'>Logout</span></Link>
            </Header>
            <Header as='h2' floated='left'>
                <Link to='/'><Image className='headerLogo' src="https://i.imgur.com/zWf0THW.png" size='mini'></Image></Link>          
            </Header>
        </Segment>
    )
            
}




{/* <Header as='h2' floated='left'>
                <Link to='/'><Image src={user.photoUrl ? user.photoUrl : "https://react.semantic-ui.com/images/wireframe/square-image.png"} avatar></Image></Link>          
            </Header> */}

          