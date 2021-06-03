import './App.css';
import Footer from './Components/Footer/Footer';
import ContentBox from './Components/LandingPage/ContentBox';

function App() {
  return (
    <div className='App'>
      {/* <Switch>
        <Route path='/guidelines'>
          <Guidelines />
        </Route>
        <Route path='/' exact> */}
      <ContentBox />
      <Footer />
      {/* </Route>
      </Switch> */}
    </div>
  );
}

export default App;
