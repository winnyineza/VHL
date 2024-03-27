import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import Teachers from './pages/Teachers';
import Events from './pages/Events';
import Finance from './pages/Finance';
import Calendar from './pages/Calendar';
import Chat from './pages/Chat';
import Notifications from './pages/Notifications';

// Placeholder component for the pages that are not developed yet
const PlaceholderPage = ({ title }) => (
  <div style={{
    background: 'white', 
    width: '100vw', 
    height: '100vh', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    flexDirection: 'column'
  }}>
    <h1>{title}</h1>
    <h2>Under Construction</h2>
  </div>
);

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/students" component={Students} />
        <Route path="/teachers" component={Teachers} />
        <Route path="/events" component={Events} />
        <Route path="/finance" component={Finance} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/chat" render={() => <PlaceholderPage title="Chat" />} />
        <Route path="/notifications" render={() => <PlaceholderPage title="Notifications" />} />
        {/* Redirect to sign-in page by default */}
        <Route path="/" exact component={SignIn} />
      </Switch>
    </Router>
  );
}

export default App;
