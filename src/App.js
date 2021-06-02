import './App.css';
import Footer from './Components/Footer/Footer';
import ContentBox from './Components/LandingPage/ContentBox';
import { Route, Router, Switch } from 'react-router-dom';
import Guidelines from './Components/Pages/Guidelines';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/guidelines'>
          <Guidelines />
        </Route>
        <Route path='/' exact>
          <ContentBox />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
