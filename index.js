import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Home from './Home';
import Layout from './Layout';
import Blogs from './Blogs.js';
import Contact from './Contact';
import NoPage from './NoPage';
import About from './About';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
        <Route path="about" element={<About name="hanzala"/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

reportWebVitals();
