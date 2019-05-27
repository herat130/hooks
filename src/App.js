import React, { useState } from 'react';
import './App.css';
import PeopleContainer from './containers/people';
import { Switch, Route, Link } from 'react-router-dom';
import Bar from './containers/Bar';
import Foo from './containers/Foo';
import AllPeoples from './containers/AllPeoples';

function App() {
  const [counter, setCounter] = useState(2);

  function handleClick() {
    document.title = `increment  : ${counter}`
    setCounter(counter + 1);
  }

  return (
    <div className="App">
      APP Counter :{counter}
      <button onClick={handleClick}>increment</button>
      <PeopleContainer />
      <ul>
        <li><Link to={'/'} >Bar</Link ></li>
        <li><Link to={'/foo'} >Parent Child by hooks</Link ></li>
        <li><Link to={'/allPeople'} >Redux with hooks</Link ></li>
      </ul>
      <Switch>
        <Route path={`/foo`} component={Foo} />
        <Route path={`/allPeople`} component={AllPeoples} />
        <Route path={`/`} component={Bar} />        
        <Route path={`*`} component={Bar} />
      </Switch>
    </div>
  );
}

export default App;

