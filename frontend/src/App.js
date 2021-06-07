import './App.css';
import {Switch, Route} from "react-router-dom";
import {useState} from "react";

import PostList from "./components/PostList";
import Header from "./components/Header";
import SigninForm from "./components/SigninForm";
import SignupForm from "./components/SignupForm";

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
          <PostList/>
        </Route> 
        <Route exact path="/post">
          <PostList/>
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

