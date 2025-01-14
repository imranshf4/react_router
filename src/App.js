import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import FriendDetails from './components/FriendDetails/FriendDetails';


const App = () => {

  return (
    <div>
      <Header></Header>
      <Router>
        <div>
          <Routes>
            <Route path="/about">

            </Route>
            <Route path="/topics"></Route>
            <Route path={'/friend/:id'} element={<FriendDetails></FriendDetails>}> </Route>
            <Route exact path="/" element={<Home></Home>}></Route>
            <Route path="*" element={<NoMatch></NoMatch>}>
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;