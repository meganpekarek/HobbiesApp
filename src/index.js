import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './views/Home';
import { Route, Switch, HashRouter } from 'react-router-dom';
import HobbyDetails from './views/HobbyDetails';
import VideoPage from './views/VideoPage';

ReactDOM.render(
    <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/hobby-details/:hobby" component={HobbyDetails} />
          <Route path="/video-page/:videoTitle" component={VideoPage} />
        </Switch>
    </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
