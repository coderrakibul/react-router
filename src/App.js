import {Route, Routes} from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import FriendDetails from './component/FriendDetails/FriendDetails';
import Friends from './component/Friends/Friends';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/friends" element={<Friends></Friends>}></Route>
      <Route path="/friend/:id" element={<FriendDetails></FriendDetails>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
      
     </Routes>
    </div>
  );
}

export default App;
