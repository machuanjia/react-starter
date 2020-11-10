// import logo from './logo.svg';
// import './App.less';
// import * as React from 'react'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React from 'react'
import { Route, Redirect } from 'react-router'
import { HashRouter, Switch } from 'react-router-dom'

import Home from '@/views/home'
import About from 'Views/about'

const Routes = () => (
  <HashRouter>
    <div>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  </HashRouter>
)

const App = () => (
  <Routes />
)

export default App