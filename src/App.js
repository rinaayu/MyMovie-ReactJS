import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/Trending';
import Horror from './components/Horror';
import "./style/style.css";

function App() {
  return (
    <div>
      {/* Intro Section */}
      <div className='myBg'>
        <NavigationBar />
        <Intro />
      </div>
      {/* End of Intro */}
      {/* Trending Section*/}
      <div className='trending'>
        <Trending />
      </div>
      {/* End of Trending Section*/}

      {/* Horror Section*/}
      <div className='horror'>
        <Horror />
      </div>
      {/* End of Horror Section*/}
    </div>
  );
}

export default App;
