import './App.css';
import {BrowserRouter as Router,
  Switch, 
  Route,
} from 'react-router-dom';
import CreatePage from './CreatePage.js';
import DetailPage from './DetailPage.js';
import ListPage from './ListPage.js';
import Header from './Header.js';

function App() {
  return (
    <div>
      <Router>
      <Header/>
        <Switch>
          <Route
            path="/watches"
            exact
            component={ListPage}
          />
          <Route
            path="/watches/:watchId"
            exact
            component={DetailPage}
          />
          <Route
            path="/create"
            exact
            component={CreatePage}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
