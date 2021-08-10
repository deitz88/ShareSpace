import React, { useState } from "react";
import { Redirect, Route, Switch, useHistory, useLocation } from "react-router-dom";
import "./App.css";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import MainPhoto from "../MainPhoto/MainPhoto";
import Friends from "../Friends/Friends";
import Requests from "../Requests/Requests";
import AddPost from "../AddPost/AddPost";
import UpdateProfile from "../UpdateProfile/UpdateProfile";
import userService from "../../utils/userService";
import tokenService from "../../utils/tokenService";
import NavBar from "../../components/NavBar/NavBar";
import PhotoPostShow from "../PhotoPostShow/PhotoPostShow";
import AddWriting from "../AddWriting/AddWriting";
import WritingShow from "../WritingShow/WritingShow";
import UpdateWriting from "../UpdateWriting/UpdateWriting";
import MainWriting from "../MainWriting/MainWriting";
import Home from "../Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";

function App() {
  const history = useHistory();
  const [user, setUser] = useState(userService.getUser());
  const location = useLocation()


  function handleSignUpOrLogin() {
    setUser(userService.getUser());
  }

  function handleLogout() {
    tokenService.removeToken();
    userService.logout();
    setUser(null);
    history.push("/login");
  }

  return (
    
    <div className="App">
      {location.pathname === '/' ? null :
      <NavBar
        user={user}
        handleSignUpOrLogin={handleSignUpOrLogin}
        handleLogout={handleLogout}
      />
  }
      <Switch>
        <Route exact path="/login">
          <LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />
        </Route>
        <Route exact path="/signup">
          <SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />
        </Route>
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route exact path="/404">
          <ErrorPage />
        </Route>
        {user ? (
            <Switch>
              <Route exact path="/update">
                <UpdateProfile user={user} handleLogout={handleLogout} />
              </Route>
              <Route exact path="/mainphoto">
                <MainPhoto user={user} handleLogout={handleLogout} />
              </Route>
              <Route exact path="/mainwriting">
                <MainWriting user={user} handleLogout={handleLogout} />
              </Route>
              <Route exact path="/friends">
                <Friends
                  user={user}
                  handleLogout={handleLogout}
                  handleSignUpOrLogin={handleSignUpOrLogin}
                />
              </Route>
              <Route exact path="/requests">
                <Requests
                  user={user}
                  handleLogout={handleLogout}
                  handleSignUpOrLogin={handleSignUpOrLogin}
                />
              </Route>
              <Route exact path="/addpost">
                <AddPost
                  user={user}
                  handleLogout={handleLogout}
                  handleSignUpOrLogin={handleSignUpOrLogin}
                />
              </Route>
              <Route exact path="/addwriting">
                <AddWriting
                  user={user}
                  handleLogout={handleLogout}
                  handleSignUpOrLogin={handleSignUpOrLogin}
                />
              </Route>
              <Route exact path="/updatewriting/:id">
                <UpdateWriting
                  user={user}
                  handleLogout={handleLogout}
                  handleSignUpOrLogin={handleSignUpOrLogin}
                />
              </Route>
              <Route path="/show/:id">
                <PhotoPostShow
                  user={user}
                  handleLogout={handleLogout}
                  handleSignUpOrLogin={handleSignUpOrLogin}
                />
              </Route>
              <Route path="/writing/:id">
                <WritingShow
                  user={user}
                  handleLogout={handleLogout}
                  handleSignUpOrLogin={handleSignUpOrLogin}
                />
              </Route>
              <Route exact path="/:username">
                <ProfilePage
                  user={user}
                  handleLogout={handleLogout}
                  handleSignUpOrLogin={handleSignUpOrLogin}
                />
              </Route>
            </Switch>
        ) : (
          <Redirect to="/" />
        )}
      </Switch>
    </div>
  );
}

export default App;
