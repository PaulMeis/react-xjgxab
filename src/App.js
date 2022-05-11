import React, { useState } from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { FirstPage } from './FirstPage';
import { NextPage } from './NextPage';

export function App() {
  const [city, setCity] = useState(null);
  const [peopleCount, setPeopleCount] = useState(null);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/firstpage">First page</Link>
            </li>
            <li>
              <Link to="/nextpage">Next page</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/firstpage">
            <FirstPage
              city={city}
              setCity={setCity}
              peopleCount={peopleCount}
              setPeopleCount={setPeopleCount}
            />
          </Route>
          <Route path="/nextpage">
            <NextPage city={city} peopleCount={peopleCount} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
