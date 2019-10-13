import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import PostDetail from './components/posts/PostDetail';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AddPost from './components/posts/AddPost';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch >
          <Route exact path='/codeblogRedux/dashboard' component={Dashboard} />
          <Route path='/codeblogRedux/post/:id' component={PostDetail} />
          <Route path='/codeblogRedux' component={SignIn} />
          <Route path='/codeblogRedux/signup' component={SignUp} />
          <Route path='/codeblogRedux/addpost' component={AddPost} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
