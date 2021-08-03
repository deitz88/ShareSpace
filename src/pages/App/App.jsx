import React, {useState} from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import NavBar from '../../components/NavBar/NavBar';
import Main from '../Main/Main';
import UpdateProfile from '../UpdateProfile/UpdateProfile';
import userService from '../../utils/userService'
import tokenService from '../../utils/tokenService';



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
    setUser({user: null})
    history.push('/')
  }
 

  return (
    <div className="App">
      <Switch>
          <Route exact path="/login">
             <LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>
          </Route>
          <Route exact path="/signup">
             <SignupPage handleSignUpOrLogin={handleSignUpOrLogin}/>
          </Route>
          {userService.getUser() ? 
            <> 
             <Switch>
            <Route exact path="/update">
                <UpdateProfile user={user} handleLogout={handleLogout}/>
            </Route>
            <Route exact path="/main">
                <Main user={user} handleLogout={handleLogout}/>
            </Route>
                <Route exact path="/">
                    Home PAGE COMPONENT WOULD GO HEREE
                </Route>
                <Route path="/:username">
              <ProfilePage user={user} handleLogout={handleLogout} />
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
