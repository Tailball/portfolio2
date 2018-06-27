import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Base from './routes/base';
import Contact from './routes/contact';
import NavBar from './components/navbar';


class App extends React.Component {
  render() {
    return <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Base} />
        </Switch>
      </div>
    </BrowserRouter>;
  }
}

export default App;
