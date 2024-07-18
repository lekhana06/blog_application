import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Users from './Components/Users/Users';
import Blogs from './Components/Blogs/Blogs';
import UserDetail from './Components/Users/UserDetail';
import BlogsDetails from './Components/Blogs/BlogsDetails';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/userDetail/:id/:name" element={<UserDetail />} />
        <Route path="/blogsDetails/:id" element={<BlogsDetails/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
