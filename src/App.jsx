import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/signin';
import Profile from './pages/profile';
import About from './pages/About';
import Header from './component/header';


export default function App() {
  return (
  <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sign-in" element={<SignIn />} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/about" element={<About />} />
    <Route path="/profile" element={<Profile />} />
  </Routes>
  </BrowserRouter>
  );
}
