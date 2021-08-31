
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Changepassword from './components/auth/Changepassword';
import Forgotpassword from './components/auth/Forgotpassword';
import Dashboard from './Dashboard';
import OnboardingStep1 from './components/onboarding/OnboardingStep1';
import OnboardingStep2 from './components/onboarding/OnboardingStep2';
import OnboardingStep3 from './components/onboarding/OnboardingStep3';
import OnboardingProSellerDemo from './components/onboarding/OnboardingProSellerDemo';
import OnboardingWaitlist from './components/onboarding/OnboardingWaitlist';



function App() {
  return (
    <Router>
    <Switch>
    <Route exact path="/">
        <Dashboard/>
      </Route>
      <Route exact path="/dashboard">
        <Dashboard/>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/register">
        <Register/>
      </Route>
      <Route path="/changepassword">
        <Changepassword/>
      </Route>
      <Route path="/forgotpassword">
        <Forgotpassword/>
      </Route>
      <Route path="/onboarding">
       <OnboardingStep1/>
      </Route>
      <Route path="/onboarding-connect">
       <OnboardingStep2/>
      </Route>
      <Route path="/onboarding-launch">
       <OnboardingStep3/>
      </Route>
      <Route path="/onboarding-prosellerdemo">
       <OnboardingProSellerDemo/>
      </Route>
      <Route path="/onboarding-waitinglist">
       <OnboardingWaitlist/>
      </Route>
     
    </Switch>
    </Router>

  );
}

export default App;
