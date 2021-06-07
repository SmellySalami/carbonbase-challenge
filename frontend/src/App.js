import './App.css';
import {Switch, Route} from "react-router-dom";
import {useState} from "react";

import PostList from "./components/PostList";
import Header from "./components/Header";
import SigninForm from "./components/SigninForm";
import SignupForm from "./components/SignupForm";
import Home from "./components/Home";
import Post from "./components/Post"
;
function App() {
  const [currUser, setCurrUser] = useState(() => {
    return null;
  });
  // this can be an user object with id and everything

  return (
    <>
      <Header currUser={currUser} setCurrUser={setCurrUser}/>
      <Switch>
        <Route exact path="/">
          <Home currUser={currUser}/>
        </Route> 
        <Route exact path="/post/:id">
          <Post currUser={currUser}/>
        </Route>
        <Route exact path="/signup">
          <SignupForm setCurrUser={setCurrUser}/>
        </Route>
        <Route exact path="/signin">
          <SigninForm setCurrUser={setCurrUser}/>
        </Route>
      </Switch>
    </>
  );
}

export default App;

