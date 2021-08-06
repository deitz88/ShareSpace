import React, {useState, useEffect } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage'; 
import ProfilePage from '../ProfilePage/ProfilePage';
import MainPhoto from '../MainPhoto/MainPhoto';
import Friends from '../Friends/Friends';
import Requests from '../Requests/Requests';
import AddPost from '../AddPost/AddPost'
import UpdateProfile from '../UpdateProfile/UpdateProfile';
import userService from '../../utils/userService'
import tokenService from '../../utils/tokenService';
import NavBar from '../../components/NavBar/NavBar';
import PhotoPostShow from '../PhotoPostShow/PhotoPostShow'
import AddWriting from '../AddWriting/AddWriting'
import WritingShow from '../WritingShow/WritingShow';
import UpdateWriting from '../UpdateWriting/UpdateWriting';



function App() {
  
  const history=useHistory()
  const [user, setUser] = useState(userService.getUser()) // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like 
  // this  const token = createJWT(user); // where user was the document we created from mongo

  function handleSignUpOrLogin(){
    setUser(userService.getUser()) // getting the user from localstorage decoding the jwt
  }

  function handleLogout(){
    tokenService.removeToken()
    userService.logout();
    setUser(null)
    history.push('/')
  }

  return (
    <div className="App">
       <NavBar user={user} handleSignUpOrLogin={handleSignUpOrLogin} handleLogout={handleLogout}/>
      <Switch>
          <Route exact path="/login">
             <LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>
          </Route>
          <Route exact path="/signup">
             <SignupPage handleSignUpOrLogin={handleSignUpOrLogin}/>
          </Route>
          {user ? 
            <> 
             <Switch>
            <Route exact path="/update">
              <UpdateProfile user={user} handleLogout={handleLogout}/>
            </Route>
            <Route exact path="/mainphoto">
              <MainPhoto user={user} handleLogout={handleLogout}/>
            </Route>
              <Route exact path="/">
                  Home PAGE COMPONENT WOULD GO HEREE
              </Route>
              <Route exact path="/friends">
                <Friends user={user} handleLogout={handleLogout} handleSignUpOrLogin={handleSignUpOrLogin}/>
              </Route>
              <Route exact path="/requests">
                <Requests user={user} handleLogout={handleLogout} handleSignUpOrLogin={handleSignUpOrLogin}/>
              </Route>
              <Route exact path="/addpost">
                <AddPost user={user} handleLogout={handleLogout} handleSignUpOrLogin={handleSignUpOrLogin}/>
              </Route>
              <Route exact path="/addwriting">
                <AddWriting user={user} handleLogout={handleLogout} handleSignUpOrLogin={handleSignUpOrLogin}/>
              </Route>
              <Route exact path="/updatewriting/:id">
                <UpdateWriting user={user} handleLogout={handleLogout} handleSignUpOrLogin={handleSignUpOrLogin}/>
              </Route>
              <Route path="/show/:id">
                <PhotoPostShow user={user} handleLogout={handleLogout} handleSignUpOrLogin={handleSignUpOrLogin}/>
              </Route>
              <Route path="/writing/:id">
                <WritingShow user={user} handleLogout={handleLogout} handleSignUpOrLogin={handleSignUpOrLogin}/>
              </Route>
              <Route path="/:username">
                <ProfilePage user={user} handleLogout={handleLogout} handleSignUpOrLogin={handleSignUpOrLogin}/>
              </Route>

            </Switch>
            </>
            :
            <Redirect to='/login'/>
          }
  
      </Switch>
    </div>
  );
}

export default App;
