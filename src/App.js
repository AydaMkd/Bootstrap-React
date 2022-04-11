import './App.css';
import NavigationBar from './Components/TopBar';
import Background from './Components/BackgroundImage';
import Store from './Components/StoreListings';
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Background />
      <Store/>
    </div>
  );
}

export default App;